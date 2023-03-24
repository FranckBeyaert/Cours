<?php

$nomImg = "bmw.jpg";

$img = __DIR__."/uploads/".$nomImg;

// echo '<pre>';
// print_r(getimagesize($img));
// echo '</pre>';

$config = getimagesize($img);
$largeur = $config[0];
$hauteur = $config[1];

//Instancier une nouvelle image
$newImg = imagecreatetruecolor($largeur / 2, $hauteur / 2);
//Création d'un clone de mon image source
$src = imagecreatefromjpeg($img);

//Configuration de l'image dest 
imagecopyresampled(
    $newImg, // image de destination
    $src, // image source
    0, // position x => coin superieur gauche dest
    0, // position y => coin superieur droit dest
    0, // position x => coin superieur gauche src
    0, // position y => coin superieur droit src
    $largeur / 2, //largeur img dest
    $hauteur / 2, //hauteur img dest
    $largeur, //largeur img src
    $hauteur, //hauteur img src
);

//Création de l'image redimensionnée
imagejpeg($newImg, __DIR__."/uploads/resize-".$nomImg);

//Recadrer une image
$imgCrop = imagecrop($src,
[
    "x"=>"0",
    "y"=>"0",
    "width"=>"400",
    "height"=>"300"
]);

//Création de l'image recadrée
imagejpeg($imgCrop, __DIR__."/uploads/crop-".$nomImg);


//Rotation d'une image
$imgRotate = imagerotate($src, 90, 0);

//Création de l'image retournée
imagejpeg($imgRotate, __DIR__."/uploads/rortate-".$nomImg);








?>