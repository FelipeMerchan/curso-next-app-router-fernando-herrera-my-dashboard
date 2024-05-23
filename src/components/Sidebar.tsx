import Image from "next/image"
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline, IoLogoReact } from "react-icons/io5"
import { SidebarMenuItem } from "."

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={25} />,
    title: 'Dashboard',
    subtitle: 'Visualización',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={25} />,
    title: 'Counter',
    subtitle: 'Contador Client Side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={25} />,
    title: 'Pokémon',
    subtitle: 'Generación estática',
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartOutline size={25} />,
    title: 'Favoritos',
    subtitle: 'Global State',
  },
]

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: '400px' }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://avatars.githubusercontent.com/u/47896948?v=4"
              alt="User avatar"
              width="50"
              height="50"
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Felipe Merchan
          </span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {
          menuItems.map((menuItem) => (
            <SidebarMenuItem
              key={menuItem.path}
              {...menuItem}
            />
          ))
        }
      </div>
    </div>
  )
}
