<?php

/**
 * Une interface est une api (service)
 * c'est une classe qui ne peux pas étre instancier
 * Il faut implémenter toutes les méthodes de l'interface
 *  <> avec les classes abstraites => possibilité d'implémenter plusieurs interfaces
 */


interface Iapi {
    public function create();
    public function update();
    public function delete();
    public function get();
}

interface Iapi2 {
    public function create2();
}

class Test implements Iapi, Iapi2 {
	/**
	 * @return mixed
	 */
	public function create() {
	}
	
	/**
	 * @return mixed
	 */
	public function update() {
	}
	
	/**
	 * @return mixed
	 */
	public function delete() {
	}
	
	/**
	 * @return mixed
	 */
	public function get() {
	}
	
	/**
	 * @return mixed
	 */
	public function create2() {
	}
}


?>