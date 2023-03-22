<?php

echo htmlspecialchars($_GET['id']);

//Permet de retirer toutes les balises html/j
//strip_tags($_GET['id']);

//Permet d'annuler l'effet des balises en les convertisant en STRING
//htmlspecialchars($_GET['id']);

if (!isset($_GET['id']) || empty($_GET['id'])) {
    header("Location: liste-utilisateur.php");
    exit;
}

$idUser = $_GET['id'];

//header
include_once "includes/header.php";

//navbar
include_once "includes/nav.php";

//Connexion à la base de données
require_once("includes/connect.php");

$sql = "SELECT * FROM `utilisateur` WHERE `idutilisateur`=:id";
$rqtUser = $db->prepare($sql);
$rqtUser->bindValue('id', $idutilisateur, PDO::PARAM_INT);
$rqtUser->execute();
$utilisateur = $rqtUser->fetch();

if (!$utilisateur) {
    http_response_code(404);
    exit;
}
?>

<utilisateur>
    <a href="admin/utilisateur/modifier-utilisateur.php?id=<?= $utilisateur['id']?>">
    <h3><?= $utilisateur["role"] ?></h3>
    <p><?= $utilisateur["nom"]?></p>
    <p><?= $utilisateur["prenom"]?></p>
    <p><?= $utilisateur["identifiant"]?></p>
    <p><?= $utilisateur["mdp"]?></p>
</utilisateur>

<?php
var_dump($utilisateur);
//footer
include_once "includes/footer.php";
?>