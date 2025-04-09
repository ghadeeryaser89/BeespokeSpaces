import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ConstructionDevelopment = () => {
  const { t } = useTranslation();

  // List of services
  const services = [
    { key: "siteDevelopment", title: "siteDevelopment.title", description: "siteDevelopment.description" },
    { key: "structuralCivilWorks", title: "structuralCivilWorks.title", description: "structuralCivilWorks.description" },
    { key: "mep", title: "mep.title", description: "mep.description" },
    { key: "finishingFitOut", title: "finishingFitOut.title", description: "finishingFitOut.description" }
  ];

  return (
    <div className="bg-darkBg text-lightText font-oswald min-h-screen">
      {/* 🏗️ Page Header */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
        <motion.img
          src="https://i.ibb.co/m5LsGMJp/Bespoke-Spaces-Company-Profile-3.jpg"
          alt="Construction Development"
          className="w-full h-full object-cover brightness-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-lightText drop-shadow-lg text-center max-w-[90%] text-subtextDark"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("constructionDevelopment.title")}
        </motion.h1>
      </div>

      {/* 🏗️ Services Section */}
      <div className="py-16 px-4 sm:px-8 md:px-20 lg:px-32">
        <div className="relative flex flex-col items-center">
          {/* Horizontal Timeline Line */}
          <motion.div
            className="hidden md:block absolute top-0 w-full border-t-2 border-lightText"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 w-full pt-3 relative">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                className="relative flex flex-col items-center text-center bg-backgroundAlt/20 p-6 sm:p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
              >
                {/* 🔹 Circular Indicator */}
                <div className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-lightText rounded-full top-[-20px] sm:top-[-30px] left-1/2 transform -translate-x-1/2 border-4 border-lightText" />

                {/* 🔸 Service Title */}
                <h2 className="text-lg sm:text-xl md:text-2xl text-lightText font-semibold mb-3">
                  {t(`constructionDevelopment.${service.key}.title`)}
                </h2>

                {/* 📜 Service Description */}
                <p className="text-sm sm:text-md text-subtextLight leading-relaxed">
                  {t(`constructionDevelopment.${service.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionDevelopment;
