import { InfectionCard } from "./infection-card";

export class InfectionDiscardPile {

  public cards: InfectionCard[] = [];

  constructor() {}

  public add(card: InfectionCard): void {
    this.cards.push(card);
  }

  public drop(): InfectionCard[] {
    return this.cards.splice(0);
  }
}
