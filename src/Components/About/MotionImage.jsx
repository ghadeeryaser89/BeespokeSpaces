/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const MotionImage = ({ src, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl"
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-[650px] object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
      <div className="absolute inset-0 bg-lightBg bg-opacity-20 flex flex-col justify-center items-center p-8">
       
       
      </div>
    </motion.div>
  );
};

export default MotionImage;
