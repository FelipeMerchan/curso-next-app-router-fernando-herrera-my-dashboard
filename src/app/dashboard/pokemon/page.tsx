import Image from "next/image";

import { PokemonResponse, SimplePokemon } from "@/pokemon";

const getPokemon = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}1&offset=${offset}`)
    .then(response => response.json())

  const pokemon = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))

  return pokemon
}

export default async function PokemonPage() {
  const pokemon = await getPokemon(151)

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {
          pokemon.map(({ id, name }) => (
            <Image
              key={id}
              width={100}
              height={100}
              alt={name}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
            />
          ))
        }

      </div>
      {JSON.stringify(pokemon)}
    </div>
  );
}