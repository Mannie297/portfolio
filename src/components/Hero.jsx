import React from 'react'
import {motion} from 'framer-motion';
import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { ComputersCanvas } from './canvas';
import { StarsCanvas} from '../components';
import {heropictwo, reactjs} from '../assets';



const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 
       top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>

          <div className='w-1 sm:h-80 h-40 violet-gradient'/>

        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Emmanuel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, User <br className='sm:block hidden'/> interfaces, and Web Applications.
          </p>

        </div>

      </div>    
      
      <div className='relative 2xl:w-full h-[110%] hidden sm:flex flex-1 justify-end items-center'>
        <ComputersCanvas/>
      </div>
      
      
      <div className='absolute ss:bottom-20 bottom-80 xs:hidden flex justify-center items-center'>
        <img src={heropictwo} alt='billing' className='w-full h-full relative z-[5]'/>
      </div>
            

      
      <div className='absolute xs:bottom-10 bottom-32 w-full
      flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl 
          border-4 border-secondary flex justify-center
          items-start p-2'>

            <motion.dev
              animate={{
                y:[0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className= 'w-3 h-3 rounded-full bg-secondary mb-1'
            />

          </div>
        </a>

      </div>
            

    </section>

    
  )
}

export default Hero