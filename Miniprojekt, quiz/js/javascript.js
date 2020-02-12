function quiz() {
	/* Första frågan */
	var firstQuestion = document.getElementById('firstQuestion');
	var firstQuestion2 = document.getElementById('firstQuestion2');
	var firstQuestion3 = document.getElementById('firstQuestion3');
	var firstQuestion4 = document.getElementById('firstQuestion4');
	var resultat = 0;
	if (firstQuestion.checked == false && firstQuestion2.checked == false && firstQuestion3.checked == false && firstQuestion4.checked==false)
	{
		alert('Vänligen, besvara första frågan.');	
	}
	else if (firstQuestion.checked == true){
		resultat = resultat+1;
	}


	/* Andra frågan */
	var secondQuestion = document.getElementById('secondQuestion');
	var secondQuestion2 = document.getElementById('secondQuestion2');
	var secondQuestion3 = document.getElementById('secondQuestion3');
	var secondQuestion4 = document.getElementById('secondQuestion4');
	if (secondQuestion.checked == false && secondQuestion2.checked == false && secondQuestion3.checked == false && secondQuestion4.checked == false )
	{
		alert('Vänligen, besvara andra frågan');
	}	
	else if (secondQuestion.checked == true) {
		resultat = resultat+1;
	}

	/* Tredje frågan */
	var thirdQuestion = document.getElementById('thirdQuestion').value;
	if (thirdQuestion == "nej") {
		resultat = resultat+1;
	}
	else if (thirdQuestion == ""){
		alert('Vänligen, besvara tredje frågan');
	}

	/* Fjärde frågan */
	var forthQuestion2 = document.getElementById('forthQuestion2');
	var forthQuestion = document.getElementById('forthQuestion');
	var forthQuestion3 = document.getElementById('forthQuestion3');
	var forthQuestion4 = document.getElementById('forthQuestion4');
	if (forthQuestion.checked == true) {
		resultat = resultat+1;
	}
	else if (forthQuestion.checked == false && forthQuestion2.checked == false && forthQuestion3.checked == false & forthQuestion4.checked == false) {
		alert('Vänligen, besvara fjärde frågan');
	}

	/* Femte frågan */
	var fifthQuestion2 = document.getElementById('fifthQuestion2');
	var fifthQuestion3 = document.getElementById('fifthQuestion3');
	var fifthQuestion4 = document.getElementById('fifthQuestion4');
	var fifthQuestion = document.getElementById('fifthQuestion');

	if (fifthQuestion.checked == true) {
		resultat = resultat+1;
	}

	else if (fifthQuestion.checked == false && fifthQuestion2.checked == false && fifthQuestion3.checked == false && fifthQuestion4.checked == false) {
		alert('Vänligen, besvara femte frågan');	
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
	var ninthQuestion4 = document.getElementById('ninthQuestion4');
	var ninthQuestion3 = document.getElementById('ninthQuestion3');
	var ninthQuestion2 = document.getElementById('ninthQuestion2');
	var ninthQuestion = document.getElementById('ninthQuestion');
	if (ninthQuestion.checked == true) {
		resultat = resultat+1;
	}
	else if(ninthQuestion.checked == false && ninthQuestion2.checked == false && ninthQuestion3.checked == false && ninthQuestion4.checked == false){
		alert('Vänligen, besvara nionde frågan');
	}

	/* Tionde frågan */
	var tenthQuestion4 = document.getElementById('tenthQuestion4');
	var tenthQuestion3 = document.getElementById('tenthQuestion3');
	var tenthQuestion2 = document.getElementById('tenthQuestion2');
	var tenthQuestion = document.getElementById('tenthQuestion');
	if (tenthQuestion.checked == true) {
		resultat = resultat+1;
	}
	else if (tenthQuestion.checked == false && tenthQuestion2.checked == false && tenthQuestion3.checked == false && tenthQuestion4.checked == false){
		alert('Vänligen, besvara sista frågan');
	}

	/*-----------------------Resultat- Fall 1 -----------------------*/
	if (resultat == 10) {
		var image = document.getElementById('bild');
		image.src = "imgs/geni10.jpg";
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