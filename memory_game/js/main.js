



var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];



/* -------------------------------------------------- First Function -------------------------------------------------- */



function checkForMatch (){




if(cardsInPlay.length === 2) {




if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
}




else {
  console.log("Sorry, try again.");
}


}

}


/* -------------------------------------------------- Second Function -------------------------------------------------- */



function flipCard(cardId) {




console.log("User flipped "+ cards[cardId] );

cardsInPlay.push(cards[cardId])



checkForMatch();  


}



/* -------------------------------------------------- Validating The Code -------------------------------------------------- */



flipCard(0); flipCard(2);








