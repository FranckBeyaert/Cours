<?php
// Vérification du rôle de l'utilisateur
if ($user_role == "gestionnaire") {
    // Afficher la page d'accueil avec toutes les fonctionnalités
    include("accueil.php");
    include("reporting_ventes.php");
    include("atelier.php");
    include("page_ventes.php");
    include("gestion_emplacements.php");
} elseif ($user_role == "commercial") {
    // Afficher phples écrans pour le commercial
    include("decla_vente.php");
    include("decla_arrivage.php");
    include("gestion_emplacements.php");
    include("page_ventes.php");
} elseif ($user_role == "garagiste") {
    // Afficher les écrans pour le garagiste
    include("atelier.php");
} elseif ($user_role == "client") {
    // Afficher les écrans pour le client
    include("atelier_reserv.php");
    include("page_ventes.");
} else {
    // Si le rôle de l'utilisateur n'est pas reconnu, afficher un message d'erreur
    echo "Erreur : rôle de l'utilisateur non reconnu";
}
?>
