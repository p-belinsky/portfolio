import { serviceData } from "@/assets/assets";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I offer
      </motion.h4>
      <motion.h2 
          initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}    
      
      
      className="text-center text-5xl font-Ovo">My Services</motion.h2>
      <motion.p
           initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}   
      
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a full stack developer from Pittsburgh, PA with 5 years of
        experience in multiple companies like Amazon, MSA, and Apple.
      </motion.p>

      <motion.div 
           initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}   
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer hover:bg-gray-100 hover:-translate-y-1 duration-500 dark:hover:bg-purple-950/50 dark:hover:shadow-white"
          >
            <Image src={icon} alt="icon" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <a href="#services" className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image
                src={assets.right_arrow}
                alt="right arrow icon"
                className="w-4"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
