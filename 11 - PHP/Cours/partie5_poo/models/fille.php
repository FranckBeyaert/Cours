<?php

require_once("Mere.php");

class Fille extends Mere{

    private $age;

    public function __construct($nom, $prenom, $age){
        parent::__construct($nom, $prenom); //représente le super()
        $this->age = $age;
    }

	/**
	 * @return mixed
	 */
	public function Test() {
        echo "test";
	}
}

?>