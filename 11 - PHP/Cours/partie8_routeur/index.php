<?php

use src\Models\Vehicule;
use src\Routeur;

require("vendor/autoload.php");

$vehicule = new Vehicule();
$routeur = new Routeur();

//Définition des URLs
$routeur->get('/', function(){
    echo "Accueil";
});

$routeur->get('/listeUtilisateur', function(){
    echo "Liste utilisateur";
});

$routeur->get('/listeVehicule', Vehicule::class.'::getListeVehicule');


$routeur->get('/ajoutVehicule', Vehicule::class.'::getForm');
$routeur->post('/ajoutVehicule', Vehicule::class.'::addVehicule');

$routeur->run();


?>