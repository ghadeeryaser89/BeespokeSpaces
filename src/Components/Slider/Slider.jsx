import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Slider = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const isRTL = i18n.dir() === "rtl"; // Detect Arabic for alignment

    const slides = t("slider.slides", { returnObjects: true });

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 6000); // Auto-slide every 6 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    // Function to handle clicking the slide
    const handleSlideClick = () => {
        if (slides[currentIndex].path) {
            navigate(slides[currentIndex].path);
        }
    };

    return (
        <section className="relative h-screen flex justify-center items-center bg-darkBg overflow-hidden">
            {/* Clickable Container */}
            <div
                className="relative w-full h-full flex justify-center items-center cursor-pointer"
                onClick={handleSlideClick}
            >
                {/* Image Transition */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={slides[currentIndex].image}
                        alt="Slide"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute w-full h-full object-cover"
                    />
                </AnimatePresence>

                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-darkBg bg-opacity-60" />

                {/* Overlay Text (Also Clickable) */}
                <div
                    className={`font-oswald absolute top-1/2 ${isRTL ? "right-10 md:right-16 lg:right-24 text-right" : "left-10 md:left-16 lg:left-24 text-left"} 
                    transform -translate-y-1/2 text-darkText max-w-2xl`}
                >
                    <h1
                        className=" text-darkText text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg transition duration-300 hover:text-lightText"
                        onClick={handleSlideClick}
                    >
                        {slides[currentIndex].title}
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Slider;
