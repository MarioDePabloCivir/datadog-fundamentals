export type DomainId =
  | "essential"
  | "infra"
  | "network"
  | "collection"
  | "troubleshoot"
  | "viz"
  | "practice";

export type Source = {
  title: string;
  url: string;
  note?: string;
};

export type VersusSide = {
  title: string;
  points?: string[];
};

export type Flashcard = {
  id: string;
  domain: DomainId;
  front: string;
  back: string;
  versus?: VersusSide[];
  sources: Source[];
};
