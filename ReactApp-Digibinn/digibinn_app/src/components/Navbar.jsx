import React from 'react'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={'${styles.paddingX} ${styles.flexCenter}'}>
        <div className={'${styles.boxWidth}'}>
            <nav className="w-full flex py-6 justify-between items-center navbar">
                <Link to='/'
                    className="flex-1 font-poppins font-semibold text-[42px] text-white ml-8"
                >
                    <h1>Digibinn.</h1>
                </Link>
                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={"font-poppins font-normal cursor-pointer text-[16px] text-white mr-12"}
                            >
                            <a href={nav.link}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar