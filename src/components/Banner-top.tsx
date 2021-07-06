import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/CartContext';
import { getAllQty } from '../hooks/operation';

import '../css/banner.scss';

Modal.setAppElement('#root');

const BannerTop: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cart } = useContext(CartContext);

    const changeColor = () => {
        const heart = document.querySelector('.fa-heart') as HTMLElement

        if (heart.classList.contains('fas')) {
            heart.classList.replace('fas', 'far')
            return
        }
        heart.classList.replace('far', 'fas')
    }

    const showMeme = () => {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <header className="banner-top">
            <div className="shopping-cart">
                <p>Where do you want to order from?</p>
                {cart.order.length !== 0 ?
                    <Link to="/cart"><div className="cart-amount"><span>{getAllQty(cart.order)}</span></div></Link>
                    : null}
                <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
            </div>
            <figure>
                <div className="fruits-banner"></div>
            </figure>
            <div className="logo">
                <img src="./img/logo.png" alt="Acai lovers' logo"></img>
            </div>
            <div className="banner-bottom">
                <div className="infos">
                    <img src="./img/name.png" alt="Acai lovers"></img>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                        <button onClick={showMeme}>(1.1k review)</button>
                    </div>
                </div>
                <button className="heart" onClick={changeColor}>
                    <i className="far fa-heart"></i>
                </button>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    contentLabel="Meme Modal"
                    overlayClassName="overlay"
                    className="modal"
                >
                    <button className="App-close-modal" onClick={closeModal}><i className="fas fa-times"></i></button>
                    <img src="./img/meme.jpg" alt="If I had one meme"></img>
                </Modal>
            </div>
        </header>
    )
}

export default BannerTop;