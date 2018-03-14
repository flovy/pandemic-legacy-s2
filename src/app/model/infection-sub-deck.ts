import { InfectionCity } from "./infection-city";

export class InfectionSubDeck {

  constructor(public cities: InfectionCity[], public epidemicNumber: number) {
  }

  public remove(cityName: string): void {
    for(var i = 0; i < this.cities.length; i++) {
      if(this.cities[i].name === cityName) {
        this.cities[i].nbCards--;
        if(this.cities[i].nbCards <= 0) {
          this.cities.splice(i, 1);
        }
      }
    }
  }

  public add(cityName: string): void {
    let city = this.cities.find(c => c.name === cityName);
    if(city) {
      city.nbCards++;
    } else {
      this.cities.unshift(new InfectionCity(cityName, 1));
    }
  }

}
