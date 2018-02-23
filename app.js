var fortunesList= [
	"you'll lose a hand",
	"you'll lose a foot",
	"something unexpected is coming",
	"the last fortunue was a lie",
	"the next fortune is a lie"
];
console.log(fortunesList);

function generateFortuneCookie() {
	fortune = Math.floor((Math.random() * fortunesList.length));

document.getElementById("fortune-cookie-text").innerHTML = fortunesList[fortune];

var h =document.createElement("li");
var t = document.createTextNode(fortunesList[fortune]);
h.appendChild(t);






}