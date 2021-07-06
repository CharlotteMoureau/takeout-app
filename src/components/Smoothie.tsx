import React from 'react';

import '../css/smoothies.scss';

interface Props {
    name: string,
    price: number,
    url: string
}

const Smoothie: React.FC<Props> = ({
    name,
    price,
    url
}) => {
    return (
        <article className="smoothie-home">
            <img className="smoothie-img-home" src={`./img/smoothies/${url}`} alt={name}></img>
            <h2 className="smoothie-name-home">{name}</h2>
            <span className="smoothie-price-home">{price}€</span>
        </article>
    )
}

export default Smoothie;