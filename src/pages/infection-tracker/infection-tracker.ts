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

  public editionMode: boolean = false;
  public cityToAdd: string;
  public nbToAdd: number;

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

  public editEnable(): void {
    this.editionMode = true;
  }

  public editDisable(): void {
    this.editionMode = false;
  }

  public undraw(city: InfectionCity): void {
    this.infectionDiscardPile.remove(city.name);
    this.infectionDeck.addCityToTop(city);
  }

  public moveUp(subDeckIndex: number, city: InfectionCity): void {
    this.infectionDeck.moveCityInUpperSubDeck(subDeckIndex, city);
  }

  public moveDown(subDeckIndex: number, city: InfectionCity): void {
    this.infectionDeck.moveCityInLowerSubDeck(subDeckIndex, city);
  }

  public remove(subDeck: InfectionSubDeck, city: InfectionCity): void {
    subDeck.remove(city.name);
  }

  public removeSubDeck(subDeckIndex: number): void {
    this.infectionDeck.removeSubDeck(subDeckIndex);
  }

  public addCity(): void {
    this.infectionDeck.subDecks[0].cities.unshift(new InfectionCity(this.cityToAdd, Number(this.nbToAdd)));
    this.cityToAdd = null;
    this.nbToAdd = null;
  }
}
