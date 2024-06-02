export interface Player {
  _id: string;
  name: string;
  surname: string;
  age: number;
  height: number;
  weight: number;
  playedMinutes: number;
  goals: number;
  passes: number;
  assists: number;
  position: string;
  available: boolean;
  dorsal: number;
  img: string;
}

export interface Columns {
  header: string;
  dataKey: keyof Player;
}

export type PositionKeys =
  | 'Portera'
  | 'Defensa'
  | 'Centrocampista'
  | 'Delantera';
