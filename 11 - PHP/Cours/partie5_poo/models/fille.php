<?php

require_once("mere.php");

class Fille extends Mere {
    private $age;
    public function __construct($nom, $prenom, $age){
        parent::__construct($nom, $prenom); // représente le super()
        $this->age = $age;
    }
    
    public function test2(){
        echo "test2";
    }
    
    public function test3(){
        echo "test3";
    }
}



?>