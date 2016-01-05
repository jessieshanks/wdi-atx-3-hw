<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



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
=======
=======
>>>>>>> bd5ce8011bfeea0675790c464dd26a2108fb6980
=======
>>>>>>> 28ef0f1ab202eb69d978f75cc7bb8b2a60506f1f
// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays. 
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function deck_o_cards() {
	var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  	var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

	// Create the arrays for the deck, and shuffled deck
	var cards = [];
	// Make 52 card objects and store them in the "cards" array

	// Shuffle the Deck

	// Pull the top card

	// Console log the results
}

// Fisher-Yates Shuffle 
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ec56924331b31579bfe799d7b11473d4c3e2d21b
=======
>>>>>>> bd5ce8011bfeea0675790c464dd26a2108fb6980
=======
>>>>>>> 28ef0f1ab202eb69d978f75cc7bb8b2a60506f1f
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> ec56924331b31579bfe799d7b11473d4c3e2d21b
=======
}
>>>>>>> bd5ce8011bfeea0675790c464dd26a2108fb6980
=======
}
>>>>>>> 28ef0f1ab202eb69d978f75cc7bb8b2a60506f1f
