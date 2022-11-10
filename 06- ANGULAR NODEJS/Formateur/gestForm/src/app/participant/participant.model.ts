import { Sexe } from "./participant-sexe-enum";

export class Participant {
    id: number;
    nom: string;
    prenom: string;
    sexe: Sexe;
    age: number;
}