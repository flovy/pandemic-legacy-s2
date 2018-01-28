import { Component } from '@angular/core';
import { InfectionDeck } from '../../app/model/infection-deck';
import { InfectionCity } from '../../app/model/infection-city';
import { InfectionDeckService } from '../../app/service/infection-deck-service';
import { NavController } from 'ionic-angular';
import { InfectionTrackerPage } from '../infection-tracker/infection-tracker';
import { InfectionSubDeck } from '../../app/model/infection-sub-deck';

@Component({
  selector: 'page-infection-deck-builder',
  templateUrl: 'infection-deck-builder.html'
})
export class InfectionDeckBuilderPage {

  public infectionDeck: InfectionDeck;

  public cityToAdd: string;
  public nbToAdd: number;
  public deckName: string;

  constructor(private infectionDeckService: InfectionDeckService, private navController: NavController) {
  }

  public newDeck(): void {
    let subDeck: InfectionSubDeck = new InfectionSubDeck([
      new InfectionCity("New York", 3),
      new InfectionCity("Washington", 3),
      new InfectionCity("Jacksonville", 3),
      new InfectionCity("Sao Paulo", 3),
      new InfectionCity("Londres", 3),
      new InfectionCity("Istanbul", 3),
      new InfectionCity("Tripoli", 3),
      new InfectionCity("Le Caire", 3),
      new InfectionCity("Lagos", 3),
    ], 0);
    this.infectionDeck = new InfectionDeck([subDeck]);
  }

  public removeCity(city: InfectionCity): void {
    this.infectionDeck.subDecks[0].remove(city.name);
  }

  public addCity(): void {
    this.infectionDeck.subDecks[0].cities.unshift(new InfectionCity(this.cityToAdd, Number(this.nbToAdd)));
    this.cityToAdd = null;
    this.nbToAdd = null;
  }

  public saveDeck(): void {
    if(this.deckName != null && this.deckName.length > 0) {
      this.infectionDeckService.save(this.deckName, this.infectionDeck);
      this.infectionDeck = null;
      this.deckName = null;
      this.navController.push(InfectionTrackerPage);
    }
  }
}
