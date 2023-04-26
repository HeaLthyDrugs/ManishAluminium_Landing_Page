'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
   <a href='#whatsapp'><img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNOsNjGplzdM-MvYixG5xCEr5NQDXkIUQpw&usqp=CAU"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
   </a>
   
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Aluminium
      </h2>
      <a target='_blank' href='tel:+919960165271'><img
        src="https://cdn.iconscout.com/icon/free/png-512/free-phone-1559-461603.png?f=avif&w=512"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
      </a>
    </div>
  </motion.nav>
);

export default Navbar;