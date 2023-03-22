<h3>Formulaire véhicule</h3>
<?php

if (!empty($_POST)) {
    if (
        isset($_POST["nom"], $_POST["marque"], $_POST["modele"]) &&
        !empty($_POST["nom"]) && !empty($_POST["marque"]) && !empty($_POST["modele"])
    ) {
        // ! Protection des données
        $nom = strip_tags($_POST["nom"]);
        $marque = strip_tags($_POST["marque"]);
        $modele = strip_tags($_POST["modele"]);

        //Connexion à la base de données
        require_once("../../includes/connect.php");
        if (!isset($vehicule)) {
            $sql = "INSERT INTO `vehicule` (`nom`, `marque`, `modele`) VALUES (:nom, :modele, :marque)";
        } else {
            $sql = "UPDATE `vehicule` SET `nom` = :nom, `marque` = :modele, `modele` = :modele WHERE `id` = :id";
        }


        //Préparation de la requête
        $query = $db->prepare($sql);
        $query->bindValue("nom", $nom, PDO::PARAM_STR);
        $query->bindValue("marque", $marque, PDO::PARAM_STR);
        $query->bindValue("modele", $modele, PDO::PARAM_STR);

        if (isset($vehicule)) {
            $query->bindValue("id", $vehicule["idvehicule"], PDO::PARAM_INT);
        }

        if (!$query->execute()) {
            die("Erreur surevenie lors de l'enregistrement");
        } else {
            header("Location: ../../liste-vehicules.php");
        }
    } else {
        print_r("Formulaire incomplet");
    }
}

?>
<form method="post">
    <div>
        <label for="nom">Nom</label>
        <input type='text' name="nom" id="nom" value="<?= isset($vehicule) ? $vehicule["nom"] : ''?>">
    </div>
    <div>
        <label for="marque">Marque</label>
        <input type='text' name="marque" id="marque" value="<?= isset($vehicule) ? $vehicule["marque"] : ''?>">
    </div>
    <div>
        <label for="modele">Modéle</label>
        <input type='text' name="modele" id="modele" value="<?= isset($vehicule) ? $vehicule["modele"] : ''?>">
    </div>

    <button type='submit'>Enregistrer</button>
</form>