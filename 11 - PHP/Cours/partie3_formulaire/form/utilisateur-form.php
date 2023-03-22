<h3>Formulaire Utilisateur</h3>
<?php

if (!empty($_POST)) {
    if (
        isset($_POST["nom"], $_POST["prenom"], $_POST["identifiant"], $_POST["mdp"], $_POST["role"]) &&
        !empty($_POST["nom"]) && !empty($_POST["prenom"]) && !empty($_POST["identifiant"]) && !empty($_POST["mdp"]) && !empty($_POST["role"]) 
    ) {
        // ! Protection des données
        $nom = strip_tags($_POST["nom"]);
        $prenom = strip_tags($_POST["prenom"]);
        $identifiant = strip_tags($_POST["identifiant"]);
        $pass = strip_tags($_POST["mdp"]);
        $role = strip_tags($_POST["role"]);

        //Connexion à la base de données
        require_once("../../includes/connect.php");
        if (!isset($utilisateur)) {
            $sql = "INSERT INTO `utilisateur` (`nom`, `prenom`, `identifiant`, `mdp`, `role`) VALUES (:nom, :prenom, :identifiant, :mdp, :role)";
        } else {
            $sql = "UPDATE `utilisateur` SET `nom` = :nom, `prenom` = :prenom, `identifiant` = :identifiant, `mdp` = :mdp, `role` = :role WHERE `id` = :id";
        }


        //Préparation de la requête
        $query = $db->prepare($sql);
        $query->bindValue("nom", $nom, PDO::PARAM_STR);
        $query->bindValue("prenom", $prenom, PDO::PARAM_STR);
        $query->bindValue("identifiant", $identifiant, PDO::PARAM_STR);
        $query->bindValue("mdp", $pass, PDO::PARAM_STR);
        $query->bindValue("role", $role, PDO::PARAM_STR);

        if (isset($utilisateur)) {
            $query->bindValue("id", $utilisateur["idutilisateur"], PDO::PARAM_INT);
        }

        if (!$query->execute()) {
            die("Erreur surevenie lors de l'enregistrement");
        } else {
            header("Location: ../../liste-utilisateurs.php");
        }
    } else {
        print_r("Formulaire incomplet");
    }
}

?>
<form method="post">
    <div>
        <label for="nom">Nom</label>
        <input type='text' name="nom" id="nom" value="<?= isset($utilisateur) ? $utilisateur["nom"] : ''?>">
    </div>
    <div>
        <label for="prenom">prenom</label>
        <input type='text' name="prenom" id="prenom" value="<?= isset($utilisateur) ? $utilisateur["prenom"] : ''?>">
    </div>
    <div>
        <label for="identifiant">identifiant</label>
        <input type='text' name="identifiant" id="identifiant" value="<?= isset($utilisateur) ? $utilisateur["identifiant"] : ''?>">
    </div>
    <div>
        <label for="mdp">Mot de passe</label>
        <input type='text' name="mdp" id="mdp" value="<?= isset($utilisateur) ? $utilisateur["mdp"] : ''?>">
    </div>
    <div>
        <label for="role">Rôle</label>
        <input type='text' name="role" id="role" value="<?= isset($utilisateur) ? $utilisateur["role"] : ''?>">
    </div>

    <button type='submit'>Enregistrer</button>
</form>