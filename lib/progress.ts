const STORAGE_KEY = "dd-fundamentals-progress-v1";

export type CardStatus = "new" | "learning" | "known";

export type ProgressMap = Record<string, CardStatus>;

const empty: ProgressMap = {};
let cache: ProgressMap | null = null;
const listeners = new Set<() => void>();

function read(): ProgressMap {
  if (typeof window === "undefined") return empty;
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    cache = raw ? (JSON.parse(raw) as ProgressMap) : {};
  } catch {
    cache = {};
  }
  return cache;
}

function emit() {
  listeners.forEach((listener) => listener());
}

export function subscribeProgress(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getProgressSnapshot(): ProgressMap {
  return read();
}

export function getServerProgressSnapshot(): ProgressMap {
  return empty;
}

export function setStatus(id: string, status: CardStatus): ProgressMap {
  const next = { ...read(), [id]: status };
  cache = next;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  emit();
  return next;
}

export function clearProgress(): ProgressMap {
  cache = {};
  localStorage.removeItem(STORAGE_KEY);
  emit();
  return cache;
}
