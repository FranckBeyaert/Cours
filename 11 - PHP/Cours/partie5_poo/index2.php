<?php

require_once("Models/vehicule.php");
require_once("Models/connexionBdd.php");
require_once("Models/fille.php");

//Instancier un objet de type Vehicule
$vehicule1 = new Vehicule("vehicule1","marque");
$vehicule2 = new Vehicule("vehicule2","");
//Alternative
$name = 'Vehicule';
$vehicule3 = new $name("vehicule3","");
// echo $vehicule1->getNom().'<br >';
$vehicule1->setNom("Vehicule40");
// echo $vehicule1->getNom().'<br >';
// echo $vehicule1->getGarage().'<br >';
// echo $vehicule2->getGarage().'<br >';
// echo $vehicule3->getGarage().'<br >';
// echo $vehicule1->marque;
// echo $vehicule1->modele;
// echo $vehicule1->echoNomVehicule();
// echo $vehicule2->echoNomVehicule();
// echo $vehicule3->echoNomVehicule();

//Appel de la méthode static gràce à l'opérateur de résolution '::'
//ConnexionBdd::connect(); 
//Appel d'un attribut static
//echo ConnexionBdd::$host;

$fille = new Fille("nom1","prenom1",30);
echo $fille->test();


?>