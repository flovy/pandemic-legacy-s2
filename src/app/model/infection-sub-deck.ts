import { InfectionCard } from "./infection-card";

export class InfectionSubDeck {

  constructor(public cards :InfectionCard[], public epidemicNumber: number) {
  }

  public draw(card: InfectionCard): InfectionCard {
    for(var i = 0; i < this.cards.length; i++) {
      if(this.cards[i]=== card) {
        return this.cards.splice(i, 1)[0];
      }
    }
  }
}
