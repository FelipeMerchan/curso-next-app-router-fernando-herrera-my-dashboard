import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemon";

const getPokemon = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
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
      <span className="text-4xl my-2">
        Listado de Pokémon <br />
        <small>estático</small>
      </span>
      <PokemonGrid pokemon={pokemon}/>
    </div>
  );
}