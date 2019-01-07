
const expect = require('chai').expect
const zadl = require('..')

describe ('#zadl', function () {
	
	it ('si la palabra termina en ar , se le quitan los doscaracteres', function(){
		const translation = zadl.zadl("Programar")
		expect (translation).to.equal("Program")

	})
	it ('si la palabra inicia con Z, se le añade "pe" al final', function(){
		const translation = zadl.zadl("Zorro")
		const translation2 = zadl.zadl("Zarpar")

		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})
	it ('si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion', function(){
		const translation = zadl.zadl("abecedario")
		expect(translation).to.equal("abece-dario")
	})
	it ('si la palabra original es un palidrimo ninguna regla cuenta y se devuelve la misma palabra intercambiando mayus y min', function(){
		const translation = zadl.zadl("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})

})