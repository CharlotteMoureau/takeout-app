import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { smoothiesData } from '../data/data';

import '../css/cart.scss';

const Cart: React.FC = () => {
    const { cart, setCart } = useContext(CartContext)
    let total = 0
    let time = 0

    cart.order.map((product, index) => {
        if (product.qty === 0) {
            cart.order.splice(index, 1)
        }

        total += product.price * product.qty
        time += product.time
    })

    const handlePlus = (index: number) => {
        cart.order[index].qty += 1

        setCart({
            order: cart.order
        })
    }

    const handleMinus = (index: number) => {
        if (cart.order[index].qty <= 1) {
            cart.order.splice(index, 1)
        } else {
            cart.order[index].qty -= 1
        }

        setCart({
            order: cart.order
        })
    }

    const deleteItem = (index: number) => {
        cart.order.splice(index, 1)

        setCart({
            order: cart.order
        })
    }

    const checkout = () => {
        alert("Congratulations! You have not ordered anything at all because this is a fake app 😉")
    }

    return (
        <div className="cart">
            <div className="back-cart">
                <Link to="/"><i className="fas fa-home"></i></Link>
            </div>
            {cart.order.length !== 0 ?
                <div className="cart-order">
                    <h1>Your order</h1>
                    <>
                        <ul>
                            {cart.order.map((smoothie, index) => {
                                const product = smoothiesData.smoothies.find(product => product.id === smoothie.id)
                                return (
                                    <li key={product?.name}>
                                        <img src={`./img/smoothies/${product?.url}`} alt={product?.name}></img>

                                        <div className="infos">
                                            <h2>{product?.name}</h2>
                                            <span className="weight">{product?.weight} g</span>
                                            <p>{product?.price}€</p>
                                        </div>

                                        <div className="buttons">
                                            <div className="plus-minus">
                                                <button onClick={() => handleMinus(index)}><i className="fas fa-minus"></i></button>
                                                <span className="qty">{smoothie.qty}</span>
                                                <button onClick={() => handlePlus(index)}><i className="fas fa-plus"></i></button>
                                            </div>
                                            <button onClick={() => deleteItem(index)}><i className="fas fa-trash-alt"></i></button>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <footer>
                            <div className="total">
                                <h3>Total:</h3>
                                <p>{total}€</p>
                            </div>
                            <div className="delivery">
                                <h3>Prepare time:</h3>
                                <p>{time} mins</p>
                            </div>
                            <button onClick={checkout}>Checkout</button>
                        </footer>
                    </>
                </div>
                : <>
                    <div className="empty">
                        <h2>Your cart is empty!</h2>
                        <Link to="/"><button>Go back to Menu</button></Link>
                    </div>
                </>
            }
        </div>
    )
}

export default Cart;