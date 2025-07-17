import { useState } from 'react';
import {gsap} from 'gsap';
import { useEffect, useRef } from 'react';
import {Menu, Book, BadgeDollarSign, LibrarySquare, Calendar, X} from 'lucide-react'



function NavBar(){

    const [isOpen,setIsOpen] = useState(false);

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
        gsap.to('.navbar', {
            x: isOpen ? '-100%' : '0',
            duration: 0.3,
            ease: 'power2.in'
        });
    }
    
  
    return(
        <aside className={`fixed left-0 w-60 text-12 dark:text-[#ffffff80] text-[#00000080]  dark:bg-[#1e1e22] 
       bg-[#ffffff90] top-18  h-full border-r-2 z-2 border-[#00000030]
        transform transition-transform duration-300 ${isOpen 
        ? 'translate-x-0'     
        : '-translate-x-full' 
      }`}>
            <ul className='flex flex-col items-start py-15 w-fullfont-semibold gap-0'>
                <li className='flex cursor-pointer gap-2 pl-8 hover:pl-15 h-12 w-full 
                transition-all duration-300 select-none hover:text-[#33a54e]'><Book/>Materias</li>
                <li className='flex cursor-pointer gap-2 pl-8 hover:pl-15 h-12 w-full 
                transition-all duration-300 select-none hover:text-[#33a54e]'><BadgeDollarSign/>Emprendimientos</li>
                <li className='flex cursor-pointer gap-2 pl-8 hover:pl-15 h-12 w-full 
                transition-all duration-300 select-none hover:text-[#33a54e]'><LibrarySquare/>Libros</li>
                <li className='flex cursor-pointer gap-2 pl-8 hover:pl-15 h-12 w-full 
                transition-all duration-300 select-none hover:text-[#33a54e]'><Calendar/>Fechas</li>
            </ul>
            <button className="fixed left-65 top-4 border-2 border-[#00000040] flex items-center justify-center w-10 
            h-10 rounded-full bg-white hover:text-[#33a54e] shadow-2xl focus:outline-0 dark:bg-[#1e1e22] 
            dark:hover:bg-[#35333b] shadow-black hover:bg-[#00000010] transition-all  duration-300"
            onClick={toggleSideBar}
            >
                {isOpen ? <X color='currentColor'/> : <Menu color='currentColor' />}
            </button>
        </aside>
    );
       

    
} 

export default NavBar
