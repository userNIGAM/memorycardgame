import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import card7 from "../assets/card7.png";
import card8 from "../assets/card8.webp";
import card9 from "../assets/card9.webp";
import card10 from "../assets/card10.webp";
import card11 from "../assets/card11.webp";
import card12 from "../assets/card12.webp";

const initialCards = [
  { id: 1, image: card1, matched: false },
  { id: 2, image: card2, matched: false },
  { id: 3, image: card3, matched: false },
  { id: 4, image: card4, matched: false },
  { id: 5, image: card5, matched: false },
  { id: 6, image: card6, matched: false },
  { id: 7, image: card1, matched: false },
  { id: 8, image: card2, matched: false },
  { id: 9, image: card3, matched: false },
  { id: 10, image: card4, matched: false },
  { id: 11, image: card5, matched: false },
  { id: 12, image: card6, matched: false },
  { id: 13, image: card7, matched: false },
  { id: 14, image: card8, matched: false },
  { id: 15, image: card9, matched: false },
  { id: 16, image: card10, matched: false },
  { id: 17, image: card11, matched: false },
  { id: 18, image: card12, matched: false },
  { id: 19, image: card7, matched: false },
  { id: 20, image: card8, matched: false },
  { id: 21, image: card9, matched: false },
  { id: 22, image: card10, matched: false },
  { id: 23, image: card11, matched: false },
  { id: 24, image: card12, matched: false },
];

const shuffleCards = (cards) => {
  return [...cards].sort(() => Math.random() - 0.5);
};

export default function MemoryGame() {
  const [cards, setCards] = useState(shuffleCards(initialCards));
  const [selected, setSelected] = useState([]);

  const handleCardClick = (index) => {
    if (selected.length === 2) return;

    const newSelection = [...selected, index];
    setSelected(newSelection);

    if (newSelection.length === 2) {
      const [first, second] = newSelection;
      if (cards[first].image === cards[second].image) {
        setCards((prev) =>
          prev.map((card, i) =>
            i === first || i === second ? { ...card, matched: true } : card
          )
        );
      }
      setTimeout(() => setSelected([]), 1000);
    }
  };

  return (
    <div className="container text-center mt-4">
      <h2 className="mb-4">Memory Card Game</h2>
      <div className="row justify-content-center">
        <div
          className="col-md-8 d-flex flex-wrap gap-2 justify-content-center"
          style={{ maxWidth: "700px" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card p-2 border rounded text-center d-flex align-items-center justify-content-center bg-secondary`}
              style={{ width: "100px", height: "150px", cursor: "pointer" }}
              onClick={() => handleCardClick(index)}
            >
              {selected.includes(index) || card.matched ? (
                <img
                  src={card.image}
                  alt="card"
                  style={{ width: "90px", height: "140px" }}
                />
              ) : (
                "❓"
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
