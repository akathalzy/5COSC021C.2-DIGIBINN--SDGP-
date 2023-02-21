import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Button from './components/Button'

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={'${styles.paddingX} ${styles.flexCenter}'}>
        <div className={'${styles.boxWidth}'}>
          <Navbar />
        </div>
      </div>

      <div className={'bg-primary ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          <Hero />
        </div>
      </div>

      <div className={'bg-primary ${styles.paddingX} ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          
          <Footer />
        </div>
      </div>
    </div>
  )


export default App