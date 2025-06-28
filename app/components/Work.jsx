import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Work = ({isDarkMode}) => {

  return (
    <motion.div
            initial={{opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
    
    id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 
          initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}    
      className="text-center mb-2 text-lg font-Ovo">My portfolio</motion.h4>
      <motion.h2 
            initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}  
      className="text-center text-5xl font-Ovo">My latest work</motion.h2>
      <motion.p 
              initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      
      
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in full-stack development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 dark:text-black">
{workData.map((project, index) => (
  <a
  key={index}
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    
    className="block"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
      style={{ backgroundImage: `url(${project.bgImage})` }}
    >
      <motion.div
        initial={{ bottom: 20 }}
        whileHover={{ bottom: 28 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-10/12 rounded-md absolute left-1/2 -translate-x-1/2 py-3 px-5 flex flex-col md:flex-row md:items-center justify-between h-auto md:h-28 gap-3 "

      >
        <div className="overflow-hidden">
          <h2 className="font-semibold text-base sm:text-lg line-clamp-1">{project.title}</h2>
          <p className="text-sm sm:text-base text-gray-700 line-clamp-2">{project.description}</p>
        </div>
        <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition shrink-0 self-end md:self-auto">
          <Image src={assets.send_icon} alt="send icon" className="w-5" />
        </div>
      </motion.div>
    </motion.div>
  </a>
))}
      </motion.div>
      <motion.a 
              initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      
      href="#work" className="w-max flex items-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-100 duration-500 dark:text-white dark:border-white dark:hover:bg-purple-950">
        Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="right arrow bold icon" className="w-4"/>
      </motion.a>
    </motion.div>
  );
};

export default Work;
