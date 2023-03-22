<?php

//header
include_once "includes/header.php";

//navbar
include_once "includes/nav.php";

//DBConnection
include_once "includes/connect.php";

//Connexion à la base de données
require_once("inclues/connect.php");

$sql = "SELECT * FROM 'vehicules'";
$rqtVehicule = $db->query($sql);
$listeVehicule = $rqtVehicule->fetchAll();
?>

<?php foreach($listeVehicule as $vehicule):?>
    <vehicule>
        <h3> <?= $vehicule["nom"]?> </h3>
        <p><?= $vehicule["marque"]?></p>
    </vehicule>

<?php endforeach;

//footer
include_once "includes/footer.php";

?>