'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Manish Aluminium" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Manish Aluminium</span> is a team of experts in the field of aluminium window and door systems, dedicated to providing you with high-quality and innovative solutions for your residential or commercial property.{' '}
        <span className="font-extrabold text-white">
          Slide into Perfection
        </span>{' '}
        by using{' '}
        <span className="font-extrabold text-white">uPVC</span> Windows & Doors to add an architectural dimension to your home. uPVC windows in India keep out street noise, dust and pollution, rain and gale force winds. At the same time, they are energy efficient, low maintenance, and long-lasting.{' '}
        <span className="font-extrabold text-white">Explore</span> the Samples & Features by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;