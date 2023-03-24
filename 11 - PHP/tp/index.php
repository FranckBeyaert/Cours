<?php

use Exception\UserNotFoundException;
use src\Models\auth\Connexion;
use src\Models\car\Voiture;
use src\Models\user\Personne;
use src\Routeur;

require("vendor/autoload.php");

$voiture = new Voiture();
$user = new Personne();
$login = new Connexion($user);
$routeur = new Routeur();

// try{
//     $login->connect();
// } catch(UserNotFoundException $e){
//     echo $e->getMessage();
// }
    
$routeur->get('/ajoutVoiture', Voiture::class.'::getForm');
$routeur->post('/ajoutVoiture', Voiture::class.'::addVoiture');

$routeur->get('/ajoutUser', Personne::class.'::getForm');
$routeur->post('/ajoutUser', Personne::class.'::addPersonne');

$routeur->run();


?>