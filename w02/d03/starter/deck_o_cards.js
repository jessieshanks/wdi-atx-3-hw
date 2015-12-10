


function Card (valueInput, suitInput) {
//Create a card object
    this.suit = suitInput;
    this.value = valueInput;
}

function deck_o_cards() {
//Create a deck of cards
	var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  	var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    var newDeck = [];
    for (i=0; i<suits.length; i++) {
        for (j=0; j<values.length; j++) {
            newDeck.push(new Card(values[j],suits[i]));
        }
    }
    return shuffle(newDeck);
}


var cards = deck_o_cards();
console.log("The deck has "+cards.length+" cards");

var topCard = cards.pop();
console.log("The top card is the "+topCard.value+" of "+topCard.suit);




function cardDisplay (card) {
//Show one card on console log
    console.log (card.value+" of "+card.suit);
}

function deckDisplay (deck) {
//Show deck of cards on console log
    for (i=0; i<deck.length; i++)
        cardDisplay(deck[i]);
}




// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}