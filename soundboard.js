//model
var tinky = new Audio("audio/tubby_tinky.mp3");
tinky.volume = 0.25;
var dipsy = new Audio("audio/tubby_dipsy.mp3");
dipsy.volume = 0.25;
var laalaa = new Audio("audio/tubby_laalaa.mp3");
laalaa.volume = 0.25;
var po = new Audio("audio/tubby_po.mp3");
po.volume = 0.25;
var sun = new Audio("audio/tubby_sun_laugh.mp3");
sun.volume = 0.75;
var logo = new Audio("audio/tubby_logo.mp3");
logo.volume = 0.25
var theme = new Audio("audio/tubby_theme.mp3");
theme.volume = 1;
var no = new Audio("audio/tubby_no.mp3");
no.volume = 0.5;

var state = 0;
var pauseDisplay = "hidden";



var eyes = document.createElement('img');
eyes.src = 'img/tubby_tustard.png';
eyes.style.position = 'absolute';
eyes.style.top = '0px';
eyes.style.left = '0px';
eyes.style.opacity = '0';
eyes.style.zIndex = '-5';
eyes.style.width = '99vw'

//view
updateView();
function updateView() {
	//<button onclick="logo.play()">Logo</button>
	//<button onclick="updateView()">update</button>
	//<button onclick="eyes.style.visibility = 'none'">Nice</button>
	//<button onclick="eyes.style.display = 'block'">Evil</button>
	let html = `
	<img src='img/tubby.png' style='position: absolute; top: 0px; left: 0px; z-index: -10; width: 99vw'/>
	
	
	<svg width="20vw" height="50vw" style="position: absolute; top: 13vw;	left: 26vw;">
		<circle
			onclick="tinky.play(); playTheme(0)"
			cx="5vw"
			cy="5vw"
			r="5vw"
			stroke="black"
			stroke-width="0"
			fill="transparent"
		/>
		<rect
			onclick="tinky.play(); playTheme(0)"
			y="5vw"
			width="10vw"
			height="15vw"
			style="fill: transparent; stroke-width: 0; stroke: rgb(2, 2, 2)"
		/>
	</svg>

	<svg width="20vw" height="50vw" style="position: absolute; top: 13vw;	left: 42vw;">
		<circle
			onclick="dipsy.play(); playTheme(1)"
			cx="5vw"
			cy="5vw"
			r="5vw"
			stroke="black"
			stroke-width="0"
			fill="transparent"
		/>
		<rect
			onclick="dipsy.play(); playTheme(1)"
			y="5vw"
			width="10vw"
			height="15vw"
			style="fill: transparent; stroke-width: 0; stroke: rgb(2, 2, 2)"
		/>
	</svg>

	<svg width="20vw" height="50vw" style="position: absolute; top: 10vw;	left: 54vw;">
		<circle
			onclick="laalaa.play(); playTheme(2)"
			cx="5vw"
			cy="5vw"
			r="5vw"
			stroke="black"
			stroke-width="0"
			fill="transparent"
		/>
		<rect
			onclick="laalaa.play(); playTheme(2)"
			y="5vw"
			width="10vw"
			height="18vw"
			style="fill: transparent; stroke-width: 0; stroke: rgb(2, 2, 2)"
		/>
	</svg>

	<svg width="20vw" height="50vw" style="position: absolute; top: 17vw;	left: 66vw;">
		<circle
			onclick="po.play(); playTheme(3)"
			cx="4vw"
			cy="4vw"
			r="4vw"
			stroke="black"
			stroke-width="0"
			fill="transparent"
		/>
		<rect
			onclick="po.play(); playTheme(3)"
			y="5vw"
			width="8vw"
			height="12vw"
			style="fill: transparent; stroke-width: 0; stroke: rgb(2, 2, 2)"
		/>
	</svg>

	<svg width="20vw" height="50vw" style="position: absolute; top: 2vw;	left: 83.5vw;">
		<circle
			onclick="sun.play(); stopMurder()"
			cx="5.5vw"
			cy="5.5vw"
			r="5.5vw"
			stroke="black"
			stroke-width="0"
			fill="transparent"
		/>
	</svg>

	<svg width="22vw" height="50vw" style="position: absolute; top: 2vw;	left:2vw;">
		<ellipse
			onclick="logo.play()"
			cx="11vw"
			cy="5.5vw"
			rx="11vw"
			ry="5.5vw"
			stroke="black"
			stroke-width="0"
			fill="transparent"
		/>
	</svg>

	<img src="img/pause_button.png" onclick="murderTubbies()" style="visibility: ${pauseDisplay}; position: absolute; left: 45vw; top: 38vw; width: 10vw; height: 10vw; image-rendering: pixelated;"/>
	`

		;

	document.getElementById('app').innerHTML = html;
	document.getElementById('app').appendChild(eyes);
}


//controller

function playTheme(tubbyID) {
	console.log(state, tubbyID);
	if (state == 0) {
		if (tubbyID == 0) state = 1;
		else state = 0;
	}

	else if (state == 1) {
		if (tubbyID == 1) state = 2;
		else state = 0;
	}

	else if (state == 2) {
		if (tubbyID == 2) state = 3;
		else state = 0;
	}

	else if (state == 3) {
		if (tubbyID == 3) {
			state = 0;
			theme.currentTime = 0;
			theme.play();
			pauseDisplay = "visible";

			updateView();
		}
		else state = 0;
	}
}

function murderTubbies() {
	pauseDisplay = "hidden";
	theme.pause();
	no.play();

	let transitionTime = 1986;
	for(let i = 0; i < transitionTime; i++){
		setTimeout(function(){
			eyes.style.opacity = `${i/transitionTime}`;
			updateView();
		}, i);
	}
}

function stopMurder(){
	let transitionTime = 2664;
	for(let i = 0; i < transitionTime; i++){
		setTimeout(function(){
			eyes.style.opacity = `${1 - (i/transitionTime)}`;
			updateView();
		}, i);
	}
}

window.onload = function () {
	setTimeout(updateView, 100);
}