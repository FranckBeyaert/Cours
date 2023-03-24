<?php

const USER = "root";
const PASS = "root";
const HOST = "localhost";
const DBNAME = "formationphp";

$dsn = "mysql:dbname=".DBNAME.";host=".HOST;

try {
    $db = new PDO($dsn,USER,PASS);
    $db->exec("SET NAMES UTF8"); //Forcer les échanges en utf8
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
} catch(PDOException $e){
    die("erreur:".$e->getMessage());
}

?>