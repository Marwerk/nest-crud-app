import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.model';

@Controller('pokemon')
// this controller decorator prefixes all routes with /pokemon
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getAllPokemon(): Pokemon[] {
    return this.pokemonService.getAllPokemon();
  }

  @Get(':id')
  getPokemon(@Param('id') id: string): Pokemon {
    return this.pokemonService.getPokemon(Number(id));
  }

  @Post()
  createPokemon(@Body() pokemon: Pokemon): Pokemon {
    return this.pokemonService.createPokemon(pokemon);
  }

  @Put(':id')
  updatePokemon(@Param('id') id: string, @Body() pokemon: Pokemon): Pokemon {
    return this.pokemonService.updatePokemon(Number(id), pokemon);
  }

  @Delete(':id')
  deletePokemon(@Param('id') id: string): boolean {
    return this.pokemonService.deletePokemon(Number(id));
  }
}

// define our API endpoints
// @Body() decorator allows us to access the request body, while @Param() lets us access route parameters
