import { examInfo } from "@/data/examInfo";

export default function ExamPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-display text-3xl">{examInfo.name}</h1>
        <p className="mt-2 text-[var(--color-muted-foreground)]">
          Extraído de {examInfo.source}.
        </p>
      </div>

      <dl className="grid gap-4 md:grid-cols-2">
        {examInfo.facts.map((fact) => (
          <div key={fact.label} className="neo-out p-5">
            <dt className="text-sm font-semibold text-[var(--color-primary)]">
              {fact.label}
            </dt>
            <dd className="mt-2">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <section>
        <h2 className="font-display text-2xl">Learning path (16 cursos)</h2>
        <ol className="mt-4 grid gap-2 md:grid-cols-2">
          {examInfo.learningCourses.map((course, i) => (
            <li key={course} className="neo-in px-4 py-3 text-sm">
              {i + 1}. {course}
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="font-display text-2xl">Docs que cita la guía</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {examInfo.officialDocs.map((doc) => (
            <li key={doc} className="neo-out px-4 py-2 text-sm">
              {doc}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
