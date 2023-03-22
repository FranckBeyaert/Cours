<?php

//header
include_once "includes/header.php";

session_start();
if(isset($_SESSION["utilisateur"])){
    //Affiche la navbar
include_once "includes/nav.php";
}else {
    //redirige vers la page de connection
    header("Location: connexion.php");
    exit;
}

//Connexion à la base de données
// require_once("includes/connect.php");

// $nom = "minion";
// $prenom = "steve";
// $identifiant = "steve";
// $pass = password_hash("root", PASSWORD_DEFAULT);
// echo $pass;
// $sql = "INSERT INTO `utilisateur` VALUES (:nom, :prenom, :identifiant, :pass)";
// $rqt = $db->prepare($sql);

// $rqt->bindValue("nom", $nom, PDO::PARAM_STR);
// $rqt->bindValue("prenom", $prenom, PDO::PARAM_STR);
// $rqt->bindValue("identifiant", $identifiant, PDO::PARAM_STR);
// $rqt->bindValue("pass", $pass, PDO::PARAM_STR);

// $rqt->execute();

//footer
include_once "includes/footer.php";
?>