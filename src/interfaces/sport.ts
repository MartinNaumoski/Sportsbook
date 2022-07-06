import { Countrie } from "./country";

export interface Sport {
    countries: Countrie[];
    id: number;
    name: string;
    priority: number;
    total: number;
}