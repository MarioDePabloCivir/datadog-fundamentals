"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { ArrowCounterClockwise } from "@phosphor-icons/react";
import {
  DOMAIN_LABELS,
  type DomainId,
  type Flashcard,
  flashcards,
} from "@/data/flashcards";
import {
  getProgressSnapshot,
  getServerProgressSnapshot,
  setStatus,
  subscribeProgress,
  clearProgress,
  type CardStatus,
} from "@/lib/progress";
import { GlossedText, GlossScope } from "@/components/GlossedText";
import { RichAnswer } from "@/components/RichAnswer";
import { VersusDuel } from "@/components/VersusDuel";

const SWIPE_PX = 110;

type KnowledgeFilter = "all" | "known" | "unknown";

function matchesFilters(
  card: Flashcard,
  domain: DomainId | "all",
  knowledge: KnowledgeFilter,
  progress: Record<string, CardStatus>,
) {
  if (domain !== "all" && card.domain !== domain) return false;
  const isKnown = progress[card.id] === "known";
  if (knowledge === "known") return isKnown;
  if (knowledge === "unknown") return !isKnown;
  return true;
}

function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function filteredDeck(
  domain: DomainId | "all",
  knowledge: KnowledgeFilter,
  progress: Record<string, CardStatus>,
) {
  return shuffle(
    flashcards.filter((card) =>
      matchesFilters(card, domain, knowledge, progress),
    ),
  );
}

