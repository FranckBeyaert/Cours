let l_parts = ["Kevin", "Arthur", "Julie", "George", "Juliette", "Marie"];

function random(l_parts)
{
    return l_parts[Math.floor(Math.random() * participants.length)];
}

function addpart()
{
    var fieldpart = document.getElementById("participants");
    
    var label = document.createElement("label");
    label.setAttribute("for", "nm_part");
    label.textContent = "Nom";

    var input = document.createElement("input");
    input.type = "text";
    input.name = "nm_part";
    input.value = "random()";

    fieldpart.append(label, input);
}
