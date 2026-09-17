"use client";

import { GlossedText } from "@/components/GlossedText";

type RichAnswerProps = {
  text: string;
};

type Block =
  | { type: "heading"; text: string }
  | { type: "para"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "code"; code: string };

function parseBlocks(text: string): Block[] {
  const chunks = text.replace(/\r\n/g, "\n").split(/```(?:\w+)?\n?([\s\S]*?)```/);
  const blocks: Block[] = [];

  chunks.forEach((chunk, index) => {
    if (index % 2 === 1) {
      blocks.push({ type: "code", code: chunk.trim() });
      return;
    }
    const lines = chunk.split("\n");
    let list: { ordered: boolean; items: string[] } | null = null;

    const flushList = () => {
      if (list && list.items.length) {
        blocks.push({ type: "list", ...list });
      }
      list = null;
    };

    for (const raw of lines) {
      const trimmed = raw.trim();
      if (!trimmed) {
        flushList();
        continue;
      }
      const heading = trimmed.match(/^#{1,3}\s+(.+)$/);
      if (heading) {
        flushList();
        blocks.push({ type: "heading", text: heading[1] });
        continue;
      }
      if (/^\*\*[^*]+\*\*$/.test(trimmed)) {
        flushList();
        blocks.push({ type: "heading", text: trimmed.slice(2, -2) });
        continue;
      }
      const ol = trimmed.match(/^\d+[.)]\s+(.+)$/);
      if (ol) {
        if (!list || !list.ordered) {
          flushList();
          list = { ordered: true, items: [] };
        }
        list.items.push(ol[1]);
        continue;
      }
      const ul = trimmed.match(/^[-*]\s+(.+)$/);
      if (ul) {
        if (!list || list.ordered) {
          flushList();
          list = { ordered: false, items: [] };
        }
        list.items.push(ul[1]);
        continue;
      }
      flushList();
      blocks.push({ type: "para", text: trimmed });
    }
    flushList();
  });

  return blocks;
}

export function RichAnswer({ text }: RichAnswerProps) {
  const blocks = parseBlocks(text);

  return (
    <div className="space-y-5 text-[1.05rem] leading-7 text-[var(--color-muted-foreground)]">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <p
              key={index}
              className="mb-[-0.65rem] font-display text-lg font-normal text-[var(--color-foreground)]"
            >
              <GlossedText text={block.text} />
            </p>
          );
        }
        if (block.type === "code") {
          return (
            <pre
              key={index}
              className="overflow-x-auto whitespace-pre-wrap rounded-xl bg-[var(--neo-bg-dark)] px-4 py-3 font-mono text-sm leading-6 text-[var(--color-foreground)]"
            >
              <code>{block.code}</code>
            </pre>
          );
        }
        if (block.type === "list" && block.ordered) {
          return (
            <ol key={index} className="list-decimal space-y-2 pl-6">
              {block.items.map((item, i) => (
                <li key={i} className="pl-1">
                  <GlossedText text={item} />
                </li>
              ))}
            </ol>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-6">
              {block.items.map((item, i) => (
                <li key={i} className="pl-1">
                  <GlossedText text={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index}>
            <GlossedText text={block.text} />
          </p>
        );
      })}
    </div>
  );
}
