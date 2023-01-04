var produit = [
    {
      nom: 'Blouson Cuir Homme OSX',
      image: 'https://s1.rockagogostatic.com/ref/pls/pls15/blouson-cuir-mec-marque-osx-brando-jacket-pr.jpg',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
      prix: 225
    },
    {
      nom: 'POLO CINTRE SLIM FIT EN COTON BASIC Bleu',
      image: 'https://media-cdn.placedestendances.com/fr/polo-ralph-lauren-polo-slim-fit-en-pique-de-coton-bleu/image/48/4/3378484.png?fit=bounds&bg-color=f7f7f7&width=700&height=959&canvas=700,959',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
      prix: 75
    },        
    {
      nom: 'Robe rose croisée à boucler',
      image: 'https://m1.quebecormedia.com/emp/emp/A1_2_1_d64e884e-d21e-41ab-8eb0-2baf6b656c00_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=802&h=1086&width=925&height=925',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
      prix: 50
    },
    {
      nom: 'Sneakers Adidas Original Homme',
      image: 'https://www.kiffoo.com/7220-large_default/basket-adidas-original-homme.jpg',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
      prix: 159
    },
    {
      nom: 'Pantalon jogging Nike Just Do It - Noir',
      image: 'https://api.vs.prod.footkorner.nbs-aws.com/img/600/744/resize/catalog/product/f/o/footkorner-pantalon-nike-just-do-it-cu4050-010-noir_1_.jpeg',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
      prix: 27
    },
    {
      nom: 'Sportwear Femme Gris',
      image: 'https://contents.mediadecathlon.com/p1691566/k$863fad91e6bb4a2de8373ca10dfc3a53/sq/sous-vetements-thermique.jpg?format=auto&f=800x0',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
      prix: 20
    },
    {
      nom: 'Doudoune Rouge Homme',
      image: 'https://www.cdiscount.com/pdt2/2/7/7/1/700x700/mp40057277/rw/doudoune-rouge-homme-marque-duvet-de-canard-blanc.jpg',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
      prix: 60
    },
    {
      nom: 'UNDER ARMOUR BLITZING 3.0 MARINE',
      image: 'https://medias.go-sport.com/media/resized/340x/catalog/product/01/50/71/39/blitzing-30-marine_1_v1.jpg',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
      prix: 22
    }
  ]; 

   let container = '<div class="container">';
  let ligne = '<div class="row justify-content-around mt-4" id="produit">';
  let card ="";
  /* Affichages des prods dans HTML */
  $.each(produit, function (index, prod) {

    card += '<div class="mes_cards card  text-center" style="width: 18rem;"><img src="'+ prod.image +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+prod.nom+'</h5><p class="card-text">'+prod.descrption+'</p><ul class="list-group list-group-flush"><li class="list-group-item">Prix: '+prod.prix +' € </li></ul><input type="button" class="btn btn-info" value="Ajouter au panier" id="'+index+'"></div></div>'
    
  })

  ligne += card
  container += ligne + "</div>";

  $("body").append(container);
  
  
  // cree un tableau vide pour mettre les produits ajoutés dans le panier
  let panier = [];
// click sur le bouton "Ajout panier"
$('input[type="button"]').click(function () {

  alert('Le produit a été ajouté avec succès !')

  //verifie si le produit existe dans le panier
  var isExist = false;

  var nomP = $(this).parent().children("h5").text();
  console.log('isExist');
  $.each(panier, function (index,valeur) {
    //Si le produit exkste deja, j'incremente juste la quantite et recalcule le total
    if (valeur.nom === nomP) {
      isExist = true;
      valeur.quantite ++;
      valeur.prixtotal = valeur.quantite *  valeur.prix
    }
  })
  //Ajout dans panier
  let getId = $(this).attr('id');
    if (!isExist) {

      panier.push(produit[getId]);
      panier[panier.length-1].quantite = 1
      panier[panier.length-1].prixtotal = produit[getId].prix * panier[panier.length-1].quantite
    }})

  // patie essaie********************** 
  
  
  // $("body");
  // $(document).ready(function(){
  //   //Replie le titre en 400ms lors du clic sur #b1
  //   $("#b1").click(function(){
  //       $("h1").slideUp();
  //   });
    
  //   //Déplie le titre en 2 secondes lors du clic sur #b2
  //   $("#b2").click(function(){
  //       $("h1").slideDown(2000);
  //   });

  //   //Déplie le titre s'il est plié ou le plie s'il est déplié
  //   $("#b3").click(function(){
  //       $("h1").slideToggle(2000);
  //   });
