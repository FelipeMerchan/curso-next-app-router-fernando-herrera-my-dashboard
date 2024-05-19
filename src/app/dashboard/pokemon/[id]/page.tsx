import { Pokemon } from "@/pokemon";

interface Props {
  params: { id: string };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache',
  }).then(response => response.json());
  console.log('Se cargó a', { pokemon: pokemon.name })

  return pokemon;
}

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1>Pokémon {params.id}</h1>
      <div>{JSON.stringify(pokemon)}</div>
    </div>
  );
}