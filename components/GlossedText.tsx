"use client";

import { type ReactNode } from "react";
import { GLOSSARY } from "@/lib/glossary";

export function GlossScope({ children }: { children: ReactNode }) {
  return children;
}

export function GlossedText({ text }: { text: string }) {
  const tokens = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

  return (
    <>
      {tokens.map((token, index) => {
        if (token.startsWith("**") && token.endsWith("**")) {
          return (
            <strong
              key={index}
              className="font-semibold text-[var(--color-foreground)]"
            >
              <GlossPlain text={token.slice(2, -2)} />
            </strong>
          );
        }
        if (token.startsWith("`") && token.endsWith("`")) {
          return (
            <code
              key={index}
              className="rounded bg-[var(--neo-bg-dark)] px-1 py-0.5 font-mono text-[0.9em] font-semibold text-[var(--color-foreground)]"
            >
              {token.slice(1, -1)}
            </code>
          );
        }
        return <GlossPlain key={index} text={token} />;
      })}
    </>
  );
}

function GlossPlain({ text }: { text: string }) {
  const terms = [...GLOSSARY].sort((a, b) => b[0].length - a[0].length);
  const nodes: ReactNode[] = [];
  let index = 0;
  let part = 0;

  while (index < text.length) {
    let hit: { length: number; value: string; gloss: string } | null = null;
    for (const [term, gloss] of terms) {
      const end = index + term.length;
      if (end > text.length) continue;
      if (text.slice(index, end).toLowerCase() !== term.toLowerCase()) continue;
      const before = index === 0 || !/[A-Za-z0-9_]/.test(text[index - 1]!);
      const after = end === text.length || !/[A-Za-z0-9_]/.test(text[end]!);
      if (before && after) {
        hit = { length: term.length, value: text.slice(index, end), gloss };
        break;
      }
    }
    if (hit) {
      nodes.push(
        <span
          key={part}
          className="gloss-term"
          title={hit.gloss}
          tabIndex={0}
        >
          {hit.value}
          <span className="gloss-tip" aria-hidden="true">
            {hit.gloss}
          </span>
        </span>,
      );
      index += hit.length;
    } else {
      const last = nodes[nodes.length - 1];
      if (typeof last === "string") {
        nodes[nodes.length - 1] = last + text[index];
      } else {
        nodes.push(text[index]!);
      }
      index += 1;
    }
    part += 1;
  }

  return <>{nodes}</>;
}
