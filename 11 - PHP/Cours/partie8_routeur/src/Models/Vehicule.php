<?php

namespace src\Models;

class Vehicule {

    public function getListeVehicule(){
        echo "Liste véhicules";
    }

    public function getVehiculeById(){
        echo "Mon véhicule";
    }

    public function addVehicule(){
        print_r($_REQUEST['nom']);
        print_r($_REQUEST['modele']);
        //echo "Nouveau véhicule";
    }

    public function getForm(): void {
        require_once(__DIR__.'/../Templates/vehicule-form.html');
    } 

    
}



?>