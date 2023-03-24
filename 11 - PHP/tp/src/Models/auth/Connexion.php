<?php

namespace src\Models\auth;

require("vendor/autoload.php");

use src\Exception\UserNotFoundException;
use src\Models\user\Personne;

class Connexion{

    private Personne $user;

    public function __construct($user){
        $this->user = $user;
    }

    // public function connect(): void{
    //     if(!$this->user->exist()){
    //         throw new UserNotFoundException();
    //     } else {
    //         echo "Connexion réussite";
    //     }
    // }

    
}