export function FlashcardDeck() {
  const progress = useSyncExternalStore(
    subscribeProgress,
    getProgressSnapshot,
    getServerProgressSnapshot,
  );
  const [deck, setDeck] = useState(flashcards);
  const [domain, setDomain] = useState<DomainId | "all">("all");
  const [knowledge, setKnowledge] = useState<KnowledgeFilter>("all");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const pointer = useRef<number | null>(null);

  function applyFilters(
    nextDomain: DomainId | "all",
    nextKnowledge: KnowledgeFilter,
    nextProgress = progress,
  ) {
    setDomain(nextDomain);
    setKnowledge(nextKnowledge);
    setDeck(filteredDeck(nextDomain, nextKnowledge, nextProgress));
    setIndex(0);
    setFlipped(false);
    setDragX(0);
  }

  const card: Flashcard | undefined = deck[index];
  const known = Object.values(progress).filter((s) => s === "known").length;
  const total = flashcards.length;

  function mark(status: CardStatus) {
    if (!card) return;
    const nextProgress = setStatus(card.id, status);
    const remaining = deck.filter((item) => {
      if (item.id === card.id) return false;
      return matchesFilters(item, domain, knowledge, nextProgress);
    });
    setDeck(remaining);
    setFlipped(false);
    setDragX(0);
    setIndex((i) => (remaining.length === 0 ? 0 : i >= remaining.length ? 0 : i));
  }

  function onPointerDown(event: React.PointerEvent<HTMLElement>) {
    if (!card) return;
    if ((event.target as HTMLElement).closest("button, a")) return;
    pointer.current = event.pointerId;
    startX.current = event.clientX;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: React.PointerEvent<HTMLElement>) {
    if (pointer.current !== event.pointerId) return;
    setDragX(event.clientX - startX.current);
  }

  function onPointerUp(event: React.PointerEvent<HTMLElement>) {
    if (pointer.current !== event.pointerId) return;
    const delta = event.clientX - startX.current;
    pointer.current = null;
    setDragging(false);
    if (delta > SWIPE_PX) {
      mark("known");
      return;
    }
    if (delta < -SWIPE_PX) {
      mark("learning");
      return;
    }
    setDragX(0);
  }

  const domains = Object.keys(DOMAIN_LABELS) as DomainId[];
  const rotate = Math.max(-12, Math.min(12, dragX / 18));
  const knowHint = Math.min(1, Math.max(0, dragX / SWIPE_PX));
  const skipHint = Math.min(1, Math.max(0, -dragX / SWIPE_PX));

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div className="neo-in flex flex-col gap-3 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <p>
            Progreso: <strong>{known}</strong> de {total} marcadas como «las sé».
            Carta {deck.length ? index + 1 : 0} de {deck.length} en este mazo.
          </p>
          <div
            className="mt-2 h-3 overflow-hidden rounded-full neo-in"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={known}
            aria-label="Cartas dominadas"
          >
            <div
              className="h-full rounded-full bg-[var(--color-accent)]"
              style={{ width: `${total ? (known / total) * 100 : 0}%` }}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="neo-btn inline-flex min-h-11 items-center gap-2 px-3 py-2 font-semibold"
            onClick={() => applyFilters(domain, knowledge)}
          >
            <ArrowCounterClockwise aria-hidden="true" size={18} weight="bold" />
            Barajar
          </button>
          <button
            type="button"
            className="neo-btn inline-flex min-h-11 items-center gap-2 px-3 py-2 font-semibold"
            onClick={() => {
              if (
                window.confirm(
                  "¿Borrar el progreso de todas las flashcards en este navegador?",
                )
              ) {
                clearProgress();
                applyFilters(domain, knowledge, {});
              }
            }}
          >
            Resetear progreso
          </button>
        </div>
      </div>

      <fieldset className="flex flex-wrap gap-2">
        <legend className="sr-only">Filtrar cartas</legend>
        <button
          type="button"
          className={`neo-btn px-3 py-2 text-sm font-semibold ${domain === "all" && knowledge === "all" ? "neo-btn-primary" : ""}`}
          onClick={() => applyFilters("all", "all")}
        >
          Todos
        </button>
        {domains.map((id) => (
          <button
            key={id}
            type="button"
            className={`neo-btn px-3 py-2 text-sm font-semibold ${domain === id ? "neo-btn-primary" : ""}`}
            onClick={() => applyFilters(id, knowledge)}
          >
            {DOMAIN_LABELS[id]}
          </button>
        ))}
        <button
          type="button"
          className={`neo-btn px-3 py-2 text-sm font-semibold ${knowledge === "unknown" ? "neo-btn-primary" : ""}`}
          onClick={() =>
            applyFilters(domain, knowledge === "unknown" ? "all" : "unknown")
          }
        >
          No las sé
        </button>
        <button
          type="button"
          className={`neo-btn px-3 py-2 text-sm font-semibold ${knowledge === "known" ? "neo-btn-primary" : ""}`}
          onClick={() =>
            applyFilters(domain, knowledge === "known" ? "all" : "known")
          }
        >
          Las sé
        </button>
      </fieldset>

      {card ? (
        <div className="flash-stack">
          {deck.length > 2 ? (
            <div
              className="flash-stack-ghost"
              style={{ transform: "scale(0.92) translateY(18px)", opacity: 0.55 }}
            />
          ) : null}
          {deck.length > 1 ? (
            <div
              className="flash-stack-ghost"
              style={{ transform: "scale(0.96) translateY(10px)", opacity: 0.8 }}
            />
          ) : null}
          <article
            className={`neo-out flash-card flex cursor-grab flex-col p-8 touch-none select-none ${
              progress[card.id] === "known" ? "neo-card-known" : ""
            } ${dragging ? "cursor-grabbing" : ""}`}
            style={{
              transform: `translateX(${dragX}px) rotate(${rotate}deg)`,
              transition: dragging ? "none" : "transform 180ms ease",
            }}
            aria-label={
              progress[card.id] === "known"
                ? `${DOMAIN_LABELS[card.domain]}, ya la sabes`
                : DOMAIN_LABELS[card.domain]
            }
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") mark("known");
              if (event.key === "ArrowLeft") mark("learning");
            }}
            tabIndex={0}
          >
            <div
              className="flash-veil"
              style={{
                background:
                  knowHint > skipHint
                    ? `color-mix(in srgb, var(--color-accent) ${Math.round(knowHint * 28)}%, transparent)`
                    : `color-mix(in srgb, var(--color-danger) ${Math.round(skipHint * 28)}%, transparent)`,
              }}
              aria-hidden="true"
            />
            <div
              className="swipe-stamp swipe-stamp-ok"
              style={{ opacity: knowHint }}
              aria-hidden="true"
            >
              La sé
            </div>
            <div
              className="swipe-stamp swipe-stamp-ko"
              style={{ opacity: skipHint }}
              aria-hidden="true"
            >
              Repasar
            </div>
            <GlossScope key={card.id}>
            {card.versus ? (
              <VersusDuel sides={card.versus} revealed={flipped} />
            ) : (
              <h2 className="font-display text-center text-2xl leading-snug">
                <GlossedText text={card.front} />
              </h2>
            )}
            {flipped ? (
              <div className="mt-6 flex w-full flex-col items-center gap-4">
                {card.versus ? null : (
                  <div className="w-full text-left">
                    <RichAnswer text={card.back} />
                  </div>
                )}
                <div className="neo-in p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                    Fuente
                  </p>
                  <ul className="mt-2 flex flex-col gap-2">
                    {card.sources.map((source) => (
                      <li key={`${source.url}-${source.note ?? source.title}`}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-semibold text-[var(--color-primary)] underline underline-offset-2"
                        >
                          {source.title}
                        </a>
                        {source.note ? (
                          <p className="text-sm text-[var(--color-muted-foreground)]">
                            {source.note}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  className="neo-btn px-4 py-2 text-sm font-semibold"
                  onClick={() => setFlipped(false)}
                >
                  Ocultar respuesta
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="neo-btn mx-auto mt-8 px-4 py-3 font-semibold"
                onClick={() => setFlipped(true)}
              >
                Mostrar respuesta
              </button>
            )}
            </GlossScope>
          </article>
        </div>
      ) : (
        <p className="neo-in p-6">No hay cartas en este filtro.</p>
      )}
    </div>
  );
}
