var pasta = {
	noodle: prompt("What kind of noodles would you like?"),
	noodlesBoiled: false,
	sauce: prompt("What kind of sauce would you like?"),
}

var meat = {
	meat: confirm("Meat?"),
	meatTemp: 30;
}

// heat up water, boil noodles (10 minutes)
// cook noodles (10 minutes)
function cookNoodles() {
	var waterTemp;

	for (var i = 70; i <= 212; i++){
		waterTemp = waterTemp + i;
	}
	if (waterTemp == 212) {
		//add "pasta"
		pasta.noodlesBoiled = true;
	}
	return pasta.noodlesBoiled;
}

// heat up a pan (6min)
// cook some meat (10min)
function brownMeat() {
	var panHeat;
	for (i = 70; i <= 330; i++){
		panHeat = panHeat + i
	}
	if (panHeat == 330) {
		//add meat
		for (j = 30; j <= 160; j++){
			meat.meatTemp = meat.meatTemp + j;
		}
	}
	return meat.meatTemp;
}

function flavorTown () {
	var plate = {
		//meat
		//pasta
	}
	console.log("Guy Fieri: 'Dude this pasta is so good'");
	return plate = goodEats;
}

cookNoodles(); // (20 min)

brownMeat(); // (16 mins)

// 36 minutes to cook

flavorTown(); // plate everything
































/**
 * Recipe:
 *
 * Boil some pasta and head up some pasta sauce
 * add a cooked onion to the sauce once it is heated and let simmer
 */

function addPastaToBoilingWater(nextStep) {
  // after the pasta is cooked
  nextStep();
}

function drainAndPlatePasta() {

}

function chopAnOnion() {

}

function boilWater(doSomethingWithboilingWater) {
  // boil some water (this takes a while)
  doSomethingWithboilingWater();
}

boilWater(addPastaToBoilingWater);

// synchronous approach
boilWater();
addPastaToBoilingWater();
drainAndPlatePasta();
chopAnOnion();
heatSauce();
addOnionsToSauce();
