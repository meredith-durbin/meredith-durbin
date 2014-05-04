var MMPhraseGenerator = {
	phrase				: function() {
		return 	"Assuming " +
				this.object()  + " " + 
				this.assumption() + ", " + 
				this.verb() + " " + 
				this.thing1() + " " +
				this.article() + " " +
				this.thing2() + ".";
	},

	object				: function() {
		return this.randomItemFrom(this.objects);
	},
	assumption				: function() {
		return this.randomItemFrom(this.assumptions);
	},	
	verb				: function() {
		return this.randomItemFrom(this.verbs);
	},	
	thing1			: function() {
		return this.randomItemFrom(this.derive);
	},
	article			: function() {
		return this.randomItemFrom(this.stuff);
	},
	thing2			: function() {
		return this.randomItemFrom(this.useless);
	},
	randomItemFrom		: function(array) {
		return array[(this.randomNumber(0, (array.length - 1) ))];
	},
	randomNumber		: function(minNumber, maxNumber) {
		
		if ( minNumber > maxNumber ) {
	        minNumber								= 1;
	        maxNumber								= 10;
		}

	    var randomNumber							= (Math.floor(Math.random() * maxNumber)) + minNumber;
	    return randomNumber;
	},
	isHeads 			: function() {
		flip										= this.randomNumber(0, 1);
		return flip == 1;
	},
	objects 				: [
			"dark matter",
			"dark energy",
			"a pulsar",
			"magnetic fields",
			"the Milky Way",
			"the Local Group",
			"the Virgo Supercluster",
			"the Coma cluster",
			"the Abell cluster",
			"the universe",
			"a spiral galaxy",
			"an elliptical galaxy",
			"a magnetar",
			"a gamma-ray burst",
			"the CMB",
			"a quasar",
			"a blazar",
			"NGC " + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9),
			"Messier " + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9),
			"the ISM",
			"the IGM",
			"the IMF",
			"a Cepheid variable",
			"an RR Lyrae variable",
			"an eclipsing binary",
			"a globular cluster",
			"an open cluster",
			"a supernova shock wave",
			"line-of-sight extinction",
			"optical depth",
			"the Hubble constant",
			"a main sequence star",
			"a red giant",
			"the mass-to-light ratio",
			"the Sun"
		],
	assumptions 				: [
			"has uniform density",
			"is spherically symmetric",
			"is cylindrically symmetric",
			"has planar symmetry",
			"is 70 km/s/Mpc",
			"is spatially flat",
			"is pure hydrogen",
			"is one-dimensional",
			"is two-dimensional",
			"is a constant",
			"is Newtonian",
			"is linear",
			"is a blackbody",
			"is in hydrostatic equilibrium",
			"is of solar metallicity",
			"is one solar mass",
			"is one solar luminosity",
			"is adiabatic"
		],
	verbs 				: [
			"derive",
			"calculate",
			"infer",
			"estimate",
			"determine",
			"work out",
			"find"
		],
	derive 				: [
			"a formula for",
			"an expression for",
			"an equation for",
			"",
			"",
		],
	stuff				: [
			"the",
			"its",
			""
	],
	useless 			: [
			"average orbital radius",
			"absolute bolometric magnitude",
			"period-luminosity relation",
			"surface flux",
			"luminosity function",
			"IMF",
			"line-of-sight extinction",
			"redshift",
			"radial velocity",
			"proper motion",
			"relativistic kinetic energy",
			"angular momentum",
			"focal length",
			"surface gravity",
			"Heisenberg uncertainty principle",
			"Stefan-Boltzmann equation",
			"optical depth",
			"Kelvin–Helmholtz timescale",
			"apparent magnitude",
			"magnetic field strength"	
				]
};


