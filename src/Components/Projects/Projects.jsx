/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const projects = [
    { 
        id: 1, 
        title: "mazaya_towers", // Translation key instead of hardcoded text
        image: "https://i.ibb.co/Lz689HrH/jpg.webp",
    },
    { 
        id: 2, 
        title: "villa_sulaymaniyah", // Changed to a translation key
        image: "https://i.ibb.co/m5hqLdt5/Screenshot-342.png",
    },

    {
        id: 3, 
        title: "modern_apartment.title",  // Translation key instead of hardcoded text
        image: "https://i.ibb.co/21gfq92Z/IMG-2118.jpg",
    },
    { 
        id: 4, 
        title: "modern_najdi_apartment.title", // Translation key instead of hardcoded text
        image: "https://i.ibb.co/hxTKxQh2/DSC00458.jpg",
    },
    { 
        id: 5, 
        title: "bespoke_signature_office.title", // Translation key instead of hardcoded text
        image: "https://i.ibb.co/6cr27MTK/IMG-20250807-WA0068.jpg",
    },
  
];

const ProjectsSection = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(); // Import translation hook

    return (
        <section className="bg-lightBg text-darkText py-20 px-6 flex justify-center ">
            <div className="max-w-7xl w-full">
                {/* Header */}
                <motion.h2
                    className="text-4xl font-oswald mb-12 text-center text-lightText tracking-wide uppercase"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {t("projects_title")}
                </motion.h2>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
                    }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="cursor-pointer bg-backgroundAlt/30 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:bg-accentDark"
                            onClick={() => navigate(`/projects/${project.id}`)}
                        >
                            {/* Image */}
                            <motion.img
                                src={project.image}
                                alt={t(project.title)}
                                className="w-full h-[300px] object-cover rounded-t-2xl transition-all duration-300 hover:brightness-90"
                            />

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold font-oswald text-lightText transition-all duration-300 hover:text-espresso">
                                    {t(project.title)}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
