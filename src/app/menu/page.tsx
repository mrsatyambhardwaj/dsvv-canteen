"use client"
import React, { useState } from 'react';
import MenuCard from './components/MenuCard';
import MenuNav from './components/MenuNav';

export default function MenuPage() {
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding items to the cart
  const addToCart = (name, price, quantity) => {
    const existingItemIndex = cartItems.findIndex(item => item.name === name);
    if (existingItemIndex !== -1) {
      // Update existing item quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity = quantity;
      setCartItems(updatedCartItems);
    } else {
      // Add new item to cart
      const newCartItem = { name, price, quantity };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  // Calculate total price dynamically
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div>
      <MenuNav cartItems={cartItems} setCartItems={setCartItems} />
      <div className="px-20 py-24 md:flex-row grid grid-cols-4 gap-4">
        <MenuCard title="Aloo Poha" price={10.00} img="poha.jpg" addToCart={addToCart} />
        <MenuCard title="Burger" price={15.00} img="burger.jpeg" addToCart={addToCart} />
        <MenuCard title="Biriyani" price={15.00} img="Biriyani.jpeg" addToCart={addToCart} />
        <MenuCard title="Coffee" price={10.00} img="coffee.jpg" addToCart={addToCart} />
        <MenuCard title="Vada" price={10.00} img="vada.jpg" addToCart={addToCart} />
        <MenuCard title="Samosaa" price={10.00} img="samosa.jpeg" addToCart={addToCart} />
        <MenuCard title="Poori" price={20.00} img="poori.avif" addToCart={addToCart} />
        <MenuCard title="Gulab jamun" price={25.00} img="gulab.jpg" addToCart={addToCart} />
      </div>
    </div>
  );
}
