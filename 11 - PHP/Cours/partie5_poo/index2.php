<?php

interface Lapi
{
    public function create();
    public function update();
    public function delete();
    public function get();
}

abstract class Pere{
    abstract public function create();
    abstract public function update();
    abstract public function delete();
    abstract public function get();
}

class Test extends Pere{

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
}
