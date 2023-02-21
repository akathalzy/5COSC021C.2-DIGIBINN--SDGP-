import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <h1>Digibinn.</h1>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={'font-poppins font-normal cursor-pointer text-[16px] text-white'}
                >
                    <a href={'#${nav.id}'}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar