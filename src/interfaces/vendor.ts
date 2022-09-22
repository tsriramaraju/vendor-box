export interface Criteria {
  name: string;
  value: string;
  leaf?: {
    name: string;
    value: string;
  }[];
}

export interface Vendor {
  id: string;
  name: string;
  logo: string;
  score: number;
  data: Criteria[];
}

export interface Headings {
  name: string;
  leaf?: string[];
}
