import { Injectable } from '@angular/core';
import { InfectionDeck } from '../model/infection-deck';
import { Storage } from '@ionic/storage';
import { InfectionCity } from '../model/infection-city';
import { InfectionSubDeck } from '../model/infection-sub-deck';

@Injectable()
export class InfectionDeckService {

  public decks: InfectionDeck[];

  private decksKeyStorage: string = "PLS2_DECKS";

  constructor(private storage: Storage) {
    this.storage.get(this.decksKeyStorage).then((decks) => {
      if(decks) {
        this.loadDecks(decks);
      }
    });
  }

  public save(name: string, deck: InfectionDeck): void {
    deck.name = name;
    this.decks.unshift(deck);
    this.storage.set(this.decksKeyStorage, this.decks);
  }

  private loadDecks(decks: InfectionDeck[]): void {
    this.decks = [];
    decks.forEach((deck) => {
      let subDecks: InfectionSubDeck[] = [];
      deck.subDecks.forEach((subDeck) => {
        let cities: InfectionCity[] = [];
        subDeck.cities.forEach((city) => {
          cities.push(new InfectionCity(city.name, city.nbCards));
        });
        subDecks.push(new InfectionSubDeck(cities, subDeck.epidemicNumber));
      });
      this.decks.push(new InfectionDeck(subDecks, deck.numberOfEpidemic, deck.name))
    });
    console.log(this.decks);
  }
}
