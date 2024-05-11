"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

interface MenuCardProps {
  title: string;
  price: number;
  img: string;
  addToCart: (title: string, price: number, quantity: number) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, price, img, addToCart }) => {
  const [localQuantity, setLocalQuantity] = useState(0); // State for displaying quantity locally
  const [cartQuantity, setCartQuantity] = useState(0); // State for quantity in the cart

  const handleIncrement = () => {
    const newLocalQuantity = localQuantity + 1;
    setLocalQuantity(newLocalQuantity);
    setCartQuantity(cartQuantity + 1);
    addToCart(title, price, newLocalQuantity); // Pass updated local quantity to addToCart function
  };

  const handleDecrement = () => {
    if (localQuantity > 0) {
      const newLocalQuantity = localQuantity - 1;
      setLocalQuantity(newLocalQuantity);
      setCartQuantity(cartQuantity - 1);
      addToCart(title, price, newLocalQuantity); // Pass updated local quantity to addToCart function
    }
  };

  return (
    <main>
      <div className="flex w-64 h-60 flex-col items-center rounded overflow-hidden border border-muted">
        <div className="w-full overflow-hidden">
          <img className="" src={img} alt="" />
        </div>
        <div className="flex w-full items-center justify-between p-2">
          <div>
            <p className="font-text-xl">{title}</p>
            <p className="text-muted-foreground">₹{price}.00</p>
          </div>
          <div className="flex h-fit items-center gap-2 text-foreground">
            <Button
              className="border border-gray-300 rounded-md px-2 w-8 py-1"
              onClick={handleDecrement}
            >
              -
            </Button>
            <p className="">{localQuantity}</p>
            <Button
              className="border border-gray-300 rounded-md px-2 w-8 py-1"
              onClick={handleIncrement}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MenuCard;
