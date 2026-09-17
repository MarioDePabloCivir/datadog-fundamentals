import type { Metadata } from "next";
import { Nunito_Sans, Varela_Round } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela",
});

export const metadata: Metadata = {
  title: "Datadog Fundamentals · Flashcards",
  description:
    "Estudio con flashcards para la certificación Datadog Fundamentals (guía oficial agosto 2026).",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${nunito.variable} ${varela.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-16">{children}</main>
      </body>
    </html>
  );
}
