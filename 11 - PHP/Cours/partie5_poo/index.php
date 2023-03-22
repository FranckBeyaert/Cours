<?php

require_once("models/vehicule.php");
require_once("models/connexionBdd.php");
require_once("models/fille.php");

//Instancier un objet de type Vehicule
$vehicule1 = new Vehicule("","","");
$vehicule2 = new Vehicule("","","");

//Alternative
$name = "vehicule";
$vehicule3 = new $name("fatboy","cruiser","Harley Davidson");
echo $vehicule3->getNom().'<br>';
$vehicule1->setNom("fatbob");
$vehicule1->getNom().'<br>';
// echo $vehicule3->nom;
// echo $vehicule3->modele;
// echo $vehicule3->marque;

// echo $vehicule1->echoNomVehicule();
// echo $vehicule2->echoNomVehicule();
// echo $vehicule3->echoNomVehicule();

//Appel de la méthode static grâce à l'opérateur de résolution '::'
ConnexionBdd::connect().'<br>';
//Appel d'un attribut static
// echo ConnexionBdd::$host;

$fille = new Fille("nom1", "prenom1", 26);
echo $fille->getNom().'<br>';

?>