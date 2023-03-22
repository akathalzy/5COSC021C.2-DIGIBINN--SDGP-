import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Home = () =>{
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full overflow-hidden">
      <Navbar />
      
      <div className={'bg-gradient-to-r from-violet-500 to-fuchsia-500 ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          <section id="home" className={'flex md:flex-row flex-col ${styles.paddingY}'}>
            <div className={'mx-0 min-w-full flex flex-col items-center'}>
              <div className="flex flex-row justify-between items-center w-full ">
               <h1 className="flex-1 font-poppins font-semibold text-[72px] text-white text-center pt-[100px]">Revolutionizing <br />
                trash collection.</h1>
              </div>
              <p className={'${styles.paragraph} mt-5 justify-between text-center w-full text-white'}>We provide the best garbage collection service for <br /> your company or residence!</p>
              <Link to="/register">
                <button type='button' className={'transition ease-in-out delay-150 py-2 px-8 bg-blue-500 hover:bg-blue-700 font-poppins font-medium text-[12px] text-white outline-none rounded-full ${styles} mt-8 mb-8'}>
                  Get Started
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
          
      <Footer />
    </div>
  )
}

export default Home