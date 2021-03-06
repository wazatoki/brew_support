import { Unit } from "./unit";

export class Ingredient {
  id: string;
  name: string;
  brewingUnit: Unit;

  constructor(id = "", name = "", brewingUnit: Unit) {
    this.id = id;
    this.name = name;
    this.brewingUnit = brewingUnit;
  }
}
