import React from 'react';

interface PropsType {
  suit: string;
  rank: string;
}

const CardView: React.FC<PropsType> = props => {

  const classCard = "card rank-" + props.rank.toLowerCase() + " " + props.suit;

  const symbol = (suit: string) => {
    switch (suit) {
      case "diams":
        return "♦";
      case "hearts":
        return "♥";
      case "spades":
        return "♠";
      case "clubs":
        return "♣";
      default:
        return null;
    }
  };

  return (
        <div className={classCard}>
          <span className="rank">{props.rank}</span>
          <span className="suit">{symbol(props.suit)}</span>
        </div>
    );
}

export default CardView;