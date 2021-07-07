import React from 'react';
import { Link } from 'react-router-dom';
import '../css/smoothies.scss';

interface Props {
    name: string,
    price: number,
    url: string,
    id: number
}

const Smoothie: React.FC<Props> = ({
    name,
    price,
    url,
    id
}) => {
    return (
        <article className="smoothie-home">
            <Link to={`/product/${id}`}><img className="smoothie-img-home" src={`./img/smoothies/${url}`} alt={name}></img></Link>
            <h2 className="smoothie-name-home">{name}</h2>
            <span className="smoothie-price-home">{price}€</span>
        </article>
    )
}

export default Smoothie;