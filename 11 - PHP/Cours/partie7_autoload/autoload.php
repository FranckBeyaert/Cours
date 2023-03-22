<?php

class Autoload{
    static function register(){
        spl_autoload_register([__CLASS__, 'autoload']);
    }

    static function autoload($class){
        echo $class;
        //require($class.'.php');
    }
}