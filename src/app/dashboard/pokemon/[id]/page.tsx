import { Pokemon } from "@/pokemon";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  /* Como estamos cachenado la respuesta de la petición, así
  ejecutemos 2 veces en esta página el método getPokemon,
  no vamos a tener problemas de performance porque la segunda petición
  no se realizará y en su lugar se usará el cache: */
  const { id, name } = await getPokemon(params.id);

  return {
    title: `#${id} - ${name}`,
    description: `Página del Pokémon ${name}`,
  }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache',
    /* next: {
      Cada 6 meses se va a reconstruir - revalidar - esta pantalla
      automáticamente:
      revalidate: 60 * 60 * 30 * 6
    } */
  }).then(response => response.json());
  console.log('Se cargó a', { pokemon: pokemon.name })

  return pokemon;
}

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1>Pokémon {params.id}</h1>
      <div>{pokemon.name}</div>
    </div>
  );
}