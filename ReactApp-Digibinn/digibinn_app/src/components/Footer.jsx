import React from 'react'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <div className={'bg-primary ${styles.paddingX} ${styles.flexStart}'}>
    <div className={'${styles.boxWidth}'}>
      <section className={'${styles.flexCenter} ${styles.paddingY} flex-col'}>
        <div className={'${styles.flexStart} md:flex-row flex-col mb-8 w-full'}>
          <div className='flex-1 flex flex-col justify-start mr-10'>
            <h1 className="font-poppins font-semibold text-[36px] text-white ml-8 w-[266px] h-[72px] object-contain">Digibinn.</h1>
            <p className={'${styles.paragraph} text-[10px] ml-8 max-w-[310px] text-white'}>Making life cleaner</p>
          </div>
        
          <div className='flex-[1.5] w-full flex flex-row justify between flex wrap md:mt-0 mt-10'>
            {footerLinks.map((footerLink) => (
              <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className='font-poppins font medium text-[18px] leading-[27px] text-white'>
                  {footerLink.title}
                </h4>
                <ul className='list-none mt-4'>
                  {footerLink.links.map((link, index) => (
                    <li key={link.name}
                      className={'font-poppins font-normal text-[12px] leading-[24px] text-dimwhite hover:text-secondary cursor-pointer mb-4 text-white'}>
                        {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
          <div className='w-full flex justify-between items-center md:flex-row flex-colf pt-6 border-t-[1px] border-t-[#3f3e45]'>
            <p className='font-poppins font-normal text-center text-[12px] leading-[27px] text-white'>
              2023 Codedump. All Right Reserved.
            </p>

            <div className='flex flex-row md:mt-0 mt-6'>
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