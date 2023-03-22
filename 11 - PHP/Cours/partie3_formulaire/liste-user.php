<?php

//header
include_once "includes/header.php";

//navbar
include_once "includes/nav.php";

//DBConnection
include_once "includes/connect.php";

//Connexion à la base de données
require_once("includes/connect.php");

$sql = "SELECT * FROM `utilisateur`";
$rqtUser = $db->query($sql);
$listeUser = $rqtUser->fetchAll();
?>

<?php foreach($listeUser as $utilisateur):?>
    <vehicule>
        <h3><a href="utilisateur.php?id=<?= $utilisateur["idutilisateur"]?>">
        <?= strip_tags($utilisateur["nom"])?></a></h3>
    </vehicule>

<?php endforeach;

//footer
include_once "includes/footer.php";

?>