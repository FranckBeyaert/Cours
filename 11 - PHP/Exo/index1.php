<?php

class User
{
    public $id;
    public $nom;
    public $prenom;
    public $age;
    public $email;
    public $bloque;
    public $reason;

    // Add a constructor to initialize the properties of the User object
    public function __construct($id, $nom, $prenom, $age, $email, $bloque, $reason)
    {
        $this->id = $id;
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->age = $age;
        $this->email = $email;
        $this->bloque = $bloque;
        $this->reason = $reason;
    }
}

$input = array(
    new User(1, 'Dumont', 'Xavier', 40, null, true, null),
    new User(2, 'leclerc', 'jean', 30, 'jean.leclerc@gmail.com', false, null),
    new User(3, 'Dureux', 'Alexia', 30, null, false, null),
    new User(4, 'Lievin', 'Camille', 27, 'camille.lievin@gmail.com', false, null),
    new User(5, 'Bernard', 'Al1ne', 28, 'aline.bernard@gmail.com', false, null),
    new User(6, 'Fossart', 'Julien', 35, 'julien.fossart@gmail.com', false, null),

);

function filter_users($user)
{

    if (empty($user->nom) || !is_string($user->nom)) {
        $user->reason = 'Empty or invalid  surname';
        return false;
    }


    if (empty($user->prenom) || !is_string($user->prenom)) {
        $user->reason = 'Empty name or invalid ';
        return false;
    }
    if (empty($user->email) || !filter_var($user->email, FILTER_VALIDATE_EMAIL)) {

        $user->reason = 'Empty or invalid email ';
        return false;
    }


    if (empty($user->age) || !is_numeric($user->age)) {

        $user->reason = 'Empty age ';

        return false;
    }



    // Check if bloque is false
    if ($user->bloque) {
        $user->reason = 'User is blocked';
        return false;
    }

    return true;
}

// $user->reason

$valid_users = array_filter($input, 'filter_users');

$invalid_users = array_diff($input, $valid_users);



?>