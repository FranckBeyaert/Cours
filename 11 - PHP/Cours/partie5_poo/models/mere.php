<?php

abstract class Mere {

    protected $nom;
    protected $prenom;

    public function __construct($nom, $prenom){
        $this->nom = $nom;
        $this->prenom = $prenom;
    }

    public final function test(){
        echo "test ";
    }
    
    abstract public function test2();
    abstract public function test3();

	/**
	 * @return mixed
	 */
	public function getNom() {
		return $this->nom;
	}
	
	/**
	 * @param mixed $nom 
	 * @return self
	 */
	public function setNom($nom): self {
		$this->nom = $nom;
		return $this;
	}

	/**
	 * @return mixed
	 */
	public function getPrenom() {
		return $this->prenom;
	}
	
	/**
	 * @param mixed $prenom 
	 * @return self
	 */
	public function setPrenom($prenom): self {
		$this->prenom = $prenom;
		return $this;
	}
}


?>