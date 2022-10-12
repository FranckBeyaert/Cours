type Combinable = number | string;
type Conversion = 'nombre' | 'text';

function combine(
    input1: Combinable, 
    input2: Combinable,
    resultatConversion : Conversion
){
    let result;
    if(typeof input1 === "number" && typeof input2 === "number" || resultatConversion == "nombre")
    {
        result = +input1+ +input2;
    }
    else 
    {
        result =  input1.toString() + input2.toString();
    }

    return result;
}
