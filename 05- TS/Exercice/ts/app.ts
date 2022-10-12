//spread operator

const sports = ["Football", "Rugby"];
const sports2 = ["Tennis"];

sports2.push(...sports);
console.log(sports2);

const personnes = 
{
    name : "Tintin",
    age : 33
}

const copiePersonnes = {...personnes};
copiePersonnes.name = "Toto";

console.log(personnes);
console.log(copiePersonnes)

//rest operator

const add2 = (...numbers : number[]): number =>
{
    return numbers.reduce((currentResult, currentValue) =>
    {
        return currentResult + currentValue;
    },0);
}

const additionNombre = add2(5,10,2,3.9);
console.log(additionNombre);

// rest operator + destructuring

const [sport1, sport2, ...autresSport] = sports2;
console.log(sports2,sport1,sport2,autresSport);

const { firstname : prenom, age} = personnes;

console.log(prenom, age, personnes);

