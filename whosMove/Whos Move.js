// Two players - "black" and "white" are playing a game. The game consists of several rounds. 
//If a player wins in a round, he is to move again during the next round. 
//If a player loses a round, it's the other player who moves on the next round. 
//Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

function whoseMove(lastPlayer, win) {
  
   if (lastPlayer === 'white' && win === true) {
     return 'white';
  }
   else if (lastPlayer === 'white' && win === false) {
     return 'black';
  }
   else if (lastPlayer === 'black' && win === true) {
     return 'black';
   }
   else {
     return 'white';
   }
   
 };


//Answer's from other Coders 

//==========================================================================================================================================
function whoseMove(lastPlayer, win) {
  return win?lastPlayer:lastPlayer=="white"?"black":"white"
}
//==========================================================================================================================================
whoseMove = (l, w) => w ? l : l === 'black' ? 'white' : 'black';
//==========================================================================================================================================
function whoseMove(lastPlayer, win) {
  const opp = lastPlayer === 'black' ? 'white' : 'black';
  return  win ? lastPlayer : opp;
}
//==========================================================================================================================================
function whoseMove(lastPlayer, win) {
  return lastPlayer && win ? lastPlayer : {'black':'white','white':'black'}[lastPlayer];
}
//==========================================================================================================================================
function whoseMove(lastPlayer, win) {
if(win)
  return (lastPlayer == "black") ? "black" : "white";

else
  return (lastPlayer == "black") ? "white" : "black";
  
}
//==========================================================================================================================================
function getOppositePlayer(player) {
  return player === 'white' ? 'black' : 'white';
}

function whoseMove(lastPlayer, win) {
  return win ? lastPlayer : getOppositePlayer(lastPlayer);
}
//==========================================================================================================================================
function whoseMove(lastPlayer, win) {
  switch(lastPlayer) {
    case "white":
      switch(win) {
        case true:
          return "white";
          break;
        case false:
          return "black";
          break;
        }
    case "black":
      switch(win) {
        case true:
          return "black";
          break;
        case false:
          return "white";
          break;
      }
  }
  
  
}

//==========================================================================================================================================

function whoseMove(lastPlayer, win) {
  //coding and coding..
  switch (lastPlayer) {
    case "black":
      if(win == true) {
      return "black";
      }else {
      return "white";
    }
      break;
    case "white":
      if(win == true) {
      return "white";
      }else {
      return "black";
      }
      break;
  } 
  
}
