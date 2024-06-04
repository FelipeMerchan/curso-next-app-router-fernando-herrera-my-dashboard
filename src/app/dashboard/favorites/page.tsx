import { FavoriteList, PokemonGrid} from "@/pokemon";


export const metadata = {
 title: 'Favoritos',
 description: '151 Pokémon',
};

export default async function PokemonPage() {
  return (
    <div className="flex flex-col">
      <span className="text-4xl my-2">
        Pokémon favoritos <br />
        <small className="text-blue-500">Global State</small>
      </span>
      <FavoriteList />
    </div>
  );
}