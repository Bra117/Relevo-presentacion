"use client";

import { useState } from "react";
import { useT } from "@/lib/LanguageContext";

const MIN = 8;
const MAX = 12;
const STEP = 2.5;

const fmt = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

function Stepper({
  value,
  onChange,
  step,
  min,
  max,
  format = String,
}: {
  value: number;
  onChange: (v: number) => void;
  step: number;
  min: number;
  max: number;
  format?: (n: number) => string;
}) {
  return (
    <div className="stepper">
      <button type="button" aria-label="−" onClick={() => onChange(Math.max(min, value - step))}>
        −
      </button>
      <output>{format(value)}</output>
      <button type="button" aria-label="+" onClick={() => onChange(Math.min(max, value + step))}>
        +
      </button>
    </div>
  );
}

export default function ProgressionDemo() {
  const t = useT();
  const [weight, setWeight] = useState(60);
  const [reps, setReps] = useState([10, 10, 9]);

  const setRep = (i: number, v: number) => setReps((r) => r.map((x, j) => (j === i ? v : x)));

  let next: number[];
  let nextWeight = weight;
  let text: string;
  if (reps.every((r) => r >= MAX)) {
    nextWeight = weight + STEP;
    next = [MIN, MIN, MIN];
    text = t.demo.up(fmt(weight), fmt(nextWeight), MIN);
  } else if (reps.some((r) => r < MIN)) {
    next = reps.map((r) => Math.max(r, MIN));
    text = t.demo.short(fmt(weight), MIN);
  } else {
    next = reps.map((r) => Math.min(r + 1, MAX));
    text = t.demo.reps(fmt(weight));
  }

  return (
    <section className="tool-card">
      <div className="tool-head">
        <h2>{t.demo.title}</h2>
        <span>{t.demo.subtitle}</span>
      </div>
      <div className="prog-row">
        <div className="prog-field">
          <label>{t.demo.weight}</label>
          <Stepper value={weight} onChange={setWeight} step={STEP} min={20} max={200} format={fmt} />
        </div>
        {reps.map((r, i) => (
          <div className="prog-field" key={i}>
            <label>{t.demo.set(i + 1)}</label>
            <Stepper value={r} onChange={(v) => setRep(i, v)} step={1} min={1} max={15} />
          </div>
        ))}
      </div>
      <div className="prog-result" aria-live="polite">
        <div className="tool-note" style={{ margin: "0 0 4px" }}>
          {t.demo.nextLabel}
        </div>
        <div className="sets">{next.map((n) => `${fmt(nextWeight)}×${n}`).join(" · ")}</div>
        <p>{text}</p>
      </div>
      <p className="tool-note">{t.demo.note}</p>
    </section>
  );
}
