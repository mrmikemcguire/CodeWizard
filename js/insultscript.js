var insult = document.getElementById("button");
 
insult.addEventListener("click", function()
	{
	var insult1 = ["artless", "bawdy", "beslubbering", "bootless", "churlish", "cockered", "clouted",
"craven", "currish", "dankish", "dissembling", "droning", "errant", "fawning",
"fobbing", "froward", "frothy", "gleeking", "goatish", "gorbellied", "impertinent",
"infectious", "jarring", "loggerheaded", "lumpish", "mammering", "mangled", "mewling",
"paunchy", "pribbling", "puking", "puny", "qualling", "rank", "reeky", "roguish",
"ruttish", "saucy", "spleeny", "spongy", "surly", "tottering", "unmuzzled", "vain",
"venomed", "villainous", "warped", "wayward", "weedy", "yeasty"];
	var insult2 = ["base-court", "bat-fowling", "beef-witted", "beetle-headed", "boil-brained",
"clapper-clawed", "clay-brained", "common-kissing", "crook-pated", "dismal-dreaming",
"dizzy-eyed", "doghearted", "dread-bolted", "earth-vexing", "elf-skinned", "fat-kidneyed",
"fen-sucked", "flap-mouthed", "fly-bitten", "folly-fallen", "fool-born",  "full-gorged",
"guts-griping", "half-faced", "hasty-witted", "hedge-born", "hell-hated", "idle-headed",
"ill-breeding", "ill-nurtured", "knotty-pated",	 "milk-livered", "motley-minded",
"onion-eyed", "plume-plucked", "pottle-deep", "pox-marked", "reeling-ripe", "rough-hewn",
"rude-growing", "rump-fed", "shard-borne", "sheep-biting", "spur-galled", "swag-bellied",
"tardy-gaited", "tickle-brained", "toad-spotted", "unchin-snouted", "weather-bitten"];
	var insult3 = ["apple-john", "baggage", "barnacle", "bladder", "boar-pig", "bugbear", "bum-bailey",
"canker-blossom", "clack-dish", "clotpole", "coxcomb", "codpiece", "death-token",
"dewberry", "flap-dragon", "flax-wench", "flirt-gill", "foot-licker", "fustilarian",
"giglet", "gudgeon", "haggard", "harpy", "hedge-pig", "horn-beast", "hugger-mugger", "joithead",
"lewdster", "lout", "maggot-pie", "malt-worm", "mammet", "measle", "minnow", "miscreant",
"moldwarp", "mumble-news", "nut-hook", "pigeon-egg", "pignut", "puttock", "pumpion",
"ratsbane", "scut", "skainsmate", "strumpet", "varlet", "vassal", "whey-face", "wagtail"];
	
	var num1 = Math.floor((Math.random() * insult1.length));
	var num2 = Math.floor((Math.random() * insult2.length));
	var num3 = Math.floor((Math.random() * insult3.length));
    
	var word = insult1[num1];
	var letter = word.substring(0,1);
	switch(letter)
		{
		case "a":
		case "e":
		case "i":
		case "o":
		case "u": 
			insult.innerHTML = "<h2>Thou art an " + 
				insult1[num1] + ", " + insult2[num2] + " " + insult3[num3] + "!</h2>";
			break;
		default:
			insult.innerHTML = "<h2>Thou art a " + 
				insult1[num1] + ", " + insult2[num2] + " " + insult3[num3] + "!</h2>";
		}
	});



