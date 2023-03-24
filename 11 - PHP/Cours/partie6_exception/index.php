<?php
use Exception\UserNotFoundException;
use Models\Connexion;
use Models\Utilisateur;

require_once("Models/connexion.php");
require_once("Models/utilisateur.php");


$user = new Utilisateur("nom", "prenom");
$login = new Connexion($user);

try {
    $login->connect();
} catch(UserNotFoundException $e){
    echo $e->getMessage();
}





?>