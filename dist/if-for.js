"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = zadl;

function zadl(str) {
  var translation = str; // si la palabra termina en ar , se le quitan los doscaracteres 

  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  } // si la palabra inicia con Z, se le añade "pe" al final


  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  } // si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion


  var largo = translation.length;

  if (largo >= 10) {
    var firstHalf = translation.slice(0, Math.round(largo / 2));
    var secondHalf = translation.slice(Math.round(largo / 2));
    translation = "".concat(firstHalf, "-").concat(secondHalf);
  } // si la palabra original es un palidrimo ninguna regla cuenta y se devuelve la misma palabra intercambiando mayus y min


  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;

    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}

console.log(zadl('sometemos'));
console.log(zadl('abecedario'));
console.log(zadl("Zarp"));