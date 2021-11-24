//model
var tinky = new Audio("audio/tubby_tinky.mp3");
var dipsy = new Audio("audio/tubby_dipsy.mp3");
var laalaa = new Audio("audio/tubby_laalaa.mp3");
var po = new Audio("audio/tubby_po.mp3");
var sun = new Audio("audio/tubby_sun_laugh.mp3");
var logo = new Audio("audio/tubby_logo.mp3");

var eyes = document.createElement('img');
eyes.src = 'img/tubby_tustard.png';
eyes.style.position = 'absolute';
eyes.style.top = '0px';
eyes.style.left = '0px';
eyes.style.display = 'none';
eyes.style.zIndex = '-5';
eyes.style.width = '99vw'

//view
updateView();
function updateView() {
	let html = `
	<img src='img/tubby.png' style='position: absolute; top: 0px; left: 0px; z-index: -10; width: 99vw'/>
	<button onclick="tinky.play()">Tinky Winky</button>
	<button onclick="dipsy.play()">Dipsy</button>
	<button onclick="laalaa.play()">Laalaa</button>
	<button onclick="po.play()">Po</button>
	<button onclick="sun.play()">Sun</button>
	<button onclick="logo.play()">Logo</button>
	<button onclick="updateView()">update</button>
	<button onclick="eyes.style.display = 'none'">Nice</button>
	<button onclick="eyes.style.display = 'block'">Evil</button>`;

	document.getElementById('app').innerHTML = html;
	document.getElementById('app').appendChild(eyes);
}


//controller


window.onload = function() {
	setTimeout(updateView, 100);
}

