/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OurClients = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-12 px-4 md:px-16 lg:px-24 bg-[--background-color] mt-12">
      {/* Section 1: Our Clients */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto bg-[--foreground-color] p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-[--accent-1] mb-10 text-center uppercase tracking-widest">
          {t("our_clients.title")}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {[
            "https://i.ibb.co/XkSD8y0Y/34.png",
            "https://i.ibb.co/5yHGPM3/35.png",
            "https://i.ibb.co/fG0t41qQ/36.png",
            "https://i.ibb.co/TMcThN4D/37.png",
            "https://i.ibb.co/gZTpX9G5/39.png",
            "https://i.ibb.co/SwK2r758/40.png",
            "https://i.ibb.co/JwfYjxQM/41.png",
            "https://i.ibb.co/dJmdhkCZ/42.png",
            "https://i.ibb.co/rR6MbYpg/43.png",
            "https://i.ibb.co/h1fVRSv9/44.png",
          ].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Client ${index + 1}`}
              className="h-24 object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Section 2: Trade Partners */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto bg-[--foreground-color] p-6 mt-16 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-[--accent-1] mb-10 text-center uppercase tracking-widest">
          {t("our_clients.trade_partners")}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {[
            "https://i.ibb.co/4gK5vGdn/28.png",
            "https://i.ibb.co/VpTt9mF3/29.png",
            "https://i.ibb.co/b5kDnpZg/30.png",
            "https://i.ibb.co/WwY6h6Y/31.png",
            "https://i.ibb.co/W9ygv5w/32.png",
            "https://i.ibb.co/M5399dxT/33.png",
          ].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Partner ${index + 1}`}
              className="h-24 object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurClients;
