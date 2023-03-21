<?php

$utilisateurs = [
    [
        "id" => 1,
        "nom" => "Dumont",
        "prenom" => "Xavier",
        "age" => 40,
        "email" => "",
        "bloque" => true
    ],
    [
        "id" => 2,
        "nom" => "Leclerc",
        "prenom" => "Jean",
        "age" => 30,
        "email" => "jean.leclerc@gmail.com",
        "bloque" => true
    ],
    [
        "id" => 3,
        "nom" => "Dureux",
        "prenom" => "Alexia",
        "age" => "3O",
        "email" => "",
        "bloque" => false
    ],
    [
        "id" => 4,
        "nom" => "Lievin",
        "prenom" => "Camille",
        "age" => 27,
        "email" => "camille.lievin@gmail.com",
        "bloque" => false
    ],
    [
        "id" => 5,
        "nom" => "Bernard",
        "prenom" => "Al1ne",
        "age" => 28,
        "email" => "aline.bernard@gmail.com",
        "bloque" => true
    ],
    [
        "id" => 6,
        "nom" => "Fossart",
        "prenom" => "Julien",
        "age" => 35,
        "email" => "julien.fossart@gmail.com",
        "bloque" => false
    ]
    ];

    function controle($utilisateurs){
        $utilisateurs_valid = [];
        $utilisateurs_nonValid = [];

        foreach($utilisateurs as $element){
            $erreur = "";
            if(
                !preg_match('/\d/', $element["nom"]) &&
                !empty($element["nom"]) && 
                !preg_match('/\d/', $element["prenom"]) &&
                !empty($element["prenom"]) && 
                is_int($element["age"]) &&
                $element["bloque"] !== true &&
                !empty(filter_var($element["email"],FILTER_VALIDATE_EMAIL))
            ){
                $utilisateurs_valid[] = $element["nom"]." ".$element["prenom"]." ".$element["age"];

            } else {
                preg_match('/\d/', $element["nom"]) ? $erreur .= " - Nom érroné" : '';
                empty($element["nom"]) ? $erreur .= " - Nom vide" : '';
                preg_match('/\d/', $element["prenom"]) ? $erreur .= " - Prénom érroné" : '';
                empty($element["prenom"]) ? $erreur .= " - Prénom vide" : '';
                !is_int($element["age"]) ? $erreur .= " - Age éronné" : '';
                !filter_var($element["email"],FILTER_VALIDATE_EMAIL) ? $erreur .= " - Email éronné" : '';
                empty($element["email"]) ? $erreur .= " - Email vide" : '';
                $element["bloque"] ? $erreur .= " - Utilisateur bloqué" : '';

                $utilisateurs_nonValid[] = $element["nom"]." ".$element["prenom"]." => ".$erreur;
            }
        }

        echo '<h4> Utilisateurs valides :</h4>';
        echo '<pre>';
        print_r($utilisateurs_valid);
        echo '</pre>';

        echo '<h4> Utilisateurs non valides :</h4>';
        echo '<pre>';
        print_r($utilisateurs_nonValid);
        echo '</pre>';
    }


// echo '<pre>';
// print_r($utilisateurs);
// echo '</pre>';

controle($utilisateurs);

?>