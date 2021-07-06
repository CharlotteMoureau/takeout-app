import { createContext } from 'react';

interface Cart {
    order: Array<{ id: number, qty: number, price: number, time: number }>
}

type CartContent = {
    cart: Cart,
    setCart: (c: any) => void

}

export const CartContext = createContext<CartContent>({
    cart: {
        order: []
    },
    setCart: () => { }
});