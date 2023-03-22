<?php

class Vehicule{

    private string $nom;

    private string $modele;

    private string $marque;

    private string $garage;

    const GARAGE="moto";

    //Constructeur qui est appelé lors de l'instanciation
    public function __construct(string $nom,string $modele,string $marque){
        $this->nom = $nom;
        $this->modele = $modele;
        $this->marque = $marque;
        $this->garage = self::GARAGE;
    }

    public function echoNomVehicule(){
        return $this->nom.'<br>';
    }

    //Destruction de l'objet
    // public function __destruct(){
    //     echo "destruction <br>";
    // }

	/**
	 * @return string
	 */
	public function getMarque(): string {
		return $this->marque;
	}

	/**
	 * @param string $marque 
	 * @return self
	 */
	public function setMarque(string $marque): self {
		$this->marque = $marque;
		return $this;
	}

    
	/**
	 * @return string
	 */
    public function getModele(): string {
        return $this->modele;
	}
    
	/**
     * @param string $modele 
     * @return self
	 */
    public function setModele(string $modele): self {
        $this->modele = $modele;
		return $this;
	}
    
	/**
     * @param string $nom 
     * @return self
	 */
    public function setNom(string $nom): self {
        $this->nom = $nom;
		return $this;
	}

    /**
     * @return string
     */
    public function getNom(): string {
        return $this->nom;
    }
}

?>