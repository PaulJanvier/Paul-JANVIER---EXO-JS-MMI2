var nb_1 = 1;
var nb_2 = 10;
var result_ex1 = nb_1 + nb_2;

function Addition(){
  document.getElementById('result-exo-1-1').innerHTML = result_ex1;
}



var nb_3 = 1;
var nb_4 = 10;
var result_ex1_2 = nb_3 * nb_4;

function Multiplication(){
  document.getElementById('result-exo-1-2').innerHTML = result_ex1_2;
}



var nb_5 = 12;
var nb_6 = 5;
var result_ex1_3 = nb_5 % nb_6;

function Division(){
  document.getElementById('result-exo-1-3').innerHTML = result_ex1_3;
}

  function largeurEcran(){
    document.getElementById("largeurEcran").innerHTML = "La largeur disponible de votre écran est " + screen.availWidth;
  }
  
  function resolution() {
    largeur = window.innerWidth
    hauteur = window.innerHeight
      document.getElementById("resEcran").innerHTML = largeur + "x" + hauteur;
    }
  largeurEcran();
  resolution();





function Soustraction(){
	var x = document.getElementById("x").value;
	var y = document.getElementById("y").value;
	var resultat_1_4 = x - y;
  	document.getElementById('resultat_1_4').innerHTML = resultat_1_4;
}

function Multiplication(){
  var x = document.getElementById("xx").value;
  var y = document.getElementById("yy").value;
  var resultat_1_5 = x * y;
    document.getElementById('resultat_1_5').innerHTML = resultat_1_5;
}


function Division(){
  var xxx = document.getElementById("xxx").value;
  var yyy = document.getElementById("yyy").value;
  var resultat_2_1 = xxx / yyy;
    document.getElementById('resultat_2_1').innerHTML = resultat_2_1;
}


function Addition(){
  var xxxx = document.getElementById("xxxx").value;
  var yyyy = document.getElementById("yyyy").value;
  var resultat_2_2 = xxxx*1 + yyyy*1;
    document.getElementById('resultat_2_2').innerHTML = resultat_2_2;
}

function DivisionEuclidienne(){
var xxxxx = 82;
var yyyyy = 8;
var resultat_3 = xxxxx % yyyyy;
document.getElementById('resultat_3').innerHTML = resultat_3;
}
window.onload = DivisionEuclidienne;

var ex4_result = 0;
document.getElementById('ex4_result').innerHTML = ex4_result;
function plusten(){
ex4_result += 10;
document.getElementById('ex4_result').innerHTML = ex4_result;
}

var ex4_result = 0;
document.getElementById('ex4_result').innerHTML = ex4_result;
function diviseFive(){
ex4_result /= 5;
document.getElementById('ex4_result').innerHTML = ex4_result;
}

var ex4_result = 0;
document.getElementById('ex4_result').innerHTML = ex4_result;
function multiplyHeight(){
ex4_result *= 8;
document.getElementById('ex4_result').innerHTML = ex4_result;
}

var ex4_result = 0;
document.getElementById('ex4_result').innerHTML = ex4_result;
function multiplyHeight(){
ex4_result *= 8;
document.getElementById('ex4_result').innerHTML = ex4_result;
}

var ex4_result = 0;
document.getElementById('ex4_result').innerHTML = ex4_result;
function minusTwo(){
ex4_result -= 2;
document.getElementById('ex4_result').innerHTML = ex4_result;
}

var ex4_result = 0;
document.getElementById('ex4_result').innerHTML = ex4_result;
function minusTwo(){
ex4_result -= 2;
document.getElementById('ex4_result').innerHTML = ex4_result;
}

var ex4_result = 0;
document.getElementById('ex4_result').innerHTML = ex4_result;
function combinePlusTenMinusTwo(){
ex4_result += 10-2;
document.getElementById('ex4_result').innerHTML = ex4_result;
}

var ex4_result = 0;
document.getElementById('ex4_result').innerHTML = ex4_result;
function resetExo4(){
ex4_result = 0;
document.getElementById('ex4_result').innerHTML = ex4_result;
}


  var ex5 = Math.floor(Math.random()*(1000-50)+50); // Math;floor = nombre entier //
  function ex5_result(){
document.getElementById('ex5_result').innerHTML = ex5;
  }
ex5_result(); // la même chose que window.onload = myFunctionName //

  function ex6_result(arg){
arg /= 2;
document.getElementById('ex6_result').innerHTML = arg;
  }
ex6_result(10);

var ex7_result = 0;
  function ex7_resultat(arg1, arg2){
ex7_result = arg1 - arg2;
document.getElementById('ex7_result').innerHTML = ex7_result;
  }
ex7_resultat(10, 5);

var ex8_result_1 = 0;
  function ex8_resultat(arg3, arg4, arg5){
ex8_result_1 = arg3 % arg4;
ex8_result = ex8_result_1 % arg5;
document.getElementById('ex8_result').innerHTML = ex8_result;
  }
ex8_resultat(10, 8, 5);

  function convertToPound(){
var kg = document.getElementById('ex9_input1').value;
var convertToPound = kg * 2.20462;
document.getElementById('ex9_1_result').innerHTML = convertToPound;
  }

  function convertToKg(){
var pound = document.getElementById('ex9_input2').value;
var convertToKg = pound * 0.453591830542594;
document.getElementById('ex9_2_result').innerHTML = convertToKg;
  }

var sentence = "";
function iterateWords(){
  var word = document.getElementById("word").value;
  sentence = sentence + word;
    document.getElementById('sentence').innerHTML = sentence;
}
function resetWords(){
  sentence = "";
    document.getElementById('sentence').innerHTML = sentence;
}

var cote = (Math.random() * (30.00 - 1.00) + 1.00).toFixed(2);
function tiragecote(){
  document.getElementById('cote').innerHTML = cote;
}
tiragecote();

function calculgain(){
  var mise = document.getElementById("mise").value;
  var gain = mise * cote;
    document.getElementById('gain').innerHTML = gain
  }

function convertkmtotemps(){
var km = document.getElementById('ex12_input1').value;
var convertkmtotemps = km / 1000;
document.getElementById('ex12_result').innerHTML = convertkmtotemps;
  }
function converttempstokm(){
var heures = document.getElementById('ex12_input2').value;
var converttempstokm = heures * 1000;
document.getElementById('ex12_result_2').innerHTML = converttempstokm;
  }


/*
function Display(){
  var nb_test = document.getElementById('input-test').value;
  var resultat = eval(nb_test +"+ 1");
  document.getElementById('result-test').innerHTML = resultat;
}*/