// effet buton panier*********************************************
document.querySelectorAll(".button").forEach((button) =>
    button.addEventListener("click", (e) => {
        if (!button.classList.contains("loading")) {
            button.classList.add("loading");
            setTimeout(() => button.classList.remove("loading"), 5700);
        }
        e.preventDefault();
    })
);

// typerWirite**************************************************************



var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true
});

typewriter
.changeDelay(30)
.typeString('<h2 style="color: green; font-weight: bold;">C\' est <strong style="color: red; font-weight: bold;"> NOEL </strong>, <i style="color: gold; font-weight: bold;">je peux maintenant</i> m\'amuser avec: <strong style="color: red; font-weight: bold;"> HTML </strong></h2>')
.pauseFor(3000)
.deleteChars(6)
.typeString('<h2><strong style="color: red; font-weight: bold;">CSS</strong></h2>')
.pauseFor(3000)
.deleteChars(4)
.typeString('<h2><strong style="color: gold; font-weight: bold;">JS</strong></h2>')
.pauseFor(3000)
.changeDelay(30)
.typeString('<h2 style="color: red; font-weight: bold;"><strong>JQUERY</strong></h2>')
.pauseFor(3000)
.deleteChars(7)
.typeString('<h2><strong style="color: blue; font-weight: bold;">AJAX</strong></h2>')
.pauseFor(3000)
.start();

// essai************************************************************

// const close = document.querySelector(".close");
// const open = document.querySelector(".ham");
// const menu = document.querySelector(".menu");
// close.addEventListener("click", () => {
  //   menu.style.visibility = "hidden";
  // });
  // open.addEventListener("click", () => {
    //   menu.style.visibility = "visible";
    // });
    
// function creationbouton() {
//   var btn =  document.createElement('button'); //créer le bouton
//   vart input = document.getElementById('newevent');//récupérer l'input
//   btn.setAttribute('name', input .value); //lui donner son nom
//   input.parentNode.insertBefore(btn, input.nextSibling);//l'insérer dans le dom où on veut: ici après l'input 
//   //(insérer parmi les fils du parent de l'input, avant le suivant de l'input)
// }


let nom = $(".items .nom");
const price = $(".items .price");
let descrption = $(".items .info");
// let ajouter ="";
// $.each(function (index,) {
  //   console.log( index + ": " + $( this ).text() );
  //   // ajouter = '<div class=""</li></ul><input type="button" class="btn btn-info" value="Ajouter au panier" id=""></div>'
  // });
  $(".items").append('<div class=""</li></ul><input type="button" class="btn btn-info" value="Ajouter au panier" id=""></div>');
let panier = [
];
// click sur le bouton "Ajout panier"
$('input[type="button"]').click(function () {
  // console.log($('input[type="button"]'));

  //alert('Le produit a été ajouté avec succès !')

  //verifie si le produit existe dans le panier
  var isExist = false;
  var nomP = $(this).parent().children("h5").text();
  console.log('isExist');
});
$.each(panier, function (index,valeur) {
  //Si le produit exkste deja, j'incremente juste la quantite et recalcule le total
  if (valeur.nom === nomP) {
    isExist = true;
    valeur.quantite ++;
    valeur.prixtotal = valeur.quantite *  valeur.prix
  }

  let getId = $(this).attr('id');
  if (!isExist) {

    panier.push(produit[getId]);
    panier[panier.length-1].quantite = 1
    panier[panier.length-1].prixtotal = produit[getId].prix * panier[panier.length-1].quantite
  }
});