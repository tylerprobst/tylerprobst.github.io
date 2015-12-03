
//Make death metal gofish interface with looping death metal backround music **pinky**

//HW: look into javascript and jquery!! learn about dom methods---->
//HW: ---->(document methods "W3 schools or codecademy" look up on adding and removing listeners)

//HW: who asked who for what! div for messages that will display(add to the innerHTML and then remove) most recent on top

//hw: jQuery(read docs), look specifically for: animate, css, clone, *closest*, data, delegate, html, append, val, prepend, click(for programitcally clicking something)
// use $ in front of jQuery objects
//add a ul tag for books 
//add start button
//make it to where players cannot select themselves
//add better organization and better avatars 
//find a way to make an actual pile of cards in the middle instead of them lined up so nicely



var goFish = (function () {

	var Game = function (deck) {
		this.deck = deck;
		this.deck.shuffle();
		
		this.fishbowl = new FishBowl(this.deck);
		this.players = makePlayers(this.deck, this);


	};
	
	Game.prototype.gameOver = function () {
		for (var i in this.players) {
			if (this.players[i].hand.length){
				return false;
			}
		}
		return true;
	};
	

	Game.prototype.start = function () {
		this.currentPlayerIdx = 0;
		this.render();
		this.players[this.currentPlayerIdx].go()

	};

	Game.prototype.next = function () {
		this.currentPlayerIdx++;
		if (this.currentPlayerIdx === this.players.length) {
			this.currentPlayerIdx = 0; 
		}
		if (!this.gameOver()) {
			this.render();
			this.players[this.currentPlayerIdx].go();
		}
		else {
			this.render();
			message("Game OVER!");
		}


	};

	Game.prototype.render = function () {
		var myCards        = document.getElementById('my-cards'),
			twoCards       = document.getElementById('two-cards'),
			twoCardsString = '',
			threeCards       = document.getElementById('three-cards'),
			threeCardsString = '',
			fourCards       = document.getElementById('four-cards'),
			fourCardsString = '',
			cardString     = '',
			hand       	   = this.players[0].hand,
			fishbowl   	   = document.getElementById('fishbowl'),
			fishbowlString = '',
			self 		   = this;

		for (var i in hand) {
			cardString += '<span class="my-card" card-idx="' + i + '">' + hand[i].unicode + '</span>';
		}
		myCards.innerHTML = cardString;

		for (var i in this.fishbowl.deck.cards) {
			fishbowlString += '<span class="fishbowl-card" card-idx="' + i + '">&#x1f0a0;</span>';
		}
		fishbowl.innerHTML = fishbowlString;

		showCards(twoCards, twoCardsString, 1);
		showCards(threeCards, threeCardsString, 2);
		showCards(fourCards, fourCardsString, 3);

		function showCards (docElem, string, playerIdx) {
			for (var i = 0; i < self.players[playerIdx].hand.length; i++) {
				string += '<span>&#x1f0a0;</span>';
			}
			docElem.innerHTML = string;
		}

	};

	var FishBowl = function (deck) {
		this.deck = deck;
	};

	FishBowl.prototype.draw = function (idx) {
		var draw = this.deck.cards.splice(idx, 1);	
		
		return draw[0];
	};

	var Player = function (hand, game) {
		this.hand = hand;
		this.game = game;
		this.books =  [];
		this.turn = {};	 
	};

	Player.prototype.go = function () {
		var self = this;

		this.game.render();
		this.choosePlayer(choosePlayerCallback);
		
		function choosePlayerCallback () {
			self.chooseCard(chooseCardCallback);
		};

		function chooseCardCallback () {
			self.ask(askCallback);

		};

		function askCallback(response) {
			console.log(response)

			if (response.length) {
				self.hand = self.hand.concat(response);
				self.game.render();
				self.makeBooks(); 
				self.go();
			}
			else {
				self.goFish(self.game.next.bind(self.game)); 
			}
		};

	}

	Player.prototype.choosePlayer = function (callback) {
		var self = this; 

		document.addEventListener('click', callbackHelper);
		instructions('Choose a player...');

		function callbackHelper(event) {
			if (event.target.matches('.player')) {
				var index = self.game.currentPlayerIdx;
				self.turn.otherPlayer = self.game.players[event.target.getAttribute('player-idx')];
				
				// if (self.game.players[index] === self.turn.otherPlayer) {
				// 	instructions('Please select a different player.');
				// 	self.turn.otherPlayer = self.game.players[event.target.getAttribute('player-idx')];
				// }

				callback();
				document.removeEventListener('click', callbackHelper);

			}
		}

	}

	Player.prototype.chooseCard = function (callback) {
		var self = this;

		message('Player Chosen');
		instructions('Choose a card...');
		document.addEventListener('click', callbackHelper);
		
		function callbackHelper(event) {   // is event a thing that is made by javascript?
			
			if (event.target.matches('.my-card')) {
				self.turn.card = self.hand[event.target.getAttribute('card-idx')];
				callback();
				document.removeEventListener('click', callbackHelper);
			}
		}
	}

	Player.prototype.ask = function (callback) {  
		var response = [],
			card     = this.turn.card, 
			hand 	 = this.turn.otherPlayer.hand;

		message('Card Chosen');
		 
		for (var i = hand.length - 1; i >= 0; i--) {
			if (card.value === hand[i].value) {
				response = response.concat(hand.splice(i, 1));
			}	
		}

		callback(response);
	}

	Player.prototype.makeBooks = function () {
			
			var counts = {},
				card;

			for (var i = 0; i < this.hand.length; i++) {
				card = this.hand[i];
				counts[card.value] = counts[card.value] || 0; 
				counts[card.value]++;	
			}

			for (var i in counts) { 
				if (counts[i] === 4) {
					this.books.push(removeCards(i, this.hand));
				}
			}

			function removeCards(value, hand) {
				var book = []
				for (var i = 0; i < 4; i++) {
					for (var j in hand) {
						if (hand[j].value === parseInt(value)) {
							book.push(hand.splice(j, 1));
						}
					}
				}
				document.getElementById('books').innerHTML += '<p>' + book + '</p>';
				return book;
			}
		};

	Player.prototype.goFish = function (callback) {
		var fishbowl = document.getElementById('fishbowl'),
			self 	 = this;

		if (this.game.fishbowl.deck.cards.length) {
			instructions('Go Fish!');
			fishbowl.addEventListener('click', callbackHelper);
		}
		else {
			callback();
		}


		function callbackHelper (event) {
			if (event.target.matches('.fishbowl-card')) {
				
				var cardIdx = event.target.getAttribute('card-idx'),
					card 	= self.game.fishbowl.deck.cards.splice(cardIdx, 1);
				
				self.hand = self.hand.concat(card);
				
				fishbowl.removeEventListener('click', callbackHelper); 
				callback();
			}
		}
	}

	var CompPlayer = function (hand, game) {
		this.hand  = hand;
		this.game  = game;
		this.books =  [];
		this.turn  = {}; 
	};

	extend(Player, CompPlayer);

	CompPlayer.prototype.choosePlayer = function (callback) {	
		var idx = this.game.currentPlayerIdx;

		while (idx === this.game.currentPlayerIdx) {
			idx = Math.floor(Math.random() * 4);
		}

		this.turn.otherPlayer = this.game.players[idx];
		
		callback();
	};

	CompPlayer.prototype.chooseCard = function (callback) {
		message('player choosen');

		this.turn.card = this.hand[Math.floor(Math.random() * this.hand.length)];
		callback();
	};

	CompPlayer.prototype.goFish = function (callback) {
		var cardIdx = Math.floor(Math.random() * this.game.fishbowl.deck.length),
			card 	= this.game.fishbowl.deck.cards.splice(cardIdx, 1);

		this.hand = this.hand.concat(card); 

		callback();
	};


	return new Game(new deckjs.Deck);

	function message(msg) {
		var messages = document.getElementById('messages');	

		messages.innerHTML = '<p>' + msg + '</p>';
			
	}

	function instructions(msg) {
		var instruction = document.getElementById('instruction');

		instruction.innerHTML = '<p>' + msg + '</p>';
	}

	// function gameLog(msg, askingPlayer, askedPlayer, card) {
	// 	var gameLog = document.getElementById('game-log');

	// 	gameLog.innerHTML = '<p>Player' + askingPlayer +
	// }

	function makePlayers(deck, game) {
		var players = [];
		
		players.push(new Player(deck.deal(5), game));
		players.push(new CompPlayer(deck.deal(5), game));
		players.push(new CompPlayer(deck.deal(5), game));
		players.push(new CompPlayer(deck.deal(5), game));

		return players;
		}

})(); 

document.addEventListener('DOMContentLoaded', function () {
	var startButton = document.getElementById('start');
	
	startButton.addEventListener('click', function () {
		goFish.start();
		startButton.remove();
	});
});