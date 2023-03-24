<?php

namespace src\Models\user;

class Personne{
    
    private $nom;
    private $prenom;

    // public function __construct($nom, $prenom){
    //     $this->nom = $nom;
    //     $this->prenom = $prenom;
    // }

    public function exist(): bool{
        return false;
    }

    public function getListePersonne(){
        echo "Liste personne";
    }

    public function getPersonneById(){
        echo "Ma personne";
    }

    public function addPersonne(){
        $sqlInsert = "INSERT INTO `user` (:nom) VALUES ()";
        $sqlInsert = "INSERT INTO `user` (:prenom) VALUES ()";
        $sqlInsert = "INSERT INTO `user` (:tel) VALUES ()";
        
    }

    public function getForm(): void{
        require_once(__DIR__.'/../../Templates/user-form.html');
    }
}