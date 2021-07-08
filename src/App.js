import React, { useState} from "react";
import "./App.css";

const Game = (props) => {
  debugger
  const players = props.players;
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);
  const [removedPins, setRemovedPins] = useState([]);
  const [pinsSelected, setPinsSelected] = useState([]);

  const totalPins = 10;

  const getNextPlayer = () => {
    let nextPlayer;
    nextPlayer = players.indexOf(currentPlayer);
    const togglePlayer = nextPlayer === 0 ? 1 : 0;
    console.log('nextPlayer', togglePlayer, nextPlayer, currentPlayer)
    setCurrentPlayer(players[togglePlayer])
  }

  const pinWasSelected = (pinNumber) => {
    if (removedPins.includes(pinNumber)) {
      return;
    } else if (pinsSelected.includes(pinNumber)) {
      setPinsSelected(pinsSelected.filter(pin => pin !== pinNumber));
    } else if (pinsSelected[0]) {
      console.log('pinsSelected', pinsSelected[0], pinNumber, removedPins)

      if (pinsSelected[0] + 1 === pinNumber) {
         return setPinsSelected(pinsSelected.concat(pinNumber))
      }  else if (pinsSelected[0] - 1 === pinNumber) {
        return setPinsSelected(pinsSelected.concat(pinNumber));
      }
    } else if (pinsSelected.length >= 2) {
      return;
    } else {

      setPinsSelected(pinsSelected.concat(pinNumber))
    }
  }

  const playTurn = () => {
    if (pinsSelected.length < 1) {
      return;
    }
    setRemovedPins(removedPins.concat(pinsSelected))
    console.log('duh', removedPins)
    getNextPlayer()
    setPinsSelected([])
    checkGame()
  }

  const checkGame = () => {
    console.log('check', removedPins.length, totalPins)
    if (removedPins.length === totalPins - 1) {
      debugger;
      props.gameCompleted(currentPlayer);
    }
  }

  return (
    <div className="container" >
      <h2>
        Player {players[0]} vs. Player {players[1]}
      </h2>
      <div className="game-box">
      {console.log('CURRENT', currentPlayer)}
        <h3>Players {currentPlayer}'s turn</h3>
      </div>
      <div className="Game">
        {Array(totalPins)
          .fill()
          .map((_pin, pinNumber) => {
            pinNumber = pinNumber + 1;
            return <div className={`Pin ${
              pinsSelected.includes(pinNumber)
                ? 'pin-selected'
                : removedPins.includes(pinNumber)
                ? 'removed'
                : ''}`}
            key={pinNumber}
            onClick={() => {
              pinWasSelected(pinNumber)
            }}>
        </div>

    })}
      </div>
      <button onClick={playTurn}>Done</button>
    </div>
  );
}

const PlayerSelection = () => {
  const remainingArr = Array(8).fill('').map((player, idx) => player = idx + 1);
  const [remaining, setRemaining] = useState(remainingArr);
  const [selectedPlayers, setSelectedPlayers] = useState([remaining.shift(), remaining.shift()]);
  const selectPlayer = (player = 1) => {
    if (selectedPlayers.length === 2) {
      return;
    }
    const newPlayerSelection = [player, remaining.shift()];
    setRemaining(remaining);
    return newPlayerSelection;
  }

  const gameCompleted = (winner) => {
    console.log(`Player ${winner} won this round`, remaining);
    debugger;
    // setRemaining(remaining.unshift(winner))
    console.log('Winning', remaining)
    setSelectedPlayers(selectPlayer(winner));

  }

  return (
    <div className="players">
      <div>
        {remaining.map((player, index) => {
          console.log('mapper', player)
          return <div className={`Player `}
          key={player}>
            {player}
          </div>
        })}
      </div>
      {
        <Game gameCompleted={gameCompleted}
          players={selectedPlayers}
          />
      }
    </div>
  )
}

const App = () => {

  return (
    <div className="App">
      <h1 className="header">
        Kayles
      </h1>
      <PlayerSelection />
    </div>
  )
}

export default App;
