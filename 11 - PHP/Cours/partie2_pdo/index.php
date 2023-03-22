<?php

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

//INSERT
$sqlInsert = "INSERT INTO `vehicule` (`nom`, `marque`, `modele`) VALUES ('vehicule1', 'bmw', 'x5')";
$db->query($sqlInsert);
$db->query($sqlInsert);
$db->query($sqlInsert);
$db->query($sqlInsert);
$db->query($sqlInsert);

//UPDATE
$sqlUpdate = "UPDATE `vehicule` SET `modele`='x4' WHERE `idvehicule`=1";
$db->query($sqlUpdate);

//DELETE
$sqlDelete = "DELETE FROM `vehicule` WHERE `modele`='x5'";
// echo $db->query($sqlDelete)->rowCount();

//SELECT
$sqlSelect = "SELECT * FROM `vehicule` WHERE `modele`='x5'";
$rqt = $db->query($sqlSelect);

//FETCH_ASSOC => permet de récupérer un tableau associative
// echo '<pre>';
// print_r($rqt->fetchAll());
// echo '</pres>';


$sqlInsertUser = "INSERT INTO `utilisateur` (`nom`,`prenom`,`identifiant`,`motdepasse`)
VALUES ('admin', 'strateur', 'admin', 'admin')";
$db->query($sqlInsertUser);

$sqlDelete = "DELETE FROM utilisateur where identifiant='admin'";
//$db->query($sqlDelete);




?>