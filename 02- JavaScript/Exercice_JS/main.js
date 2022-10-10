document.getElementById("lien").href = "http://www.google.com";
document.getElementById("lien").textContent = "www.google.com";

var blockquote = document.createElement("blockquote");
blockquote.innerHTML = "L'espoir est un fluide nécessaire à l'homme comme l'eau à la terre, il déclenche des forces insoupçonnées de la nature humaine.";
blockquote.cite = "Lauréanne Harvey"
var output2 = document.getElementById('output2');
output2.appendChild(blockquote);

var output3 = document.getElementById('output3');
output3.remove();

document.body.onload = addElement;

function addElement()
{   

    const divTP1 = document.getElementById("divTP1");
    
    const strong = document.createElement("strong");
    strong.textContent = "World Wide Web Consortium";
    
    const W3C = document.createElement("strong");
    W3C.textContent = "W3C";
    
    const Orga = document.createElement("a");
    Orga.href = "http://fr.wikipedia.org/wiki/Organisme_de_normalisation";
    Orga.title ="Organisme de normalisation";
    Orga.textContent = "organisme de standardisation";

    const www = document.createElement("a");
    www.href = "http://fr.wikipedia.org/wiki/World_Wide_Web";
    www.title ="World Wide Web";
    www.textContent = "World Wide Web";

    divTP1.append("Le", strong,", abrégé par le sigle ", W3C,", est un ",Orga," à but non-lucratif chargé de promouvoir la compatibilité des technologies du ", www);

}

document.body.onload = addDiv2;

function addDiv2()
{
    const arr = ['JavaScript', 'JScript', 'ActionScript', 'Ex4'];

    const divTP2 = document.getElementById("divTP2");

    const p = document.createElement("p");
    p.textContent = "Langages basés sur ECMAScript : ";

    const ul = document.createElement("ul");
    for ( i = 0; i < arr.length ; i++)
    {
        const li = document.createElement("li");
        li.textContent = arr[i];
        ul.append(li);
    }

    divTP2.append(p, ul);

}

document.body.onload = addDiv3;

function addDiv3()
{
    const divTP3 = document.getElementById("divTP3");

    const form = document.createElement("form");
    form.setAttribute("enctype", "multipart/form-data")
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    var field = document.createElement("fieldset")
    
    var lg = document.createElement("legend");
    lg.textContent = "Uploader une image";

    var div = document.createElement("div");
    div.setAttribute("style", "text-align:center");

    var label = document.createElement("label");
    label.setAttribute("for", "inputUpload");
    label.textContent = "Image à uploader";

    var input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("name", "inputUpload");
    input.setAttribute("id", "inputUpload");

    var br = document.createElement("br");

    var input2 = document.createElement("input2");
    input2.setAttribute("type", "submit");
    input2.setAttribute("value", "Envoyer");

    div.append(label, input, br, br.cloneNode(), input2);

    field.append(lg, div);

    form.append(field);

    divTP3.append(form);
}

document.body.onload = addDiv4;

function addDiv4() 
{
    var idTable = document.getElementById("divTP4");
    
    var newLine = idTable.insertRow(1);

    var newCell = newLine.insertCell(0);
    var newCell2 = newLine.insertCell(1);
    var newCell3 = newLine.insertCell(2);

    var newText = document.createTextNode("Firefox");
    var newText2 = document.createTextNode("Mozilla");
    var newText3 = document.createTextNode("27,8");
    newCell.appendChild(newText);
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);

    addDiv4.append(newLine, newCell, newCell2, newCell3);
}



