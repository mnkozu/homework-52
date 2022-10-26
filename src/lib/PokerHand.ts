import Card from "./Card";
import CardDeck from "./CardDeck";

class Pokerhand {
  sortedCards: {};
  constructor(public cards: Card[]) {

    this.sortedCards = this.cards.sort((card1, card2) => {
      return this.getPankWeight(card1.rank) -this.getPankWeight(card2.rank);
    })
    console.log(this.sortedCards)
  }

   getPankWeight(rank:string) {
    return CardDeck.RANKS.indexOf(rank);
  }

  // getOutCome() {
  //   const suits: string[] = [];
  //   const ranks: string[] = [];
  //
  //   for (let card in this.sortedCards) {
  //     suits.push(card.suit);
  //     ranks.push(card.rank);
  //   }
  // }

  getOutCome() {
    const suits = new Set();
    const ranks: [] = [];
    const ranksFreq: {} = {};

    // @ts-ignore
    for (let card of this.sortedCards) {
      suits.add(card.suit);
      // @ts-ignore
      ranks.push(card.rank);
      // @ts-ignore
      if(ranksFreq[card.rank]) {
        // @ts-ignore
        ranksFreq[card.rank]++
      } else {
        // @ts-ignore
        ranksFreq[card.rank] = 1;
      }
    }

    let threes = null;
    const pairs:string[] = [];
    let four = null;

    for (let rank in ranksFreq) {
      // @ts-ignore
      if (ranksFreq[rank] === 4) {
        four = rank;
      }
      // @ts-ignore
      if (ranksFreq[rank] === 3) {
        threes = rank;
      }
      // @ts-ignore
      if (ranksFreq[rank] === 2) {
        pairs.push(rank);
      }
    }

    let straight = true;
    // @ts-ignore
    for (let i = 0; i < CardDeck.RANKS - 4; i++) {
        straight = true;

        for (let j = 0; j < ranks.length; j++) {

          if (j === (ranks.length - 1) && ranks[ranks.length - 1] === "A") {
            straight = true;
            break;
          }

          if (ranks[j] !== CardDeck.RANKS[j + i]) {
            break;
          }

          if (straight) break;
        }

        if (straight) break;
    }

    let outcome = null;

    if (straight && ranks[0] === "10" && suits.size === 1) {
      outcome = 'Роял-флеш'
    } else if (straight && suits.size === 1) {
      outcome = 'Стрит-флеш'
    } else if (four) {
      outcome = 'Каре/Четвёрка/Покер' + four;
    } else if (threes && pairs.length === 1) {
      outcome = `Фулл-хаус (${threes}, ${pairs[0]})`;
    } else if (suits.size === 1) {
      outcome = 'Флеш';
    } else if (threes) {
      outcome = `Тройка ${threes}`;
    } else if (pairs.length === 2) {
      outcome = `Две пары (${pairs[0]}, ${pairs[1]})`;
    } else if (pairs.length === 1) {
      outcome = `Одна  пара ${pairs[0]}`;
    }

    return outcome;
  }
};


export default Pokerhand;