import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

function Home () {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full overflow-hidden">
      <div className={'${styles.paddingX} ${styles.flexCenter}'}>
        <div className={'${styles.boxWidth}'}>
          <Navbar />
        </div>
      </div>

      <div className={'bg-gradient-to-r from-violet-500 to-fuchsia-500 ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          <section id="home" className={'flex md:flex-row flex-col ${styles.paddingY}'}>
            <div className={'mx-0 min-w-full flex flex-col items-center'}>
              <div className="flex flex-row justify-between items-center w-full ">
               <h1 className="flex-1 font-poppins font-semibold text-[72px] text-white text-center pt-[100px]">Revolutionizing <br />
                trash collection.</h1>
              </div>
              <p className={'${styles.paragraph} mt-5 justify-between text-center w-full text-white'}>We provide the best garbage collection service for <br /> your company or residence!</p>
              <Button styles='mt-10' />
            </div>
          </section>
        </div>
      </div>

      <div className={'bg-primary ${styles.paddingX} ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home