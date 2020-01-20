let cards = [
	{
		rank: "Queen",
		suit: "Hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "Queen",
		suit: "Diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "King",
		suit: "Hearts",
		cardImage: "images/king-of-hearts.png",

	},
	{
		rank: "King",
		suit: "Diamonds",
		cardImage: "images/king-of-diamonds.png",
	}
];

let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else { 
		(cardsInPlay[0] != cardsInPlay[1]) 
		alert('Sorry, try again!')
	}
};

function flipCard() {
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	
	if (cardsInPlay.length === 2) {
	checkForMatch();
	console.log('User flipped ' + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	}
};

function createBoard() {
	
	for (let i=0; i < cards.length; i++) {
let cardElement = document.createElement('img');
cardElement.setAttribute('src', "images/back.png");
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('click', flipCard);
document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

function refreshPage() {

}