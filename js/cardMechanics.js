shuffle(deck);
$('#sound')[0].play();
var z = 1;
var card = "<img src='images/classic-cards/blueVertFull.png'>";
var drawPile = "<img class='drawPile' src='images/classic-cards/redVertFull.png'>";
var $drawPile =  $('.drawPile');
var dealerHand = new Array();
var playerHand = new Array();

function cardAlert (clickEvent) 
	{
  	var $card, data;
  	$card = $(clickEvent.target);
  	//data = $card.data('card');
//  	alert(data.rank + " of " + data.suit);
    $card.addClass('played');
    $card.removeClass('in-d-hand');
    $card.removeClass('in-p-hand');
    $card.css('left', 200);
	$card.css('z-index', z);
	z ++;
	}

$drawPile.on('click', function()
    {
    alert("The drawPile was clicked.");
    if(playerTurn)
        {
        playerHand.push(deck[0]);
        deck.splice(0, 1);
        }
    else
        {
        dealerHand.push(deck[0]);
        deck.splice(0, 1);
        }
    });

$('#deal').click(function()
    {
    numberOfCards = $('#numberOfCards').val();
    var table = $('#table');

    for(var i = 0; i < numberOfCards; i++)
        {
        dealerHand.push(deck[0]);
        deck.splice(0, 1);
        playerHand.push(deck[0]);
        deck.splice(0, 1);
        }

    dealerHand = dealerHand.sort(bySuitAndThenRank);
    playerHand = playerHand.sort(bySuitAndThenRank);var $drawPile =  $(drawPile);

    var newDealerLeft = 180;
    for(var i = 0; i < numberOfCards; i++)
        {
        $('#table').append(card);
        var cardObj = table.children().get(i);
        $(cardObj).addClass('card');
        $(cardObj).addClass('in-d-hand');
        var dealerCardFace = dealerHand[i].face;
        $(cardObj).attr('src', dealerCardFace);
        $(cardObj).attr('data-card', JSON.stringify(dealerHand[i]));
        dealerCardValue = dealerHand[i].value;
        $(cardObj).css('left', newDealerLeft);
        $(cardObj).click(cardAlert);
        newDealerLeft += 12;
        }

    newPlayerLeft = 180;
    var counter = 0;

    for(var j = numberOfCards; j < numberOfCards * 2; j++)
        {
        $('#table').append(card);
        var cardObj = table.children().get(j);
        $(cardObj).addClass('card');
        $(cardObj).addClass('in-p-hand');
        var playerCardFace = playerHand[counter].face;
        $(cardObj).attr('src', playerCardFace);
        $(cardObj).attr('data-card', JSON.stringify(playerHand[counter]));
        playerCardValue = playerHand[counter].value;
        $(cardObj).css('left', newPlayerLeft);
        $(cardObj).click(cardAlert);
        counter++;
        newPlayerLeft += 12;
        }
    });
          
function shuffle(array) 
	{
  	var currentIndex = array.length, temporaryValue, randomIndex ;

  	while (0 !== currentIndex) 
		{
    	randomIndex = Math.floor(Math.random() * currentIndex);
    	currentIndex -= 1;
    	temporaryValue = array[currentIndex];
    	array[currentIndex] = array[randomIndex];
    	array[randomIndex] = temporaryValue;
  		}
  	return array;
	};

function bySuitAndThenRank(cardA, cardB)
    {
    if (cardA.suit > cardB.suit)
        {
        return 1;
        }
    if (cardA.suit < cardB.suit)
        {
        return -1;
        }
    if (cardA.value > cardB.value)
        {
        return 1;
        }
    if (cardA.value < cardB.value)
        {
        return -1;
        }
    return 0;
    }
