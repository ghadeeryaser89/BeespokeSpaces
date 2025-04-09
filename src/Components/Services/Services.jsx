import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import { useTranslation } from "react-i18next"; 

const services = [
  { 
    id: 1, 
    src: "https://i.ibb.co/5Wr2gXYL/DSC00480.jpg", 
    titleKey: "services.real_estate", 
    descriptionKey: "services.description", 
    link: "/real-estate" 
  },
  { 
    id: 2, 
    src: "https://i.ibb.co/gZc8vWCZ/DSC00482.jpg", 
    titleKey: "services.interior_design", 
    descriptionKey: "services.description", 
    link: "/interior-design" 
  },
  { 
    id: 3, 
    src: "https://i.ibb.co/svbP9GjK/DSC00491.jpg", 
    titleKey: "services.real_estate_live", 
    descriptionKey: "services.description", 
    link: "/real-estate-services" 
  },
  { 
    id: 4, 
    src: "https://i.ibb.co/tpvLVLL4/IMG-2111.jpg", 
    titleKey: "services.property_and_facility_management", 
    descriptionKey: "services.description", 
    link: "/interior-design-services" 
  }
];

const Services = () => {
  const { t } = useTranslation(); 

  return (
    <div className="bg-darkBg text-lightText font-oswald min-h-screen py-10 px-4 md:px-16 lg:px-24">
      {/* Hero Section */}
      <section className="text-center mb-12 mt-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-xl"
        >
          <motion.img
            src={services[0].src}
            alt="Services"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover brightness-75"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 sm:p-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-accentLight mb-4 tracking-wide drop-shadow-lg"
            >
              {t("services.our_services")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
            >
              {t("services.description")}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Services List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Link to={service.link} key={service.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-darkBg p-6 sm:p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300 hover:shadow-xl hover:bg-accentDark"
            >
              <motion.img 
                src={service.src} 
                alt={service.titleKey} 
                className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover rounded-lg shadow-md mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h2 className="text-2xl sm:text-3xl text-accentLight mb-3 font-semibold">
                {t(service.titleKey)} 
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-subtextDark">
                {t(service.descriptionKey)}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
