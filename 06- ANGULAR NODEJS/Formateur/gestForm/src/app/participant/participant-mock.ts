import { Sexe } from "./participant-sexe-enum";
import { Participant } from "./participant.model";

export const ListeParticipants : Participant[] = [
    {
        id: 1,
        nom: 'Remi',
        prenom: 'Morau',
        sexe: Sexe.homme,
        age: 25,     
    },
    {
        id: 2,
        nom: 'Didier',
        prenom: 'Fournier',
        sexe: Sexe.homme,
        age: 22,     
    },
    {
        id: 3,
        nom: 'Rebecca',
        prenom: 'Douchy',
        sexe: Sexe.femme,
        age: 21,     
    },
]