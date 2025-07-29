"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MyPhoto from '@/assets/images/kocenk.jpg';

const Photo = () => {
  return <div className="flex items-center justify-center w-full h-full relative">
    {/* image */}
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
    }}
    className="relative w-[250px] h-[250px] md:w-[298px] md:h-[298px] lg:w-[352px] lg:h-[352px] xl:w-[400px] xl:h-[400px] overflow-hidden rounded-full"
    >
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
        >
            <Image src={MyPhoto} priority quality={100} fill alt="" className="object-cover"/>
        </motion.div>
    </motion.div>

    {/* circle */}
    <motion.svg
    className="w-[254px] h-[254px] md:h-[304px] md:w-[304px] lg:w-[358px] lg:h-[358px] xl:h-[410px] xl:w-[410px] absolute"
    fill="transparent"
    viewBox="0 0 506 506"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
    >
        <motion.circle
        cx="253" 
        cy="253" 
        r="250" 
        stroke="#00ff99" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        initial={{
            strokeDasharray: "24 10 0 0"
        }} 
        animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360]
        }}
        transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
        }}
        />
    </motion.svg>
  </div>
  
}

export default Photo;