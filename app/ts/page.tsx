import { PokemonProps } from "@/models/page";
import { getPokemons } from "@/serverActions/page";
import PokemonList from "@/components/pokemonList";

export default async function TSpage() {
  // const offset: number = 0;
  // const limit: number = 2;
  // const response = await fetchPokemons({ offset, limit });
  // console.log(response);

  // if (response.error) {
  //   return <div>Error: {response.error}</div>;
  // }

  const pokemons: PokemonProps = await getPokemons();

  return (
    <div className="p-8">
      <p className="text-4xl font-bold text-black">TS page</p>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
