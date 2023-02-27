import React from 'react'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={'${styles.paddingX} ${styles.flexCenter}'}>
        <div className={'${styles.boxWidth}'}>
            <nav className="w-full flex py-6 justify-between items-center navbar">
                <h1 className="flex-1 font-poppins font-semibold text-[42px] text-white ml-8">Digibinn.</h1>

                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={"font-poppins font-normal cursor-pointer text-[16px] text-white mr-12"}
                            >
                            <Link to={nav.link}>
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar