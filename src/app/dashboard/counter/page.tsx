import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: 'Shopping Cart',
  description: 'Contador del carrito de compras'
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      {/* Podemos enviar datos del lado del servidor a client
      components, por ejemplo, leer de una base de datos el valor
      y pasarlo en la prop value: */}
      <CartCounter value={20} />
    </div>
  );
}