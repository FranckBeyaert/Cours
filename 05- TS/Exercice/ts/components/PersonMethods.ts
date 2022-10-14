export interface PersonInfo
{
    firstname: string,
    lastname?: string
}

export interface PersonInfo
{
    agePerson: number,
    greeting(phrase : string): void;
}

export interface PersonPrintAge extends PersonInfo
{
    printAge(): void;
}