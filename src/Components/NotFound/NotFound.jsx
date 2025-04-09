import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-darkBg min-h-screen flex items-center justify-center text-lightText p-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-darkBg p-8 rounded-lg shadow-lg max-w-md text-center border border-highlight"
            >
                {/* Animated 404 Text */}
                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-6xl font-bold text-highlight font-oswald"
                >
                    404
                </motion.h1>

                <h2 className="text-2xl font-semibold mt-4 text-darkText">{t("notFound.title")}</h2>
                <p className="text-lightText mt-2">{t("notFound.message")}</p>

                {/* Animated Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link 
                        to="/" 
                        className="mt-6 inline-block bg-highlight text-darkText px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-accentDark hover:scale-105"
                    >
                        {t("notFound.button")}
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFound;
