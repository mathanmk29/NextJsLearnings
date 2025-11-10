"use client";
import { Pokemon } from "../models/page";
import { PokemonProps } from "@/models/page";
import { useState } from "react";

interface Props {
  pokemons: PokemonProps;
}

export default function PokemonList({ pokemons }: Props) {
  const [pokedex, setPokedex] = useState({} as Pokemon);

  return (
    <>
      <p>{pokedex.name}</p>
      {pokemons?.results.map((pokemon) => (
        <div key={pokemon.name} className="mt-4 p-4 border rounded">
          <p className="text-2xl text-gray-800">{pokemon.name}</p>
          <a href={pokemon.url} className="text-blue-500 underline">
            More Info
          </a>
        </div>
      ))}
    </>
  );
}
