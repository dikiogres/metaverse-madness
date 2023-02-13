'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { slideIn, staggerContainer, textVariant } from 'utils/motion';

import styles from '@/styles';

const Hero = () => (
  <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='z-10 flex flex-col items-center'>
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div variants={textVariant(1.2)} className='flex items-center'>
          <h1 className={styles.heroHeading}>MA</h1>
          <div className={styles.heroDText}></div>
          <h1 className={styles.heroHeading}>NESS</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='relative -mt-[12px] w-full'
      >
        <div className='hero-gradient absolute -top-[30px] z-0 h-[300px] w-full rounded-tl-[140px]' />
        <Image
          src='/images/cover.png'
          alt='cover'
          width={500}
          height={350}
          className='relative w-full rounded-tl-[140px] object-cover'
        />

        <a href='#explore'>
          <div className='z-10 -mt-[50px] flex w-full justify-end sm:-mt-[70px]'>
            <Image
              src='/images/stamp.png'
              alt='stamp'
              height={155}
              width={155}
              className='relative right-9'
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
