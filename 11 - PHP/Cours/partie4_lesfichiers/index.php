<?php

//Récupération des données sous forme de tableau
//Une ligne txt => une ligne de tableau
$fichier2 = file("uploads/fichier.txt");
// echo '<pre>';
// print_r($fichier2);
// echo '</pre>';

//Récupération du contenu de mon fichier dans une variable
$chaine = file_get_contents("uploads/fichier.txt");
// var_dump($chaine.'<br >');


//Ouvrir notre fichier dans une variable
//\n \r \r\n => utiliser le mode binaire 'b'
$fichier = fopen("uploads/fichier.txt", "a+");
if(!$fichier){
    echo "fichier introuvable";
} else {

    //Tant que on est pas arrivé à la fin du fichier
    while(!feof($fichier)){
        //Affichage par ligne
        echo fgets($fichier).'<br >'; 
    
        //     //Récupération d'un caractére 
        //     //var_dump(fgetc($fichier));
    
        //     //Lecture par nbr caractéres
        //     //echo fread($fichier, 10).'<br >';
    }

    //Ecriture dans un fichier
    fwrite($fichier, "test write\r\n");    

    fclose($fichier);
}



?>