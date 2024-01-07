'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText  } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0'/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
     <TypingText title="| About Metaverse" textStyles="text-center"/>
     <motion.p
       variants={fadeIn('up', 'tween', 0.2, 1)}
       className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
     >

      <span className='font-extrabold text-white'>Metaverse </span>
       
       is a new thing in the future, where you can enjoy the virtual world 
       by feeling like it's really real, you can feel what you feel in this metaverse world, 
       and 
       
      <span  className='font-extrabold text-white'> interact with other people </span>
       
       who are also immersed in this environment. It’s not
       just about looking good or having fun, 
       
       <span  className='font-extrabold text-white'> it’s about experiencing something truly unique. </span>
        
      
     </motion.p>

     <motion.img 
     variants={fadeIn('up', 'tween', 0.3, 1 )}
     src="/arrow-down.svg"
     alt="arrow down"
     className=" w-[18px] h-[28px] object-contain mt-[28px]"
     />

    </motion.div>
  </section>
);

export default About;
