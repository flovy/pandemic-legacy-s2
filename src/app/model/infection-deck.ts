import { InfectionCity } from "./infection-city";
import { InfectionSubDeck } from "./infection-sub-deck";

export class InfectionDeck {

  constructor(public subDecks: InfectionSubDeck[] = [], public numberOfEpidemic: number = 0, public name: string = "Deck" ){
  }

  public addNewSubDeck(cities: InfectionCity[]): void {
    this.numberOfEpidemic++;
    this.subDecks.unshift(new InfectionSubDeck(cities, this.numberOfEpidemic));
  }

  public addCityToTop(city: InfectionCity): void {
    this.subDecks[0].add(city.name);
  }

  public moveCityInUpperSubDeck(subDeckIndex: number, city: InfectionCity){
    if(subDeckIndex <= 0) {
      throw new Error("The city is already in the upper subdeck");
    }
    this.subDecks[subDeckIndex].remove(city.name);
    this.subDecks[subDeckIndex-1].add(city.name);
  }

  public moveCityInLowerSubDeck(subDeckIndex: number, city: InfectionCity){
    if(subDeckIndex >= this.subDecks.length - 1) {
      throw new Error("The city is already in the lower subdeck");
    }
    this.subDecks[subDeckIndex].remove(city.name);
    this.subDecks[subDeckIndex+1].add(city.name);
  }

  public removeSubDeck(subDeckIndex: number) {
    this.subDecks.splice(subDeckIndex, 1);
  }

}
