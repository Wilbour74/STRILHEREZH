import React from "react";
import logo from '../assets/Skornennlogo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-gradient-to-b from-white via-white to-transparent fixed top-0 left-0 right-0 z-50">

            <img className="shadow-lg w-[175px] h-[40px]" src={logo} alt="Skornenn Logo" />

            <div className="flex items-center space-x-4">
                <button className="border border-black p-2 rounded-full bg-white">
                    <i className="fas fa-search fa-lg"></i>
                </button>
                
                <button className="border border-black p-2 rounded-full bg-white">
                    <i className="fas fa-user fa-lg"></i>
                </button>

                <button className="border border-black p-2 rounded-full bg-white">
                    <i className="fas fa-shopping-cart fa-lg"></i>
                </button>

                <button className="border border-black p-2 rounded-full bg-white">
                    <i className="fas fa-bars fa-lg"></i>
                </button>
            </div>
        </nav>

    );
}

export default Navbar;