var compteur = 0;
$('.btn_envoie').on("click", function(e) {
	compteur++;
	e.preventDefault();
	verif();
  });

//block message envoyé - cachépar defaut
$('.block').hide();

/************************** */
// compter champs message
$('#message').keyup(function() {
	  
	var nombreCaractere = $("#message").val().length;
	//var nombreCaractere = $(this).val().length;
	//$ .trim () Est utilisée pour enlever les deux extrémités de la chaîne d'espaces.
	var nombreMots = $.trim($("#message").val()).split(' ').length;
	
   // var nombreMots = $(this).val().split(' ');
	console.log(nombreMots);
		
	
	var msg = ' ' + nombreMots + ' mot(s) | ' + nombreCaractere + ' Caractere(s) / 200';
	$('#compteur').text(msg);
	//console.log(nombreCaractere);

	if ($("#message").val() > 0) {
		$("#message").css({"background":"red"})
	}
	if (nombreCaractere >= 200) { 
		$('#compteur').addClass("mauvais");

		$(".mauvais").css("color","red")
		//$('#message').prop('disabled', true); 
	}else{
		$('#compteur').removeClass("mauvais"); 
	}
})
/************************** */

//Je recupére tous les champs de saisis dans une variable
var tous_les_inputs = $('input, textarea#message');


//**** fonction de verification */
function verif() {
	
	var error = 0;
	

    //Boucle sur chacun des champs pour pour verifier s'il est vide ou pas
	$.each(tous_les_inputs, function (index) {

        var element = $(tous_les_inputs[index]);

		//Ici je recupere l'ID de chaque input
		// console.log(element.attr('id'))
		var getId = element.attr('id'); 

		if(element.val() == ''){
            
			$('#'+getId+'Error').text( "Le "+getId+ " doit être compris entre 5 et 15 caractères");

			//ICI, j'ajoute une nouvelle classe à tous les prochains elements
			element.next().addClass('error').css({
				"font-size": "0.8em",
				"font-style": "italic",
				"color": "#D38774"
			})

			element.css({'background':'#D38774',
				"border": "2px solid #D38774"
			});
			
			error++;
		}else{
			element.css({'background':'#fff',
			"border": "2px solid green",
			});
			$('#'+getId+'Error').text( "");
		}
	})



	// Verification du tel
	var mobile = /^(01|02|03|04|05|06|07|08|09)[0-9]{8}$/;

	if (!mobile.test($('#tel').val())) {
		$('#tel').css({
			'background':'#D38774'
		})
		error++;
	}

	if(error == 0 && compteur>1){
	
		$('#nom_ok').text($('#nom').val())
		
		$('.block').show(3000);
		$('form').hide();
	}
	else{
		return false;
	}
}

tous_les_inputs.each(function (index) {
	$(this).on("keyup", function () {
		verif()
	})
})