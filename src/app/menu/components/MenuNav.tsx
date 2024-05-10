"use client"
import React from 'react';
import { IoBagAdd } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import { PiUserCircle } from 'react-icons/pi';
import { FaBowlFood } from 'react-icons/fa6';
import { ModeToggle } from '@/app/components/Navbar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface MenuItem {
  name: string;
  price: number;
  quantity: number;
}

interface MenuNavProps {
  cartItems: MenuItem[];
  setCartItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

const MenuNav: React.FC<MenuNavProps> = ({ cartItems, setCartItems }) => {
  // Calculate total price dynamically
  const totalPrice = cartItems ? cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) : 0;

  return (
    <div className="z-10 bg-background border-b fixed border-muted px-8 py-4 flex justify-between w-screen">
      <div className="flex w-full gap-2 items-center font-semibold justify-between">
        <a href="./" className="flex gap-2 items-center">
          <FaBowlFood className="text-2xl" />
          <p>Dsvv Canteen</p>
        </a>
        <div className="flex gap-8 items-center">
          <ModeToggle />
          <Popover>
            <PopoverTrigger>
              <FiShoppingCart className="text-lg" />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col items-center justify-center gap-2 w-fit">
              <p className="flex justify-center text-xl font-medium">Your cart</p>
              <div className="w-full border border-muted-foreground"></div>
              {cartItems && cartItems.map((item, index) => (
                <div className="flex justify-between w-full" key={index}>
                  <p className="flex justify-center font-medium">{item.name} ({item.quantity})</p>
                  <p className="flex justify-center font-medium">₹{item.price * item.quantity}</p>
                </div>
              ))}
              {cartItems && cartItems.length > 0 && (
                <div className="w-full border border-muted-foreground"></div>
              )}
              {cartItems && cartItems.length > 0 && (
                <div className="flex justify-between w-full">
                  <p className="flex justify-center font-medium">Total Price</p>
                  <p className="flex justify-center font-medium">₹{totalPrice}</p>
                </div>
              )}
              <a href='./order'>
                <Button className="">
                  Checkout Price <IoBagAdd className="ml-2" />
                </Button>
              </a>
            </PopoverContent>
          </Popover>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <PiUserCircle className="text-2xl rounded-md" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Menu</DropdownMenuItem>
              <DropdownMenuItem>Wallet Balance: ₹</DropdownMenuItem>
              <a href="./order">
                <DropdownMenuItem>Orders</DropdownMenuItem>
              </a>
              <a href='./'>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </a>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
