import React from 'react'
import { Link } from 'react-router-dom'
import { socialMedia } from '../constants'

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2 text-white">Digibinn</h1>
          <p className="text-white text-[10px] mt-[-8px]">Make your life cleaner</p>
        </div>
        <div className="w-full md:w-1/4 mt-6 md:mt-0">
          <h2 className="text-lg font-bold mb-2 text-white">Useful Links</h2>
          <ul className="list-none">
            <li className="mb-2"><a href="#">How it works</a></li>
            <li className="mb-2"><a href="#">Terms & Services</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mt-6 md:mt-0">
          <h2 className="text-lg font-bold mb-2 text-white">Resources</h2>
          <ul className="list-none">
            <li className="mb-2"><a href="#">Help Center</a></li>
            <li className="mb-2"><a href="#">Blog</a></li>
            <li className="mb-2"><a href="#">Partner</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mt-6 md:mt-0">
          <h2 className="text-lg font-bold mb-2 text-white">Follow Us</h2>
          <div className="flex justify-start mt-6 lg:mb-0 mb-6">
            {socialMedia.map((social, index) => (
              <Link to={social.link}>
                  <img
                    key={social.id}
                    src={social.icon}
                    alt={social.id}
                    className={'w-[21px] h-[21px] h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5'}></img>
              </Link>
                ))}
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-colf pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <div className="container mx-auto">
          <p className="text-gray-400 text-center">2023 Codedump. All Right Reserved.</p>
        </div>
        </div>
    </footer>
)
  
  {/* <footer className='relative bg-primary pt-8 pb-6'>
    <div className='container mx-auto px-4'>
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
            <h1 className="font-poppins font-semibold text-[36px] text-white ml-8 w-[266px] h-[72px] object-contain">Digibinn.</h1>
            <p className={'${styles.paragraph} text-[10px] ml-8 max-w-[310px] text-white'}>Making life cleaner</p>

            <div className='mt-6 lg:mb-0 mb-6'>
              {socialMedia.map((social, index) => (
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={'w-[21px] h-[21px] h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'}></img>
              ))}
            </div>
          </div>
        
        <div className="w-full lg:w-6/12 px-4 text-white">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              {footerUsefulLinks.map((usefulLink) => (
                <div key={usefulLink.key}>
                  <h4 className='block uppercase text-gray-500 text-sm font-semibold mb-2'>
                    {usefulLink.title}
                  </h4>
                  <ul className='list-unstyled'>
                      <li key={usefulLink.name}
                        className={'text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'}>
                          {usefulLink.name}
                      </li>
                  </ul>
                </div>
              ))}
            </div>

            <div class="w-full lg:w-4/12 px-4">
              {footerResourcesLinks.map((resourcesLink) => (
                  <div key={resourcesLink.key}>
                    <h4 className='block uppercase text-blueGray-500 text-sm font-semibold mb-2'>
                      {resourcesLink.title}
                    </h4>
                    <ul className='list-unstyled'>
                        <li key={resourcesLink.name}
                          className={'text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'}>
                            {resourcesLink.name}
                        </li>
                    </ul>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </div>
        
          <div className='w-full flex justify-between items-center md:flex-row flex-colf pt-6 border-t-[1px] border-t-[#3f3e45]'>
            <p className='font-poppins font-normal flex flex-wrap items-center md:justify-between justify-center text-center text-[12px] leading-[27px] text-white'>
              2023 Codedump. All Right Reserved.
            </p>

            
          </div>
    </div> 
  </footer> */}
  



export default Footer