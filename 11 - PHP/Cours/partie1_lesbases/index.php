<?php

//echo "Bonjour M2I";

$nombre = 1;
$decimal = 2.6;
$texte="bonjour M2I";
$boolean=false;
enum Jour:int{
    case Lundi = 1;
    case Mardi = 2;
    case Mercredi = 3;
}
//echo Jour::Mardi->value;

//define("NOM","EL MOUTAOUKIL");
const NOM = "EL MOUTAOUKIL";
$prenom = "MEHDY";
//echo "<p>Bonjour ".NOM." $prenom </p>";

$var1 = "ABC";
$var2 = &$var1;

// echo "$var1 $var2 <br />";
// $var2 = "DEF";
// echo "$var1 $var2<br />";


$chaine=" bonjour M2I ";
//$chaine[9] = "A";
//echo substr($chaine, 8, 3);
//echo substr($chaine, -8);

//echo str_replace("Bonjour", "Hello", $chaine);
//echo str_ireplace("BoNjour", "Hello", $chaine);
//var_dump(str_contains($chaine, "M3I"));
//var_dump(str_ends_with($chaine, "M2I"));
//var_dump(trim($chaine));
//var_dump(strpos($chaine, "M2"));


//TABLEAUX
//$tableau = array();
$tableau = [
    1 => "A",
    "O" => "B",
    4 => "C",
    "D",
    "E"
];

//array_push($tableau, "F");
//Ajout à la fin du tableau
$tableau[] = "F";
//Ajout en début de tableau
array_unshift($tableau, "A+");
//Suppression du dérnier élément d'un tableau
array_pop($tableau);
//Suppresion du premier élément d'un tableau
array_shift($tableau);
//Découpage d'un tableau
$tableau2 = array_chunk($tableau, 3);

$tableau3 = [
    "A" => [
        1 => "EL MOUTAOUKIL",
        "prenom" => "MEHDY"
    ],
    1 => [
        "nom" => "nom2",
        "prenom" => "prenom2"
    ]
    ];

// echo '<pre>';
// print_r($tableau);
// echo '</pre>';
// echo '<pre>';
// print_r($tableau2);
// echo '</pre>';
// echo '<pre>';
// print_r($tableau3);
// echo '</pre>';
//var_dump($tableau3["A"][1]);

//Parcourir un tableau
// foreach ($tableau3 as $key => $v) {
//    var_dump($key);
// }


//LES OPERATIONS
/**
 * opérations arithmétiques +, -, *, /, %, **
 * opérations d'affectations =, +=, -=, *=, %=
 * opérations de concaténation ., .=
 * opérateurs logiques : and, &&, or, ||, xor (or exclusive)
 * opérateurs de comparaison : ==, ===, <=, >=, <, >, <=>
 * Fonctions usuelles : is_int(), is_string(), is_bool(), is_float(), is_array()
 */

 $nbr1 = 10;
 $nbr2 = 10;

 //$nbr1 = $nbr1 + 1;
 //$nbr1 += 1;
 //echo ++$nbr1;
 //echo $var1.$nbr1;

 $a=true;
 $b=true;
 $c=false;
 $resultat = ($a xor $b xor $c);
 //var_dump($resultat);

//  if($nbr1 == 10){
//     echo "Vrai";
//  } else {
//     echo "FAUX";
//  }

 //echo $nbr1 === 10 ? "Vrai" : "Faux";
/**
 * valeur1 < valeur2 => -1
 * valeur 1 = valeur2 => 0
 * valeur 1 > valeur2 => 1
 */

 //echo $nbr1 <=> $nbr2;

//  echo isset($nbr2) ? "Existe" : "Existe pas";
//  unset($nbr2);
//  echo isset($nbr2) ? "Existe" : "Existe pas";
    
 $resultat = $nbr11 ?? 0;
 //echo $resultat;

 /**
  * Summary of afficher
  * @param string $nom
  * @param string $prenom
  * @param int $numero
  * @return void
  */
 function afficher($nom, $prenom, $numero = "TEST"){
    echo "$nom $prenom $numero";
 }

 //afficher(nom : "ELMOUTAOUKIL", prenom: "MEHDY");
 $nom = "TES1T";
 $email = "aaaa";
 echo preg_match('/\d/', $nom);
 echo filter_var($email, FILTER_VALIDATE_EMAIL);
?>