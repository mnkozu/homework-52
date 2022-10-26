import Card from "./Card";

class CardDeck {
  static SUITS: string[] = ['hearts', 'clubs', 'spades', 'diams'];
  static RANKS: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  deck: {suit: string,rank: string}[];

  constructor() {
    this.deck = [];
    for (let suit of CardDeck.SUITS) {
      for (let rank of CardDeck.RANKS) {
        let card = new Card(suit, rank);
        this.deck.push(card);
      }
    }
  }

  getCard(): { suit: string; rank: string } {
    const randomIndex = Math.floor(Math.random() * this.deck.length);
    return this.deck.splice(randomIndex, 1)[0];
  }

  getCards(howMany: number): Card[] {
    const cardsHandle: any[] = [];

    for (let i = 0; i < howMany; i++) {
      cardsHandle.push(this.getCard());
    }
    return cardsHandle;
  }
}

export default CardDeck;