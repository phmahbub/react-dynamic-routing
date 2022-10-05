import React from "react";
import { Navbar, Button, Menu } from "react-daisyui";
import { Link, NavLink } from "react-router-dom";
import './MenuBar.css'

const MenuBar = () => {
  return (
    <div className="flex w-full component-preview p-4 pb-40 items-center justify-center gap-2 font-sans">
      <Navbar>
        <div className="flex-1">
          <Button color="ghost" className="normal-case text-xl">
           <NavLink to='/home'>Home</NavLink>
          </Button>
          <Button color="ghost" className="normal-case text-xl">
            <NavLink to='/about'>About</NavLink>
          </Button>
          <Button color="ghost" className="normal-case text-xl">
            <NavLink to='/contacts'>Contacts</NavLink>
          </Button>
          <Button color="ghost" className="normal-case text-xl">
            <NavLink to='/news'>News</NavLink>
          </Button>
        </div>
        
      </Navbar>
    </div>
  );
};

export default MenuBar;
