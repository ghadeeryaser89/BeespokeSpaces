import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const RealEstateServices = () => {
  const { t } = useTranslation();

  const services = [
    { key: "investment_advisory", description: "investment_advisory_desc" },
    { key: "property_acquisition", description: "property_acquisition_desc" },
    { key: "sales_transactions", description: "sales_transactions_desc" },
    { key: "leasing_tenant_management", description: "leasing_tenant_management_desc" }
  ];

  return (
    <div className="bg-darkBg text-lightText font-oswald min-h-screen">
      {/* 🏠 Page Header */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
        <motion.img
          src="https://i.ibb.co/4qtRkwj/Bespoke-Spaces-Company-Profile-2.jpg"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover brightness-75"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-lightText drop-shadow-lg text-center max-w-[90%] text-subtextDark"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {t("real_estate_services.title")}
        </motion.h1>
      </div>

      {/* 🏢 Services Section */}
      <div className="py-16 px-4 sm:px-8 md:px-20 lg:px-32">
        <div className="relative flex flex-col items-center">
          {/* Horizontal Timeline Line */}
          <motion.div
            className="hidden md:block absolute top-0 w-full border-t-2 border-lightText"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full pt-3 relative">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                className="relative flex flex-col items-center text-center bg-backgroundAlt/20 p-6 sm:p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
              >
                {/* 🔹 Circular Indicator */}
                <div className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-lightText rounded-full top-[-20px] sm:top-[-30px] left-1/2 transform -translate-x-1/2 border-4 border-lightText" />

                {/* 🔸 Service Title */}
                <h2 className="text-lg sm:text-xl md:text-2xl text-lightText font-semibold mb-3">
                  {t(`real_estate_services.${service.key}`)}
                </h2>

                {/* 📜 Service Description */}
                <p className="text-sm sm:text-md text-subtextLight leading-relaxed">
                  {t(`real_estate_services.${service.description}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateServices;
