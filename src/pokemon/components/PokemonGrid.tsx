import { PokemonCard, SimplePokemon } from ".."

interface Props {
  pokemon: SimplePokemon[];
}

export const PokemonGrid = ({ pokemon } : Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {
        pokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      }
    </div>
  )
}
