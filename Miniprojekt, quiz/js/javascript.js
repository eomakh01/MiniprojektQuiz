function quiz() {
	/* Första frågan */
	var firstQuestion = document.getElementById('firstQuestion');
	var resultat = 0;
	if (firstQuestion.checked == true){
		resultat = resultat+1;
	}

	/* Andra frågan */
	var secondQuestion = document.getElementById('secondQuestion');
	if (secondQuestion.checked == true) {
		resultat = resultat+1;
	}

	/* Tredje frågan */
	var thirdQuestion = document.getElementById('thirdQuestion').value;
	if (thirdQuestion == "nej") {
		resultat = resultat+1;
	}

	/* Fjärde frågan */
	var forthQuestion = document.getElementById('forthQuestion');
	if (forthQuestion.checked == true) {
		resultat = resultat+1;
	}

	/* Femte frågan */
	var fifthQuestion = document.getElementById('fifthQuestion');
	if (fifthQuestion.checked == true) {
		resultat = resultat+1;
	}

	/* Sjätte frågan */
	var sixthQuestion = parseInt(document.getElementById('sixthQuestion').value);
	if (sixthQuestion == 11) {
		resultat = resultat+1;
	}

	/* Sjunde frågan */
	var seventhQuestion = parseInt(document.getElementById('seventhQuestion').value);
	if (seventhQuestion == 7) {
		resultat = resultat+1;
	}

	/* Åttonde frågan */
	var eighthQuestion = parseInt(document.getElementById('eighthQuestion').value);
	if (eighthQuestion == 2) {
		resultat = resultat+1;
	}

	/* Nionde frågan */
	var ninthQuestion = document.getElementById('ninthQuestion');
	if (ninthQuestion.checked == true) {
		resultat = resultat+1;
	}

	/* Tionde frågan */
	var tenthQuestion = document.getElementById('tenthQuestion');
	if (tenthQuestion.checked == true) {
		resultat = resultat+1;
	}

	/*-----------------------Resultat- Fall 1 -----------------------*/
	if (resultat == 10) {
		document.getElementById('word').innerHTML = "Fantastiskt,"
		document.getElementById('holder1').className = "holder1";
		document.getElementById('resultat').innerHTML = resultat;
	}

	/*-----------------------Resultat- Fall 2 -----------------------*/
	if (resultat < 10 && resultat > 5) {
		var image = document.getElementById('bild');
		image.src = "imgs/bra.png";
		document.getElementById('word').innerHTML = "Bra,"
		document.getElementById('holder1').className = "holder1";
		document.getElementById('resultat').innerHTML = resultat;
	}

	/*-----------------------Resultat- Fall 3 -----------------------*/
	if (resultat <= 5 && resultat >= 0) {
		var image = document.getElementById('bild');
		image.src = "imgs/failure.jpg";
		document.getElementById('word').innerHTML = "Tyvärr,"
		document.getElementById('holder1').className = "holder1";
		document.getElementById('resultat').innerHTML = resultat;
	}

}