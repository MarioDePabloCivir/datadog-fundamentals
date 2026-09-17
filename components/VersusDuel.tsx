"use client";

import { GlossedText } from "@/components/GlossedText";

type VersusSide = {
  title: string;
  points?: string[];
};

export function VersusDuel({
  sides,
  revealed,
}: {
  sides: VersusSide[];
  revealed: boolean;
}) {
  return (
    <div
      className={`versus-grid ${sides.length > 2 ? "versus-grid-3" : ""}`}
    >
      {sides.map((side, index) => (
        <div key={side.title} className="versus-side">
          {index > 0 ? <span className="versus-badge">VS</span> : null}
          <p className="versus-title">
            <GlossedText text={side.title} />
          </p>
          {revealed && side.points?.length ? (
            <ul className="versus-points">
              {side.points.map((point) => (
                <li key={point}>
                  <GlossedText text={point} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}
