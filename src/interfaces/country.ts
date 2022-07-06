import { League } from "./league";

export interface Countrie {
    id: number;
    leagues: League[];
    name: string;
    total: number;
}