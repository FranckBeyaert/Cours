<?php

namespace Exception;

class UserNotFoundException extends \Exception
{
    //Redéfinition de la propriété héritée
    protected $message = "Utilisateur inconnu (message de l\'exception)";
}