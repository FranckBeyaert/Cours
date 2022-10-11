const partNames = 
['Emma', 
'Franck', 
'Killian', 
'Kelvin', 
'Loic', 
'Louis',
'Julie',
'Rachel',
'Phoebe' ];
function random()
{
    return Math.floor(Math.random() * partNames.length);
}


function addpart()
{
    var field = document.getElementById('fieldpart');
    var label = document.createElement('label');
    label.textContent = 'Nom';
    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'participant';
    input.name = 'participant';
    input.value = partNames[random()];
    field.appendChild(label);
    field.appendChild(input);
}

function generate()
{
    nb_gp = document.getElementsByName("groupNum");
    gp_name = document.getElementById("participant");
    

}








