<?php

//header
include_once("includes/header.php");


session_start();
if(isset($_SESSION["utilisateur"])){
    //Affiche la nav bar
    include_once("includes/nav.php");
} else {
    //Redirige vers la page de connexion
    header("Location: connexion.php");
    exit;
}

//Connexion à la base de données
// require_once("includes/connect.php");
// $nom = "ELMOUTAOUKIL";
// $prenom = "MEHDY";
// $identifiant = "mehdy";
// $pass = password_hash("mehdy", PASSWORD_DEFAULT);
// $sql = "INSERT INTO `utilisateur` VALUES (null, :nom, :prenom, :identifiant, :pass)";
// $rqt = $db->prepare($sql);

// $rqt->bindValue("nom", $nom, PDO::PARAM_STR);
// $rqt->bindValue("prenom", $prenom, PDO::PARAM_STR);
// $rqt->bindValue("identifiant", $identifiant, PDO::PARAM_STR);
// $rqt->bindValue("pass", $pass, PDO::PARAM_STR);

// $rqt->execute();

//footer
include("includes/footer.php");


?>