import { Component, OnInit } from '@angular/core';
import { InfectionDeck } from '../../app/model/infection-deck';
import { InfectionCity } from '../../app/model/infection-city';
import { InfectionDeckService } from '../../app/service/infection-deck-service';
import { NavController } from 'ionic-angular';
import { InfectionTrackerPage } from '../infection-tracker/infection-tracker';
import { InfectionSubDeck } from '../../app/model/infection-sub-deck';
import { FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'page-infection-deck-builder',
  templateUrl: 'infection-deck-builder.html'
})
export class InfectionDeckBuilderPage implements OnInit {

  public infectionDeck: InfectionDeck;

  public cityToAdd: string;
  public nbToAdd: number;
  public deckName: string;

  public selectedDeck: InfectionDeck;

  public isNew: boolean;

  constructor(private infectionDeckService: InfectionDeckService, private navController: NavController) {
  }

  ngOnInit(): void {
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
    this.isNew = true;
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
    if(this.isNew) {
      this.infectionDeckService.save(this.deckName, this.infectionDeck);
    } else {
      this.infectionDeckService.update(this.infectionDeck);
    }
    this.infectionDeck = null;
    this.deckName = null;
    this.navController.push(InfectionTrackerPage);
  }

  public updateDeck(): void {
    this.isNew = false;
    this.infectionDeck = this.selectedDeck;
  }

  public getDeckList(): InfectionDeck[] {
    return this.infectionDeckService.decks;
  }

}
