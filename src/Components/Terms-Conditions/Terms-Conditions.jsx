import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-darkBg m-8 text-lightText min-h-screen flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-lightBg p-8 rounded-lg shadow-lg w-full max-w-3xl border border-[#bab09b]"
            >
                <h2 className="text-3xl font-bold text-center mb-4 text-accentDark font-oswald">
                    {t("terms.title")}
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-lightText mb-4">{t("terms.intro")}</p>

                    <h3 className="text-xl font-semibold text-highlight mt-4">{t("terms.section1.title")}</h3>
                    <p className="text-lightText mb-4">{t("terms.section1.description")}</p>

                    <h3 className="text-xl font-semibold text-highlight mt-4">{t("terms.section2.title")}</h3>
                    <p className="text-lightText mb-4">{t("terms.section2.description")}</p>

                    <h3 className="text-xl font-semibold text-highlight mt-4">{t("terms.section3.title")}</h3>
                    <p className="text-lightText mb-4">{t("terms.section3.description")}</p>

                    <h3 className="text-xl font-semibold text-highlight mt-4">{t("terms.section4.title")}</h3>
                    <p className="text-lightText">{t("terms.section4.description")}</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TermsAndConditions;
