import React from "react";
import { useState } from "react";
import "../App.css";

// Check if there is a winner on the board
function calculateWinner(squares) {
  // All winning combinations
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    // If three squares have the same value, we have a winner
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  // No winner
  return null;
}

const Board = () => {
  // Board state (9 squares)
  const [squares, setSquares] = useState(Array(9).fill(""));

  // Track which player plays next
  const [isXNext, setIsXNext] = useState(true);

  // Check game result
  const winner = calculateWinner(squares);
  const isDraw = squares.every((square) => square !== "") && !winner;

  // Game status message
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "Draw";
  } else {
    status = `Next Player: ${isXNext ? "X" : "O"}`;
  }

  // Reset the game
  function handleReset() {
    setSquares(Array(9).fill(""));
    setIsXNext(true);
  }

  return (
    <div>
      <p>{status}</p>

      <div className="squares">
        {squares.map((value, index) => (
          <button
            key={index}
            className="square"
            onClick={() => {
              // Stop if game is finished
              if (winner || isDraw) return;

              // Ignore click if square is already used
              if (squares[index]) return;

              const next = [...squares];
              next[index] = isXNext ? "X" : "O";

              setSquares(next);
              setIsXNext(!isXNext);
            }}
          >
            {value}
          </button>
        ))}
      </div>

      <button id="reset" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
};

export default Board;
