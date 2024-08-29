import { Injectable } from '@nestjs/common';
import { PokemonEntry } from './pokemon.model';

@Injectable()
// this decorator allows NestJS to manage its lifecycle and inject it where needed
export class PokemonService {
  private pokemon: PokemonEntry[] = [];

  getAllPokemon(): PokemonEntry[] {
    return this.pokemon;
  }

  getPokemon(id: number): PokemonEntry {
    return this.pokemon.find((p) => p.id === id);
  }

  createPokemon(pokemon: PokemonEntry): PokemonEntry {
    this.pokemon.push(pokemon);
    return pokemon;
  }

  updatePokemon(id: number, updatedPokemon: PokemonEntry): PokemonEntry {
    const index = this.pokemon.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.pokemon[index] = { ...this.pokemon[index], ...updatedPokemon };
      return this.pokemon[index];
    }

    return null;
  }

  deletePokemon(id: number): boolean {
    const index = this.pokemon.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.pokemon.splice(index, 1);
      return true;
    }
    return false;
  }
}

// business logic
