<?php
use Exception\UserNotFoundException;
use Models\Connexion;
use Models\Utilisateur;
require("./vendor/autoload.php");


// require_once("Models/connexion.php");
// require_once("Models/utilisateur.php");

//Création d'un autoloader
// spl_autoload_register(function($class){
//     //echo $class;
//     require($class.'.php');
// });


$user = new Utilisateur("nom", "prenom");
$login = new Connexion($user);

try {
    $login->connect();
} catch(UserNotFoundException $e){
    echo $e->getMessage();
}





?>