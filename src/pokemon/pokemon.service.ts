import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon.model';

@Injectable()
// this decorator allows NestJS to manage its lifecycle and inject it where needed
export class PokemonService {
  private pokemon: Pokemon[] = [];

  getAllPokemon(): Pokemon[] {
    return this.pokemon;
  }

  getPokemon(id: number): Pokemon {
    return this.pokemon.find((p) => p.id === id);
  }

  createPokemon(pokemon: Pokemon): Pokemon {
    this.pokemon.push(pokemon);
    return pokemon;
  }

  updatePokemon(id: number, updatedPokemon: Pokemon): Pokemon {
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
