<?php

class ConnexionBdd{

    public static $host = "localhost";
    public static $bddname = "mydb";
    public static $port = "3306";

    public static function connect(){
        echo "Connecting to database...<br>";
    }
}

?>