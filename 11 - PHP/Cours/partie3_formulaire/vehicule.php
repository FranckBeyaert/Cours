<?php

echo htmlspecialchars($_GET['id']);

//Permet de retirer toutes les balises html/j
//strip_tags($_GET['id']);

//Permet d'annuler l'effet des balises en les convertisant en STRING
//htmlspecialchars($_GET['id']);

if (!isset($_GET['id']) || empty($_GET['id'])) {
    header("Location: liste-vehicules.php");
    exit;
}

$idVehicule = $_GET['id'];

//header
include_once "includes/header.php";

//navbar
include_once "includes/nav.php";

//Connexion à la base de données
require_once("includes/connect.php");

$sql = "SELECT * FROM `vehicule` WHERE `idvehicule`=:id";
$rqtVehicule = $db->prepare($sql);
$rqtVehicule->bindValue('id', $idVehicule, PDO::PARAM_INT);
$rqtVehicule->execute();
$vehicule = $rqtVehicule->fetch();

if (!$vehicule) {
    http_response_code(404);
    exit;
}
?>

<vehicule>
    <a href="admin/vehicule/modifier-vehicule.php?id=<?= $vehicule['id']?>">
    <h3><?= $vehicule["nom"] ?></h3>
    <p><?= $vehicule["marque"]?></p>
    <p><?= $vehicule["modele"]?></p>
</vehicule>

<?php
var_dump($vehicule);
//footer
include_once "includes/footer.php";
?>