import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
    { id: 1, title: "mazaya towers", category: "commercial", image: "https://i.ibb.co/Lz689HrH/jpg.webp" },
    { id: 2, title: "Al Sulaymaniah Villa", category: "residential", image: "https://i.ibb.co/m5hqLdt5/Screenshot-342.png" },
    { id: 3, title: "Modern Apartment", category: "residential", image: "https://i.ibb.co/21gfq92Z/IMG-2118.jpg" },
    { id: 4, title: "Modern Najdi Apartment", category: "residential", image: "https://i.ibb.co/hxTKxQh2/DSC00458.jpg" },
];

const ProjectsSection = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [isRTL, setIsRTL] = useState(i18n.language === "ar");

    useEffect(() => {
        setIsRTL(i18n.language === "ar");
    }, [i18n.language]);

    return (
        <section className="bg-darkBg text-lightText py-20 px-6 flex justify-center relative">
            <div className="max-w-7xl w-full text-start relative">
                {/* Title */}
                <h2 className="text-3xl text-darkText font-oswald mb-6">{t("projects.title")}</h2>

                {/* Navigation Arrows */}
                <button className="swiper-button-prev-custom absolute top-1/2 left-0 md:left-0 lg:left-[-10px] xl:left-[-38px] z-10 transform -translate-y-1/2 text-lightText hover:text-darkText transition">
                    <ChevronLeft size={40} />
                </button>
                <button className="swiper-button-next-custom absolute top-1/2 right-0 md:right-0 lg:right-[-10px] xl:right-[-38px] z-10 transform -translate-y-1/2 text-lightText hover:text-darkText transition">
                    <ChevronRight size={40} />
                </button>

                {/* Swiper Slider */}
                <Swiper
                    dir={isRTL ? "ltr" : "ltr"}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom",
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Navigation, Autoplay]}
                    className="w-full"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id} className="flex flex-col items-center">
                            <motion.img
                                src={project.image}
                                className="w-full h-64 object-cover shadow-lg rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                onClick={() => navigate(`/projects/${project.id}`)}
                            />
                            <div className="text-center mt-4">
                                <h3 className="text-lg font-bold font-oswald text-lightText">{t(`projects.items.${project.id}.title`)}</h3>
                                <p className="text-darkVanilla text-sm font-playfair">{t(`projects.items.${project.id}.category`)}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProjectsSection;
