import { InfectionCity } from "./infection-city";

export class InfectionDiscardPile {

  public cities: InfectionCity[] = [];

  constructor() {}

  public add(cityName: string): void {
    let city = this.cities.find((city) => city.name === cityName);
    if(city) {
      city.nbCards++;
    } else {
      this.cities.push(new InfectionCity(cityName, 1));
    }
  }

  public drop(): InfectionCity[] {
    return this.cities.splice(0);
  }

  public remove(cityName: string): InfectionCity {

    for(let i = 0; i < this.cities.length; i++) {
      var city = this.cities[i];
      if(city.name === cityName) {
        city.nbCards--;
        if(city.nbCards === 0) {
          this.cities.splice(i,1);
        }
        return city;
      }
    }
    throw new Error(`City ${cityName} is not in discard pile`);
  }
}
