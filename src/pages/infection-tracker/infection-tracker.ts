import { Component } from '@angular/core';
import { InfectionDeck } from '../../app/model/infection-deck';
import { InfectionDiscardPile } from '../../app/model/infection-dicard-pile';
import { InfectionCity } from '../../app/model/infection-city';
import { InfectionSubDeck } from '../../app/model/infection-sub-deck';
import { InfectionDeckService } from '../../app/service/infection-deck-service';

@Component({
  selector: 'page-infection-tracker',
  templateUrl: 'infection-tracker.html'
})
export class InfectionTrackerPage {

  public selectedDeck: InfectionDeck;

  public infectionDeck: InfectionDeck;
  public infectionDiscardPile: InfectionDiscardPile;

  constructor(private infectionDeckService: InfectionDeckService) {
  }

  public getDeckList(): InfectionDeck[] {
    return this.infectionDeckService.decks;
  }

  public start(): void {
    this.infectionDeck = this.selectedDeck;
    this.infectionDiscardPile = new InfectionDiscardPile();
  }

  public draw(subDeck: InfectionSubDeck, city: InfectionCity): void {
    subDeck.remove(city.name);
    this.infectionDiscardPile.add(city.name);
  }

  public handleEpidemic(): void {
    this.infectionDeck.addNewSubDeck(this.infectionDiscardPile.drop());
  }
}
