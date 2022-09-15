/* Le DOM

  Document Objet Model 
  Jl fournit une représentation du document sous forme d'un arbre et définit la façon dont la structure peut etre manipulée par votre programme (le JS dans notre cas)

  On peut dire qu'il s'aggit d'une sorte de "passerelle" entre le HTML et le JS

  Grace au dom nous allons être en mesure de venir accéder et/ou modifier notre HTML depuis le JS

  Chaque page chargée dans notre navigateur dispose d'un objet "document" utilisable en Js
  Cet objet "document" est notre point d'entrée vers notre contenu HTML

  Comment récupéré les différentes informations de notre HTML ?

  document.getElementById("monId");
Cette méthode va nous permettre de récupérer un élémént HTML à partir de son ID.
Elle prend en paramètre l'ID de l'élement que l'on souhaite récupérer
  
  */

  let welcome = document.getElementById("welcome");
  console.log(welcome);

  /*
  dociument.getElementsByClassName("maClasse")
  Cette méthode va permettre de récupérer un ou plusieurs élément HTml à partir d'une classe passée en paramètre de la méthode
  */

  let data = document.getElementsByClassName("contenu");
  console.log(data);
  console.log(data[0]);
  console.log(data[1]);

  /**
   * Contrairement à getElementById on recupère un tableau numérique avec nos éléément HTML à intérieur.
   * A noter aussi que même si la classe n'est utilisée que sur un élémént, la méthode retournera malgré tout un tableau.
   * 
   * /
   


/*
   * document.getElementsByTagName("nomBalise");
   Cette méthode va nous permettre de récupérer un ou plusieurs éléméents HTML à partir de nom de la balise.
   */

   let paragraphes = document.getElementsByTagName("p");
   console.log(paragraphes);

   //Récupérer dans une variable le lien google

   let google = document.getElementById("googleLink");
   console.log(google);

   /** Nous allons pouvoir accéder aux infos de ce lien à partir de l'élément récuperé */

   //où emmène le lien
   console.log(google.href);

   // l'ID de élément
   console.log(google.id);

   //classe de lélément
   console.log(google.className);

   // contenu de l'élémnt
   console.log(google.textContent);

   /**
    * Comme une variable "classique" on va pouvoir réaffecter une nouvelle valeur à la propriété souhaitée 
    */

    google.textContent = "Mon lien vers Google";

    /**
     * Ajouter un élémént
     */

     // 1) Création de l'élémént (methode create sur l'objet document)

     let p  = document.createElement("p");
     // 2) définir l'élément
     p.id = "newParagraphe";
     p.textContent = "Mon paragraphe créé en JS :)";

     // 3) Ajouter à l'élémnt dans HTML
    //  document.body.appendChild(p);  // Pour ajouter l'élément en tant qu'enfant du body (à la fin du document)

    // Ajouter l'élément en tant qu'enfant d'un éléméent autre que le body
    let div = document.getElementById("addNewP");
    div.appendChild(p); // On remplace document.body par la variable qui contient l'élément parent

    // p.style.color = "red"; // Paragraphe en rouge
    /*
    *Dans un soucis de respect de la séparation des concepts nous éviterons au maximum de manipuler les styles de cette fàçon. En effet nous privilégirons l'utilisation des classes pour ajouter ou supprimer des styles.
     */

     // propriét classList
    p.classList.add("color-red","text-uppercase");
    console.log(p.classList);

    p.classList.remove("text-uppercase"); // Retirer une ou plusieurs classes

    /**
     * Les événements
     * 
     * 
     * Les événements vont nous permettre de déclencher une fonction (une série d'instructions) suite à une intéraction/action de l'utilisateur
     * 
     * Notre objectif : Etre en mesure de capter/capturer ces évenemnts, afin d'exectuter une fonction
     * 
     * Nous allons trouver plusieurs types d'évenements
     * 
     * -les éveneements à la souris
     *       *click --> au clic sur un élément
     *       *mouseenter --> au survol d'un élément
     *       *mouseleave ---> lorsque l'on quitte le survol d'un élément
     * 
     * -les événements au clavier
     *       *keydown --> une touche du clavier est enfoncée
     *       *keyup --> une touche de clavier est relachée
     * 
     * -les évenements sur la fenêtre
     *       *scroll --> défilement de la fenêtre
     *       *resize --> redimentionnement de la fenêtre
     * 
     * - Les événement sur un formulaire
     *       * change ---> auchangement de valeur pour les éléménts <input>,<select>, <textarea>
     *       * submit ---> avant l'envoi du formulaire
     * 
     * - Les événement sur le DOM
     *       * DOMContentLoades --> lorsque le document HTML est complèment chargé
     * 
     *************************************************************************************************************************************

     Les écouteurs d'éveneemnts

     Nous allons avoir besoin d'"attacher" un événement à un élémént ou autrement dit déclarer un écouteur d'éveneement qui se chargera de lancer une action lorsque l'évenemnt se produira --> cette action sera une fonction (cette fonction sera à l'intérieur d'une autre fonction et noux appellerons donc cette fonction une fonction callback)
     *
     *
     * La fonction que nous allons utiliser pour déclarer un écouteur d'evement est addEventListener
     * 
     * elmeent.addEventListener("type d'évenemnt", fonction de callback ou nom d'une fonction existante)
     * 
     * Exemple : AU clic sur le paragraphe portant d'id welcome, afficher le textez en jaune
     * 
     * 1/ Onrécupère l'élément sur lequel nous allons attacher l'écouteur d'éveneement dans l'étape 3
     */
     let bienvenue = document.getElementById("welcome");

     //2/ On détermine une fonction en mesure de réaliser l'action demandée

     function changeColor(){
         if (bienvenue.style.color == "gold") {
            bienvenue.style.color = "black";
         } else {
            bienvenue.style.color = "gold";
         }
         
     }

      bienvenue.addEventListener("click", changeColor);

     // Posssible de passer directement par une fonction de CallBack

     bienvenue.addEventListener("click", () => {
        if (bienvenue.style.color == "gold") {
           bienvenue.style.color = "black";
        } else {
           bienvenue.style.color = "gold";
        }
        
    } );

    /**
     * Exercice
     * 
     * En JS uniquement
     * 1/ créer un champ input
     * ajouter un typz text à ce champ
     * ajouter id à ce champ (ex: monInput)
     * ajouer le champ au document HTML
     * ajouter dans une alerte la saisie de l'utilisateur dès que quelquechose est saisie
     * 
     */

     let input = document.createElement("input");
     input.type = "text";
     input.id = "monInput";
     document.body.appendChild(input);
     input.addEventListener("change",() =>{
         alert(input.value);
     })

     /**
      * L'eneement DOMContentLoaded
      * 
      * 
      * Cet énément est déclanché losque le DOM est complement chargé, sans attendre les images et les feuilles de style.
      * 
      * Une erreur courante vise à utiliser l'eveneemnt load plutôt que DOMContnetLoades
      * 
      * Le problème est que l'evenemet load ne se déclenche que lorsque la page est entièrement chargé
      * 
      */
     document.addEventListener("DOMContentLoaded",() =>{
        console.log("Le DOM est bien chargé!");
     });

     /**
      * L'évenemnt scroll
      */

    //   window.addEventListener("scroll", ()=>{
    //       console.log(window.scrollY);
    //       if (window.scrollY > 100) {
    //           console.log("Tu as scrollé à plus de 100px");
    //       }
    //       console.log("bravo");
    //   });

      /**
       * querySelector
       * 
       * Cette méthode, toujours sur l'objet document, retourne le premier élément dans le document HTML correspondant au sélecteur spécifié ou null si aucune correspondance n'est trouvée.
       */
      let element = document.querySelector(".contenu");
      console.log(element);

      /*Cette méthode, toujours sur l'objet document, retourne tous éléments dans le document HTML correspondant au sélecteur spécifié ou null si aucune correspondance n'est trouvée.
      */
      let elements = document.querySelectorAll(".contenu");

      console.log(elements);

      /**
       * La méthode preventDefault sur l'objet event
       * 
       * Elle va nous permettre d'indiquer que nous ne souhaitons pas que l'action par défaut soit prise en compte.
       * 
       * 
       * La fonction de callback passée en paramètre d'addEvenlistener peut prendre un paramètre.
       * Ce paramètre représente l'objet event.
       * il est généralement nommé e, evt ou event
       * 
       * La methode preventDefault de cet odjet récupéré en paramètre permet d'empêcher le navigateur de déclencher son comportement par défaut.
       * 
       * Exemple: empêcher l'utilisateur d'allert sur Google au clic sur le lien portant l'id googleLink
       */

       let googleLink = document.querySelector("#googleLink");
       googleLink.addEventListener("click", e =>{
        // annuler le comportement par défaut
        e.preventDefault();

        alert("VOUS NE PASSSEREZ PAS !")

        console.log(e.target);
        console.log(e.target.classList);
       })



