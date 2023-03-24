<?php

namespace Models;
class Utilisateur {

    private $nom;
    private $prenom;

    public function __construct($nom, $prenom){
        $this->nom = $nom;
        $this->prenom = $prenom;
    }

    public function exist(): bool {
        return false;
    }
}



?>