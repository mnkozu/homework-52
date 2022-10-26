import React, {useState} from 'react';
import CardView from "./СardView/CardView";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import './App.css';
import PokerHand from "./lib/PokerHand";


const App = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const [outcome, setOutcome] = useState<string>();

  const takeCards = () => {
    const cardDeck = new CardDeck();
    const cardsArray = cardDeck.getCards(5);
    const pokerHand = new PokerHand(cardsArray);
    const hand = pokerHand.getOutCome();
    setCards(cardsArray);
    setOutcome(hand);
  }

  const button = <button onClick={takeCards}>Выдача 5 карт</button>

  if (cards.length === 0) {
    return (
      <div>
        {button}
      </div>
    )
  }

  const cardsHtml =  cards.map((card: Card, index: number) => (
      <CardView suit={card.suit} rank={card.rank} key={index}/>
    ));

  return (
      <div className="App">
        <div className="playingCards faceImages">
          <div>{outcome}</div>
          {cardsHtml}
        </div>
        <div>
          {button}
        </div>
      </div>
    );
  }

export default App;
