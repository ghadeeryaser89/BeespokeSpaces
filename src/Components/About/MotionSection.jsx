/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const MotionSection = ({ title, content, children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-20 max-w-4xl mx-auto text-center bg-lightBg p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <h2 className="text-4xl text-darkText mb-8 font-semibold tracking-wide leading-tight">
        {title}
      </h2>
      <p className="text-lg leading-relaxed mb-6 text-lightText opacity-90">
        {content}
      </p>
      {children}
    </motion.section>
  );
};

export default MotionSection;
