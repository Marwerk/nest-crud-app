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
import { PokemonEntry } from './pokemon.model';

@Controller('pokemon')
// this controller decorator prefixes all routes with /pokemon
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getAllPokemon(): PokemonEntry[] {
    return this.pokemonService.getAllPokemon();
  }

  @Get(':id')
  getPokemon(@Param('id') id: string): PokemonEntry {
    return this.pokemonService.getPokemon(Number(id));
  }

  @Post()
  createPokemon(@Body() pokemon: PokemonEntry): PokemonEntry {
    return this.pokemonService.createPokemon(pokemon);
  }

  @Put(':id')
  updatePokemon(
    @Param('id') id: string,
    @Body() pokemon: PokemonEntry,
  ): PokemonEntry {
    // Decorators that tell NestJS how to extract data from the request
    // Param() lets us access route parameters and @Body() decorator allows us to access the request body
    // id: string is TypeScript syntax saying "id should be treated as string"
    return this.pokemonService.updatePokemon(Number(id), pokemon);
  }

  @Delete(':id')
  deletePokemon(@Param('id') id: string): boolean {
    return this.pokemonService.deletePokemon(Number(id));
  }
}

// define our API endpoints
