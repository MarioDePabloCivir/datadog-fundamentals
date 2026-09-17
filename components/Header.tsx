import Link from "next/link";
import { CardsThree, House, Info } from "@phosphor-icons/react/dist/ssr";

const links = [
  { href: "/", label: "Inicio", icon: House },
  { href: "/study", label: "Flashcards", icon: CardsThree },
  { href: "/examen", label: "Examen", icon: Info },
];

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-6">
      <Link href="/" className="font-display text-lg text-[var(--color-primary)]">
        Datadog Fundamentals
      </Link>
      <nav aria-label="Principal" className="flex gap-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="neo-btn inline-flex min-h-11 items-center gap-2 px-3 py-2 text-sm font-semibold"
          >
            <Icon aria-hidden="true" size={18} weight="duotone" />
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
