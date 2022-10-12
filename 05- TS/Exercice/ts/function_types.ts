//types function

function Add(x:number, y:number)
{
    return x + y;
}

function PrintResult(num:number):void
{
    console.log("Résultat :" + num);
}

let addition: (a:number, b:number) => number;
addition = Add;


console.log(addition(8,9));
function addAndPrint(a:number, b:number, cb : (num : number) => void)
{
    const result = a + b;
    cb(result);
}
addAndPrint(10,20, (result) =>
{
    console.log(result);
})

addAndPrint(15,30, PrintResult);