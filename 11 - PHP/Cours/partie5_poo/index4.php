<?php

/**
 * TRAIT : c'est une classe qui ne peux pas étre instancier
 * Elle contient un ensemble de fonctionnalités
 * Réutilisation d'une ou plusieurs méthodes
 * <> avec une interface et classe abstraite => on déclare le corp des méthodes
 */


trait ControleStr {

    function stripTags($chaine){
        return strip_tags($chaine);
    }


    function htmlSpecialChar($chaine){
        return htmlspecialchars($chaine);
    }

}

class Module {
    //Utilisation du trait dans une classe
    use ControleStr;
}

$variable="<script>alert('test');</script>";
$obj = new Module();
echo $obj->htmlSpecialChar($variable);


?>