import { Pokemon, ApiResponse, PokemonOptions } from "../models/page";

// const fetchPokemons = async ({
//   offset,
//   limit,
// }: PokemonOptions): Promise<ApiResponse> => {
//   try {
//     const res = await fetch(
//       `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
//     );
//     const data = await res.json();

//     return {
//       data: res.ok ? data : null,
//       error: res.ok ? null : "Failed to fetch pokemons",
//       status: res.status,
//     };
//   } catch (error) {
//     return {
//       data: null,
//       error: error instanceof Error ? error.message : "Something went wrong",
//       status: 500,
//     };
//   }
// };

export const getPokemons = async () => {
  const response = await fetch(
    "http://localhost:3000/api/pokemon?offset=0&limit=5"
  );
  return response.json();
};
