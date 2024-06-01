export interface Player {
    id: string;
    name: string;
    surname: string;
    age: number;
    height: string;
    weight: string;
    playedMinutes: string;
    goals: number;
    passes: number;
    position: PositionKeys;
    available: boolean;
    dorsal: number;
    img: string;
}

export interface Columns {
    header: string;
    dataKey: keyof Player;
}

export type PositionKeys = 'Portera' | 'Defensa' | 'Centrocampista' | 'Delantera';
