<?php

require_once('Models/neuve/vehicule.php');

use Models\Neuve\Vehicule;

const USER = "root";
const PASS = "root";
const HOST = "localhost";
const DBNAME = "formationphp";

$dsn = "mysql:dbname=".DBNAME.";host=".HOST;

try {
    $db = new PDO($dsn,USER,PASS);
    $db->exec("SET NAMES UTF8"); //Forcer les échanges en utf8
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
    //echo "Connexion établie <br />";
    //var_dump($db);
} catch(PDOException $e){
    die("erreur:".$e->getMessage());
}

//Requete SQL
$sql = "SELECT * FROM `vehicule` WHERE `idvehicule`=155";
//Execute la RQT
$rqt = $db->query($sql);
//On identifie le type de sortie comme étant une classe Vehicule
$rqt->setFetchMode(PDO::FETCH_CLASS, Vehicule::class);

//Instancier ma variable Vehicule
$vehicule = $rqt->fetch();

echo $vehicule->getMarque();
echo $vehicule->getModele();
echo $vehicule->getNom();







?>