import Link from "next/link";
import { CardsThree, Path, FilePdf } from "@phosphor-icons/react/dist/ssr";
import { examInfo } from "@/data/examInfo";
import { flashcards } from "@/data/flashcards";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="neo-out p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
          Certificación Datadog
        </p>
        <h1 className="font-display mt-2 text-4xl md:text-5xl">
          Estudia Fundamentals con flashcards
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted-foreground)]">
          Temario alineado a la guía oficial (agosto 2026) y a la página de
          certificación: Agent, keys, red, DogStatsD, tags, dashboards y
          monitors. {flashcards.length} cartas. El examen real es de opción
          múltiple; esto es para memorizar conceptos, no un dump de preguntas.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/study"
            className="neo-btn neo-btn-primary inline-flex min-h-11 items-center gap-2 px-5 py-3 font-semibold"
          >
            <CardsThree aria-hidden="true" size={20} weight="duotone" />
            Empezar flashcards
          </Link>
          <Link
            href="/examen"
            className="neo-btn inline-flex min-h-11 items-center gap-2 px-5 py-3 font-semibold"
          >
            Datos oficiales del examen
          </Link>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl">Dominios del exam guide</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {examInfo.domains.map((domain) => (
            <li key={domain.id} className="neo-out p-5">
              <h3 className="font-display text-lg">{domain.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                {domain.topics.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="neo-in p-6">
        <h2 className="font-display text-xl">Fuentes oficiales</h2>
        <ul className="mt-3 flex flex-col gap-2 text-[var(--color-primary)]">
          <li>
            <a className="underline underline-offset-2" href={examInfo.examGuidePdf}>
              <FilePdf aria-hidden="true" className="mr-1 inline" size={16} />
              Exam guide PDF
            </a>
          </li>
          <li>
            <a className="underline underline-offset-2" href={examInfo.learningPath}>
              <Path aria-hidden="true" className="mr-1 inline" size={16} />
              Learning path (16 cursos)
            </a>
          </li>
          <li>
            <a className="underline underline-offset-2" href={examInfo.practiceExam}>
              Practice exam (25 preguntas)
            </a>
          </li>
          <li>
            <a className="underline underline-offset-2" href={examInfo.register}>
              Registro Webassessor
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
