/*
You get any card as an argument. Your task is to return a suit of this card.

Our deck (is preloaded):

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
*/

//using chr symbols instead of decoding

function defineSuit(card) {

    let char = card.charAt(card.length - 1);
    
    if (char === "♣") {
      return "clubs";
    }
    else if (char === "♦") {
      return "diamonds";
    }
    else if (char === "♥") {
      return "hearts";
    }
    else {
      return "spades";
    }
  }

  
//-------------------------------------------------------//
//Decoding without chr symbols using URL-encoding
/*
reference for symbols
http://www.javascripter.net/faq/mathsymbols.htm
*/

function defineSuit(card) {

    //encodeURI(chr)
    let spade 	= decodeURI("%E2%99%A0");
    let club  	= decodeURI("%E2%99%A3");
    let hearts 	= decodeURI("%E2%99%A5");	
    let diamond = decodeURI("%E2%99%A6");	

    let char = card.charAt(card.length - 1);
    
    if (char === club) {
        return "clubs";
    }
    else if (char === diamond) {
        return "diamonds";
    }
    else if (char === hearts) {
        return "hearts";
    }
    else {
        return "spades";
    }  
    
}
  
defineSuit("10♣")


//Other answers
//-------------------------------------------------------//

function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
}

//-------------------------------------------------------//

  function defineSuit(card) {
    return {
      '♣' : 'clubs',
      '♦' : 'diamonds',
      '♥' : 'hearts',
      '♠' : 'spades'
    }[card.substr(-1)]
  }

  
//-------------------------------------------------------//

function defineSuit(card) {
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 
}

//-------------------------------------------------------//

defineSuit=([a,b,c])=>({"♣":'clubs',"♠":'spades',"♦":'diamonds',"♥":'hearts'})[c||b]

//-------------------------------------------------------//


defineSuit=c=>({'♣':'clubs','♦':'diamonds','♥':'hearts','♠':'spades'}[c.slice(-1)[0]])

//-------------------------------------------------------//

function defineSuit(card) {
    // good luck
    return deck.indexOf(card) < 13 ? 'clubs' : deck.indexOf(card) < 26 ? 'diamonds' : deck.indexOf(card) < 39 ? 'hearts' : 'spades';
  }