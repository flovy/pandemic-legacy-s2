import { InfectionCity } from "./infection-city";
import { InfectionSubDeck } from "./infection-sub-deck";

export class InfectionDeck {

  constructor(public subDecks: InfectionSubDeck[] = [], public numberOfEpidemic: number = 0, public name: string = "Deck" ){
  }

  public addNewSubDeck(cities: InfectionCity[]): void {
    this.numberOfEpidemic++;
    this.subDecks.unshift(new InfectionSubDeck(cities, this.numberOfEpidemic));
  }

}
