'use client';
import { motion } from 'framer-motion';
import { navVariants } from 'utils/motion';

import NextImage from '@/components/NextImage';

import styles from '@/styles';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} relative py-8`}
  >
    <div className='gradient-01 absolute inset-0 w-[50%]' />
    <div
      className={`flex items-center justify-between ${styles.innerWidth} mx-auto text-white`}
    >
      <NextImage src='/svg/search.svg' alt='search' width={19} height={19} />
      <h2 className='text-[24px] font-extrabold leading-[30px]'>METAVERSUS</h2>
      <NextImage src='/svg/menu.svg' alt='menu' width={20} height={14} />
    </div>
  </motion.nav>
);

export default Navbar;
