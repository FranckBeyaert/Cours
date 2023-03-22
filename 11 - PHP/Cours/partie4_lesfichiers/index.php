<?php

$nomImg = "Vendor.jpg";
$img = __DIR__."/uploads/".$nomImg;

// echo '<pre>';
// var_dump(getimagesize($img));
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
    0, // pos x => coin supérieur gauche dest
    0, // pos y => coin supérieur droit dest
    0, // pos x => coin supérieur gauche src
    0, // pos y => coin supérieur droit src
    $largeur / 2, // largeur img dest
    $hauteur / 2, // hauteur img dest
    $largeur, // largeur img src
    $hauteur, // hauteur img src
);

//Création de l'image redimensionnée
imagejpeg($newImg, __DIR__."/uploads/resize".$nomImg);

//Recadrer une image
$imgCrop = imagecrop($src,
[
    'x' => "100",
    'y' => "100",
    'width' => "200",
    'height' => "200",
]);

//Création de l'image recadrée
imagejpeg($imgCrop, __DIR__."/uploads/crop".$nomImg);

//Rotation d'une image
$imageRotate = imagerotate($src, 180, 0);

//Création de l'image rotation
imagejpeg($imageRotate, __DIR__."/uploads/rotate".$nomImg);

?>