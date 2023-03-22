<?php

//Récupération des données sous forme de tableau
//Une ligne => une ligne de tableau
$fichier2 = file("uploads/vehicules.txt");
// echo '<pre>';
// print_r($fichier2);
// echo '</pre>';

//Récupération du contenu de mon fichier dans une variable
$chaine = file_get_contents("uploads/vehicules.txt");
// var_dump($chaine.'<br>');

//Ouvrir notre fichier dans une variable
//\n, \r, \r\n => utiliser le mode binaire 'b'
$fichier = fopen("uploads/vehicules.txt", "ab+");
if(!$fichier){
    echo "Fichier introuvable";
} else {
    //Tant qu'on est pas arrivé à la fin du fichier
    while(!feof($fichier)){
        //Affichage pâr ligne
        echo fgets($fichier).'<br>';
        
        //Récupération d'un caractère
        //var_dump(fgetc($fichier));

        //Lecture par nbr caractères
        // echo fread($fichier, 15).'<br>';
    }

    //Ecriture dans un fichier
    fwrite($fichier, "test écriture\r\n");
    fclose($fichier);
}
