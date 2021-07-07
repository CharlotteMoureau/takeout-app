import React from 'react';
import { Link } from 'react-router-dom';
import { smoothiesData } from '../data/data';
import BannerTop from './Banner-top';
import Smoothie from './Smoothie';

const Home: React.FC = () => {
    return (
        <>
            <BannerTop />
            <ul className="smoothies-list">
                {smoothiesData.smoothies.map((smoothie) => {
                    return (<li key={smoothie.id} className="smoothie-product">
                        <Smoothie
                            name={smoothie.name}
                            price={smoothie.price}
                            url={smoothie.url}
                            id={smoothie.id}
                        />
                        <div className="link">
                            <Link to={`/product/${smoothie.id}`}><i className="fas fa-plus"></i></Link>
                        </div>
                    </li>)
                })}
            </ul>
        </>
    )
}

export default Home;