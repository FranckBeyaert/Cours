<?php

namespace src\Models\car;

class Voiture {

    public function getListeVoiture(){
        echo "Liste véhicules";
    }

    public function getVoitureById(){
        echo "Mon véhicule";
    }

    public function addVoiture(){
        print_r($_REQUEST['nom'].'<br>');
        print_r($_REQUEST['modele'].'<br>');
        print_r($_REQUEST['marque'].'<br>');
        print_r($_REQUEST['matricule'].'<br>');
        print_r($_REQUEST['statue'].'<br>');
    }

    public function getForm(): void {
        require_once(__DIR__.'/../../Templates/voiture-form.html');
    } 

    
}

?>