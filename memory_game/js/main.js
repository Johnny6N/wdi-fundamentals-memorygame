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
		cardImage: "images/king-of-hearrts.png",

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
		alert("You found a match!");
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again!");
		alert("Sorry, try again.");
	}
}
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();
}
};
flipCard(0);
flipCard(2);
