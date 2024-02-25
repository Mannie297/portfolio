import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[220px] w-full'>
      <motion.div 
        variants={fadeIn('right', 'spring', 0.25*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] 
        rounded-[20px] shadow-card'
        
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12  
          min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain'/>

          <h3 className='text-white text-[20px] 
          font-bold text-center'>{title}</h3>

        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

      </motion.div>

      <motion.p
        variants={fadeIn('','', 0.1, 1)} 
        className='mt-4 text-secondary text-[17px] max-w-3xl
        leading-[30px]'
      >
        Results-oriented Data Scientist with over 4 years of experience with a strong foundation in machine learning, 
        statistics, and programming. Proficient in Python, R, and Java, showcasing expertise in utilising powerful 
        libraries including pandas, scikit-learn, TensorFlow, and Pytorch.Experienced in conducting in-depth research, 
        developing, experimenting, and deploying advanced analytical models in diverse data science projects. Adept at 
        data wrangling, visualisation, and translating insights into actionable strategies!

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')