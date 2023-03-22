<?php
if (!empty($_POST)) {
    if (
        isset($_POST["identifiant"], $_POST["mdp"]) &&
        !empty(["identifiant"]) && !empty(["mdp"])
    ) {
        //Connexion à la base de données
        require_once("includes/connect.php");
        $identifiant = strip_tags($_POST["identifiant"]);
        $pass = strip_tags($_POST["mdp"]);

        $sql = "SELECT * FROM `utilisateur` WHERE `identifiant` = :identifiant";
        $query = $db->prepare($sql);
        $query->bindParam(":identifiant", $identifiant, PDO::PARAM_STR);
        $query->execute();
        $utilisateur = $query->fetch();

        //Vérification si l'utilisateur existe dans la base de données
        if (!$utilisateur) {
            print_r("Utilisateur inconnu");
        } else {
            //Vérification du mot de passe
            $resultat = password_verify($pass, $utilisateur["motdepasse"]);
            if (!$resultat) {
                //Permet de lancer ma session
                session_start();
                $_SESSION["utilisateur"] = [
                    "id" => $utilisateur["idutilisateur"],
                    "nom" => $utilisateur["nom"],
                    "prenom" => $utilisateur["prenom"],
                ];
                header("Location: index.php");
                // var_dump($_SESSION);
            } else {
                print_r("Mot de passe incorrect");
            }
        }
    } else {
        print_r("Formulaire incomplet");
    }
}
?>

<form method="post">
    <div>
        <label for="identifiant">Identifiant :</label>
        <input type='text' name="identifiant" id="identifiant">
    </div>
    <div>
        <label for="mdp">Mot de passe :</label>
        <input type='text' name="mdp" id="mdp">
    </div>
    <button type='submit'>Connexion</button>
</form>

<?php
?>