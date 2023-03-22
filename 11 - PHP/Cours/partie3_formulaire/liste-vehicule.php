<?php

//header
include_once "includes/header.php";

//navbar
include_once "includes/nav.php";

//DBConnection
include_once "includes/connect.php";

//Connexion à la base de données
require_once("includes/connect.php");

$sql = "SELECT * FROM `vehicule`";
$rqtVehicule = $db->query($sql);
$listeVehicule = $rqtVehicule->fetchAll();
?>

<?php foreach($listeVehicule as $vehicule):?>
    <vehicule>
        <h3><a href="vehicule.php?id=<?= $vehicule["idvehicule"]?>">
        <?= strip_tags($vehicule["nom"])?></a></h3>
    </vehicule>

<?php endforeach;

//footer
include_once "includes/footer.php";

?>