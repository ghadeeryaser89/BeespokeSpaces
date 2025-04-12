import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://i.ibb.co/hxTKxQh2/DSC00458.jpg",
  "https://i.ibb.co/Ps58fkxZ/DSC00461.jpg",
  "https://i.ibb.co/5xhtC1KS/DSC00469.jpg",
  "https://i.ibb.co/MkJLvSqc/DSC00478.jpg",
  "https://i.ibb.co/5XqKFbT4/DSC00482.jpg",
  "https://i.ibb.co/b5QWBCJD/DSC00485.jpg",
  "https://i.ibb.co/mC5B0QdZ/DSC00489.jpg",
  "https://i.ibb.co/dwJPMQrm/DSC00491.jpg",
  "https://i.ibb.co/twt2FzBS/DSC00494.jpg",
  "https://i.ibb.co/BVPNJgRQ/DSC00499.jpg",
];

const ModernNajdiApartmentSlider = () => {
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

  // التحكم بالكيبورد
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
      {/* العنوان */}
      <h2 className="mt-6 text-4xl font-oswald text-center text-darkText tracking-wide uppercase pt-12">
        {t("modern_najdi_apartment.title")}
      </h2>

      {/* السلايدر */}
      <div className="w-full max-w-5xl overflow-hidden">
        <Slider {...settings} ref={sliderRef}>
          {images.map((img, index) => (
            <div key={index} className="p-3">
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  setSelectedImage(selectedImage === img ? null : img)
                }
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

      {/* الصورة الكبيرة اللي بتظهر تحت عند الضغط */}
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

      {/* الوصف مع زر اقرأ المزيد */}
      <p className="text-lg text-subtextLight leading-relaxed tracking-wide max-w-4xl text-center mt-8">
        {expanded
          ? t("modern_najdi_apartment.description")
          : `${t("modern_najdi_apartment.description").substring(0, 200)}...`}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 px-4 py-2 bg-accentLight text-darkText rounded-lg text-sm font-semibold hover:bg-accentDark transition"
      >
        {expanded
          ? t("modern_najdi_apartment.read_less")
          : t("modern_najdi_apartment.read_more")}
      </button>
    </section>
  );
};

export default ModernNajdiApartmentSlider;
