import { InfectionCard } from "./infection-card";
import { InfectionSubDeck } from "./infection-sub-deck";

export class InfectionDeck {
  private numberOfEpidemic: number = 0;

  public subDecks: InfectionSubDeck[] = [];

  constructor() {
    // default deck
    this.subDecks.unshift(new InfectionSubDeck([], this.numberOfEpidemic));
    this.addInfectionCard("New York", 3);
    this.addInfectionCard("Washington", 3);
    this.addInfectionCard("Jacksonville", 3);
    this.addInfectionCard("Sao Paulo", 3);
    this.addInfectionCard("Londres", 3);
    this.addInfectionCard("Istanbul", 3);
    this.addInfectionCard("Tripoli", 3);
    this.addInfectionCard("Le Caire", 3);
    this.addInfectionCard("Lagos", 3);
  }

  public addInfectionCard(city: string, nb: number): void {
    for(let i = 0; i < nb; i++) {
      this.subDecks[0].cards.push(new InfectionCard(city));
    }
  }

  public addNewSubDeck(cards: InfectionCard[]): void {
    this.numberOfEpidemic++;
    this.subDecks.unshift(new InfectionSubDeck(cards, this.numberOfEpidemic));
  }

}
