<?php

namespace Models;

require_once("Exception/userNotFoundException.php");

use Exception\UserNotFoundException;

class Connexion {

    private Utilisateur $user;

    public function __construct($user){
        $this->user = $user;
    }


    public function connect(): void {
        if(!$this->user->exist()){
           throw new UserNotFoundException();
        } else {
            echo "Connexion réussite";
        }
    }
}


?>