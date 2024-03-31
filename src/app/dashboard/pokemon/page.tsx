const getPokemon = async (limit = 20, offset = 0) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}1&offset=${offset}`)
    .then(response => response.json())

  return data
}

export default async function PokemonPage() {
  const pokemon = await getPokemon()

  return (
    <div>
      {JSON.stringify(pokemon)}
    </div>
  );
}