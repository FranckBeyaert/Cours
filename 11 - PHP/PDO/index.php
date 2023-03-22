<?php
// BDD, tables et PDO
// Connexion.
// Valeurs par défaut pour MySQL
const USER = 'root';
const PASS = 'root';
const HOST = 'localhost';
const DBNAME = 'php_db';
const PORT = 3306;
$dsn = 'mysql:dbname=' . DBNAME . ';host=' . HOST;
try { 
    $db = new PDO($dsn, USER, PASS);
    // Si on ne connait pas la bdd, on peut définir l'encodage à utiliser pour la communication    
    $db->exec('SET NAMES UTF8');
    // On peut paramétrer ici par défaut qu'on ne veut pas des données par index. Ceci évite d'utiliser PDO::FETCH_ASSOC par la suite dans chaque requête. Ceci n'interdit pas d'utiliser PDO::quelque-chose au cas par cas.    
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    var_dump($db);
    echo '<br>Connexion établie';
    } 
catch (PDOException $e) 
    {
        exit('erreur : ' . $e->getMessage());
    }
    // INSERT
    $sqlInsertUser = "INSERT INTO 'utilisateur' ('nom', prenom', 'identifiant', 'motdepasse')
    VALUES('admin', 'strateur', 'admin', 'admin')";
    $sqlInsertUser2 = "INSERT INTO 'utilisateur' ('nom', prenom', 'identifiant', 'motdepasse')
    VALUES('admin2', 'strateur', 'admin2', 'admin2')";
    // $db->query($reqInsertUser);
    // $db->query($reqInsertUser2);

    // déclencher sans gestion de retour
    // UPDATE
    // $reqUpdate = "UPDATE vehicule SET modele = 'x4' WHERE id = 1";
    // $db->query($reqUpdate);
    
    // DELETE
    // $sqlDelete = "DELETE FROM utilisateur WHERE identifiant = 'admin'"; 
    // supprimer toutes les entrées ayant ce modèle
    // $db->query($sqlDelete);
    $username = "admin";
    $pass = "admin";
    $sqlUser = "SELECT * FROM 'utilisateur' WHERE 'identifiant'=:username";

    //Préaparation de ma rqt SQL
    $rqtUser = $db->prepare($sqlUser);
    $rqtUser->bindParam(':username', $username, PDO::PARAM_STR);
    $username = "admin2";
    $rqtUser->execute();
    
    // READ
    $reqSelect = "SELECT * FROM vehicule WHERE modele = 'modèle'";
    $result = $db->query($reqSelect);echo '<pre>';
    // print_r($result->fetchAll()); 
    // récupère tout, fetch() récupère le premier enregistrement
    // print_r($result->fetchAll(PDO::FETCH_ASSOC)); 
    // n'obtenir que les données avec nom de colonne (et non les index de colonnes) - comparer avec précédentprint_r($result->fetchAll(PDO::FETCH_COLUMN)); 
    // n'obtenir que la première colonne sur les enregistrements obtenus
    echo '</pre>';