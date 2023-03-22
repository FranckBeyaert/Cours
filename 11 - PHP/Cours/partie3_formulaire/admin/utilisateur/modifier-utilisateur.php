<?php

if (!isset($_GET['id']) || empty($_GET['id'])) {
    header("Location: liste-utilisateur.php");
    exit;
}

$idutilisateur = $_GET['id'];


//Connexion à la base de données
require_once("../..includes/connect.php");

$sql = "SELECT * FROM `utilisateur` WHERE `idutilisateur`=:id";
$rqtUser = $db->prepared($sql);
$rqtUser->bindValue('id', $idutilisateur, PDO::PARAM_INT);
$rqtUser->execute();
$utilisateur = $rqtUser->fetch();

if (!$vehicule) {
    http_response_code(404);
    exit;
}

include("../../form/utilisateur-form.php");
?>

