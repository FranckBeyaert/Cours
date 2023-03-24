<?php

require_once('Models/ocass/vehicule.php');
require_once('Models/neuve/vehicule.php');

use Models\Ocass\Vehicule as VehiculeOcass;
use Models\Neuve\Vehicule as VehiculeNeuve;

//$vehicule = new Models\Neuve\Vehicule("v1","1","");
//$vehicule = new Models\Ocass\Vehicule("v1","1","");
$vehicule1 = new VehiculeNeuve("v1","1","");
$vehicule2 = new VehiculeOcass("v1","1","");


?>