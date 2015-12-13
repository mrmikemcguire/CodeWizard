var clickedTime; var createdTime; var reactionTime; var repeat;

createdTime=Date.now();
var family = ["Dad", "Mom", "Megan", "Nathan", "Emy", "Riona", "Sundae"];
var targetName = family[Math.floor(Math.random() * family.length)];
var target = document.getElementById(targetName);
$(".familyMember").append(targetName + ".");

target.onclick=function() 
	{
	clickedTime=Date.now();
	reactionTime=(clickedTime-createdTime)/1000;
	document.getElementById("time").innerHTML=reactionTime;
	clearInterval(repeat);
    var congrats = document.getElementById("congrats");
	congrats.innerHTML = "Well done!"; 
	};

jump();

function jump()
	{
	window_Height = window.innerHeight;
	window_Width = window.innerWidth;
	availSpace_V = window_Height - 100;
	availSpace_H = window_Width - 100;
	var changeInterval = 1500; 
	repeat = setInterval(moveImages, changeInterval);
	}

function moveImages()
	{	
	pic  = document.getElementById("Dad");
	pic2 = document.getElementById("Mom");
    pic3 = document.getElementById("Megan");
	pic4 = document.getElementById("Nathan");
	pic5 = document.getElementById("Emy");
	pic6 = document.getElementById("Riona");
	pic7 = document.getElementById("Sundae");

		
	var randomV = Math.round(Math.random() * availSpace_V) + 150;
	var randomH = Math.round(Math.random() * availSpace_H);
	pic.style.top = randomV + "px";
	pic.style.left = randomH + "px";
		
	var randomV = Math.round(Math.random() * availSpace_V) + 150;
	var randomH = Math.round(Math.random() * availSpace_H);
	pic2.style.top = randomV + "px";
	pic2.style.left = randomH + "px";
		
	var randomV = Math.round(Math.random() * availSpace_V) + 150;
	var randomH = Math.round(Math.random() * availSpace_H);
	pic3.style.top = randomV + "px";
	pic3.style.left = randomH + "px";
		
	var randomV = Math.round(Math.random() * availSpace_V) + 150;
	var randomH = Math.round(Math.random() * availSpace_H);
	pic4.style.top = randomV + "px";
	pic4.style.left = randomH + "px";
		
	var randomV = Math.round(Math.random() * availSpace_V) + 150;
	var randomH = Math.round(Math.random() * availSpace_H);
	pic5.style.top = randomV + "px";
	pic5.style.left = randomH + "px";
		
	var randomV = Math.round(Math.random() * availSpace_V) + 150;
	var randomH = Math.round(Math.random() * availSpace_H);
	pic6.style.top = randomV + "px";
	pic6.style.left = randomH + "px";
        
    var randomV = Math.round(Math.random() * availSpace_V) + 150;
	var randomH = Math.round(Math.random() * availSpace_H);
	pic7.style.top = randomV + "px";
	pic7.style.left = randomH + "px";
	}