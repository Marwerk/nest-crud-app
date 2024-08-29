export class PokemonEntry {
  id: number;
  name: string;
  type: string;
  level: number;

  constructor(id: number, name: string, type: string, level: number) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.level = level;
  }
}

// The model defines the structure of our pokemon (data).
// In Typescript, classes can be used as types, therefor, we are not just creating a blueprint for Pokemon objects,
// but we're also defining a type that can be used in type annotations
