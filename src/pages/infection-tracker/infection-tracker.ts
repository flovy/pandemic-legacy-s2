import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfectionDeck } from '../../app/model/infection-deck';
import { InfectionDiscardPile } from '../../app/model/infection-dicard-pile';
import { InfectionCard } from '../../app/model/infection-card';
import { InfectionSubDeck } from '../../app/model/infection-sub-deck';

@Component({
  selector: 'page-infection-tracker',
  templateUrl: 'infection-tracker.html'
})
export class InfectionTrackerPage {

  public infectionDeck: InfectionDeck = new InfectionDeck();
  public infectionDiscardPile: InfectionDiscardPile = new InfectionDiscardPile();

  public cityToAdd: string;
  public nbToAdd: number;

  constructor(public navCtrl: NavController) {

  }

  public draw(subDeck: InfectionSubDeck, card: InfectionCard): void {
    this.infectionDiscardPile.add(subDeck.draw(card));
  }

  public addCity(): void {
    this.infectionDeck.addInfectionCard(this.cityToAdd, Number(this.nbToAdd));
    this.cityToAdd = null;
    this.nbToAdd = null;
  }

  public handleEpidemic(): void {
    this.infectionDeck.addNewSubDeck(this.infectionDiscardPile.drop());
  }
}
