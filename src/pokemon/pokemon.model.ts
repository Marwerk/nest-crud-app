export class Pokemon {
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
// We're probably gonna use some kind of db schema for this
