<?php

/*
*<> avec une interface et classe abstraite => on déclare le corp des méthodes
*/

trait ControleStr {

    function stripTags($chaine){
        return strip_tags($chaine);
    }

    function htmlSpecialChar($chaine){
        return htmlspecialchars($chaine);
    }
}

class Module{
    //Utilisation du trait dans une classe
    use ControleStr;
}

$variable="<script>alert('test');</script>";
$obj = new Module();
echo $obj->stripTags($variable);

?>