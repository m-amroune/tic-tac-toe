import React from "react";
import { useState } from "react";
import "../App.css";

function calculateWinner(squares) {
  // All possible winning combinations
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

    // Check if the three squares have the same value
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  // No winner
  return null;
}

const Board = () => {
  // Store the board state (9 squares)
  const [squares, setSquares] = useState(Array(9).fill(""));

  // Check if there is a winner
  const winner = calculateWinner(squares);

  // True = X plays, false = O plays
  const [isXNext, setIsXNext] = useState(true);

  return (
    <div className="squares">
      {squares.map((value, index) => (
        <button
          key={index}
          className="square"
          onClick={() => {
            // Stop game if there is a winner
            if (winner) return;

            const next = [...squares];

            // Put X or O in the clicked square
            next[index] = isXNext ? "X" : "O";

            // Update board and change player
            setSquares(next);
            setIsXNext(!isXNext);
          }}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Board;
