<?php
const USER = "root";
const PASS = "";
const HOST = "localhost";
const DBNAME = "mydb";

$dsn = "mysql:dbname=".DBNAME.";host=".HOST;

try {
    $db = new PDO($dsn,USER,PASS);
    $db->exec("SET NAMES UTF8"); //Forcer les échanges en utf8
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
    //echo "Connexion établie <br />";
    //var_dump($db);
} catch(PDOException $e){
    die("erreur:".$e->getMessage());
}
?>