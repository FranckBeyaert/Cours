<?php

namespace src;


class Routeur{

    private $routes = [];

    private const METHOD_GET = 'GET';
    private const METHOD_POST = 'POST';

    //Méthode d'enregistrement des routes GET
    public function get($path, $action): void {
        //$routes['GET']['/'] => $action;
        $this->routes[self::METHOD_GET][$path] = $action;
    }

    //Méthode d'enregistrement des routes POST
    public function post($path, $action): void {
        //$routes['POST']['/'] => $action;
        $this->routes[self::METHOD_POST][$path] = $action;
    }

    public function run(){
        // echo '<pre>';
        // print_r($this->routes);
        // echo '</pre>';
        $uri = parse_url($_SERVER["REQUEST_URI"]);
        $uri = str_replace('/PHP8/partie8_routeur','',$uri);
        $path = $uri['path'];
        $method = $_SERVER['REQUEST_METHOD'];
        // echo "$path <br >";
        // echo $method;

        //Vérifier si l'url appelée existe dans ma table de routage
        if(isset($this->routes[$method][$path])){

            //Si l'action est une chaine de caractére
            if(is_string($this->routes[$method][$path])){
                $part = explode('::',$this->routes[$method][$path]);
                // echo $part['0'].'<br >';
                // echo $part['1'];
                if(is_array($part)){
                   $classname =  array_shift($part); //équivalent à $part['0']
                   $class = new $classname;
                   $action = array_shift($part); //équivalent à $part['1']
                   return call_user_func([$class, $action]);
                }
            } else {
                //Execution de l'action stocker pour la route
                return call_user_func($this->routes[$method][$path], [
                    array_merge($_GET,$_POST)
                ]);
            }
        } else {
            echo "ERREUR 404";
            http_response_code(404);
        }
    }
}



?>