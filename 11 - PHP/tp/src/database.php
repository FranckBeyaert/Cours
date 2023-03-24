<?php

class ConnexionBdd {

    public static $host = "localhost";
    public static $bddname = "tpdb";
    public static $port = 3306;


    public static function connect(){
        echo "Connexion à la bdd <br >";
    }
}


?>