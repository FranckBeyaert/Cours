<?php

if (!isset($_GET['id']) || empty($_GET['id'])) {
    header("Location: liste-vehicules.php");
    exit;
}

$idVehicule = $_GET['id'];


//Connexion à la base de données
require_once("../..includes/connect.php");

$sql = "SELECT * FROM `vehicule` WHERE `idvehicule`=:id";
$rqtVehicule = $db->prepared($sql);
$rqtVehicule->bindValue('id', $idVehicule, PDO::PARAM_INT);
$rqtVehicule->execute();
$vehicule = $rqtVehicule->fetch();

if (!$vehicule) {
    http_response_code(404);
    exit;
}

include("../../form/vehicule-form.php");
?>

