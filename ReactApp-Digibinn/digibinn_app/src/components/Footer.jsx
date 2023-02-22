import React from 'react'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <div className={'bg-primary ${styles.paddingX} ${styles.flexStart}'}>
    <div className={'${styles.boxWidth}'}>
      <section className={'${styles.flexCenter} ${styles.paddingY}'}>
        <div className={'${styles.flexStart} flex-col w-full'}>
            <h1 className="flex-1 font-poppins font-semibold text-[36px] text-white pt-[20px] ml-8">Digibinn.
            </h1>
            <p className={'${styles.paragraph} text-[10px] mb-5 ml-8 justify-between text-left w-full text-white'}>Making life cleaner</p>
        </div>
        
        <div className='flex flex-row justify-evenly flex-wrap pt-[20px]'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className='flex flex-col'>
              <h4 className='font-poppins font medium text-[18px] text-white'>
                {footerLink.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index) => (
                  <li key={link.name}
                    className={'font-poppins font-normal text-[12px] text-white hover:text-blue cursor-pointer mb-4'}>
                      {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='w-full flex justify-between items-center flex row pt-6 border-t-[1px] border-t-[#3f3e45]'>
          <p className='font-poppins font-normal text-center text-[12px] leading-[27px] pb-[20px] ml-8 text-white'>
            2023 Codedump. All Right Reserved.
          </p>

          <div className='flex flex-row pb-[20px]'>
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={'w-[21px] h-[21px] object-contain cursor-pointer mr-6'}></img>
            ))}
          </div>
        </div>
      </section>
    </div>
    </div>
  
  )


export default Footer