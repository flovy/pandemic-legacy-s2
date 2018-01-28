export class InfectionCity {
  constructor(public name: string, public nbCards: number) {
  }

  public getDangerColor(): string {
    switch(this.nbCards) {
      case 0:
      case 1: return 'secondary';
      case 2: return 'default';
      default: return 'danger';
    }
  }
}
