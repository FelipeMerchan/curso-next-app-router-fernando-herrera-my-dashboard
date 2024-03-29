'use client'

import { useState } from "react";

export const metadata = {
  title: 'Counter page',
  description: 'Contador del carrito de compras'
}

export default function CounterPage() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounter(counter - 1)}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>
      </div>
    </div>
  );
}