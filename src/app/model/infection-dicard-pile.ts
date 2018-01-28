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
}
