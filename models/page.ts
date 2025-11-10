export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonOptions {
  offset: number;
  limit: number;
}

export interface PokemonProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
  error: string;
  status: number;
}  

export interface ApiResponse {
  data: PokemonProps | null;
  error: string | null;
  status: number;
}
