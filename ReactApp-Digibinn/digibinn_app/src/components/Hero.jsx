import React from 'react'
import styles from '../../style'
import Button from '../../components/Button'

const Hero = () => (
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
  )


export default Hero