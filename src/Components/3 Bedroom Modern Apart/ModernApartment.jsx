import { useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    "https://i.ibb.co/9mky7gjT/IMG-2111.jpg",
    "https://i.ibb.co/zWV5LHFf/IMG-2113.jpg",
    "https://i.ibb.co/21gfq92Z/IMG-2118.jpg",
    "https://i.ibb.co/fGNYC7WN/IMG-2163.jpg",
    "https://i.ibb.co/zH22nLjC/IMG-2180.jpg",
    "https://i.ibb.co/7tDbPcVL/IMG-2186.jpg",
    "https://i.ibb.co/xKzh1xt2/IMG-2187.jpg",
    "https://i.ibb.co/VWxnk1wg/IMG-2189.jpg",
    "https://i.ibb.co/V03tt4Vs/IMG-2194.jpg",
];

const ModernApartmentSlider = () => {
    const [expanded, setExpanded] = useState(false);
    const { t } = useTranslation();

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
        arrows: false,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="bg-darkBg text-lightText py-12 px-6 flex flex-col items-center">
            {/* Title */}
            <h2 className="mt-6 text-4xl font-oswald text-darkText text-center tracking-wide uppercase pt-12">
                {t("modern_apartment.title")}
            </h2>

            {/* Slider */}
            <div className="w-full max-w-5xl overflow-hidden">
                <Slider {...settings} className="overflow-hidden">
                    {images.map((img, index) => (
                        <div key={index} className="p-3">
                            <div className="relative group">
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="h-[250px] w-full object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-10 transition-opacity"></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Description with "Read More" button */}
            <p className="text-lg text-subtextLight leading-relaxed tracking-wide max-w-4xl text-center mt-8">
                {expanded ? t("modern_apartment.description") : `${t("modern_apartment.description").substring(0, 200)}...`}
            </p>
            <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 px-4 py-2 bg-accentLight text-darkText rounded-lg text-sm font-semibold hover:bg-accentDark transition"
            >
                {expanded ? t("modern_apartment.read_less") : t("modern_apartment.read_more")}
            </button>
        </section>
    );
};

export default ModernApartmentSlider;
