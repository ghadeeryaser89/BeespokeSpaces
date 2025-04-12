import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://i.ibb.co/KzqB3vBR/Screenshot.png",
  "https://i.ibb.co/4ZZBsJCn/Screenshot-344.png",
  "https://i.ibb.co/zTm5Ys0p/Screenshot-343.png",
  "https://i.ibb.co/5xk8fWr9/Screenshot-341.png",
  "https://i.ibb.co/kgpFrMQx/Screenshot-31.png",
];

const ModernApartmentSlider = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    cssEase: "ease",
    pauseOnHover: true,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        sliderRef.current?.slickPrev();
      } else if (e.key === "ArrowRight") {
        sliderRef.current?.slickNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="bg-darkBg text-lightText py-12 px-6 flex flex-col items-center">
      <h2 className="mt-6 text-4xl font-oswald text-center text-darkText tracking-wide uppercase pt-12">
        {t("villa.title")}
      </h2>

      <div className="w-full max-w-5xl overflow-hidden">
        <Slider {...settings} ref={sliderRef}>
          {images.map((img, index) => (
            <div key={index} className="p-3">
              <div
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(selectedImage === img ? null : img)}
              >
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

      {/* الصورة الكبيرة اللي بتظهر عند الضغط */}
      {selectedImage && (
        <div className="mt-8">
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-4xl max-h-[500px] object-contain rounded-lg shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(null)}
          />
        </div>
      )}

      <p className="text-lg text-subtextLight leading-relaxed tracking-wide max-w-4xl text-center mt-8">
        {expanded ? t("villa.description") : `${t("villa.description").substring(0, 200)}...`}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 px-4 py-2 bg-accentLight text-darkText rounded-lg text-sm font-semibold hover:bg-accentDark transition"
      >
        {expanded ? t("villa.read_less") : t("villa.read_more")}
      </button>
    </section>
  );
};

export default ModernApartmentSlider;
