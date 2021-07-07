import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { smoothiesData } from '../data/data';
import { getAllQty } from '../hooks/operation';

import '../css/detail.scss';

interface Id {
    id: string
}

const Detail: React.FC = () => {
    let { id } = useParams<Id>()
    const { cart, setCart } = useContext(CartContext)

    const smoothie = smoothiesData.smoothies.find(smoothie => smoothie.id === parseInt(id));

    const alreadyOrdered = cart.order.find(x => x.id === smoothie!.id)

    const [qty, setQty] = useState(alreadyOrdered ? alreadyOrdered.qty : 1)


    const handlePlus = () => {
        setQty(qty + 1)
    }

    const handleMinus = () => {
        setQty(Math.max(0, qty - 1))
    }

    const handleOrder = () => {
        if (!alreadyOrdered && qty === 0) {
            return
        }

        if (alreadyOrdered) {
            alreadyOrdered.qty = qty;
        } else {
            cart.order.push({
                id: smoothie!.id,
                qty: qty,
                price: smoothie!.price,
                time: smoothie!.time
            })
        }

        setCart({
            order: cart.order
        })
    }

    return (
        <>
            <div className="top-detail">
                <div className="top-icon">
                    <div className="back-detail">
                        <Link to="/"><i className="fas fa-arrow-left"></i></Link>
                    </div>

                    <div className="cart-detail">
                        {cart.order.length !== 0 ?
                            <Link to="/cart"><div className="cart-amount"><span>{getAllQty(cart.order)}</span></div></Link>
                            : null}
                        <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                    </div>
                </div>

                <div className="circle"></div>

                <h1>{smoothie!.name}</h1>
                <p className="kcal"><i className="fas fa-fire-alt"></i> {smoothie!.kcal} kcal - {smoothie!.weight} g</p>
                <img src={`../img/smoothies/${smoothie!.url}`} alt={smoothie!.name}></img>

                <div className="purchase">
                    <div className="price">
                        <p>{smoothie!.price}€</p>
                    </div>

                    <div className="buttons">
                        <button onClick={handleMinus}><i className="fas fa-minus"></i></button>
                        <span>{qty}</span>
                        <button onClick={handlePlus}><i className="fas fa-plus"></i></button>
                    </div>

                    <button className="order" onClick={handleOrder}><i className="fas fa-cart-arrow-down"></i></button>
                </div>
            </div>

            <div className="ingredients">
                <h3>Ingredients</h3>
                {smoothie!.nuts ? <em>*this product contains nuts</em> : <em>*this product does not contain nuts</em>}
                <ul>
                    {smoothie!.ingredients.map((ingredient) => {
                        return <li key={ingredient}><img src={`../img/ingredients/${ingredient}.png`} alt={ingredient}></img></li>
                    })}
                </ul>
            </div>

            <div className="description">
                <h3>Description</h3>
                <p>{smoothie!.description}</p>
            </div>
        </>
    )
}

export default Detail