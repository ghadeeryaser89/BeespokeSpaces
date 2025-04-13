import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { PlayCircle, XCircle } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const media = [
  { type: "video", src: "https://res.cloudinary.com/dvzvciomo/video/upload/v1744551859/fjzlz6qb9p8lwbrnrjol.mp4" },
  { type: "image", src: "https://i.ibb.co/hxTKxQh2/DSC00458.jpg" },
  { type: "image", src: "https://i.ibb.co/Ps58fkxZ/DSC00461.jpg" },
  { type: "image", src: "https://i.ibb.co/5xhtC1KS/DSC00469.jpg" },
  { type: "image", src: "https://i.ibb.co/MkJLvSqc/DSC00478.jpg" },
  { type: "image", src: "https://i.ibb.co/5XqKFbT4/DSC00482.jpg" },
  { type: "image", src: "https://i.ibb.co/b5QWBCJD/DSC00485.jpg" },
  { type: "image", src: "https://i.ibb.co/mC5B0QdZ/DSC00489.jpg" },
  { type: "image", src: "https://i.ibb.co/dwJPMQrm/DSC00491.jpg" },
  { type: "image", src: "https://i.ibb.co/twt2FzBS/DSC00494.jpg" },
  { type: "image", src: "https://i.ibb.co/BVPNJgRQ/DSC00499.jpg" },
];

const ModernNajdiApartmentSlider = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
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
    pauseOnHover: false,
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
    <section className="bg-darkBg text-lightText py-12 px-6 flex flex-col items-center relative">
      <h2 className="mt-6 text-4xl font-oswald text-center text-darkText tracking-wide uppercase pt-12">
        {t("modern_najdi_apartment.title")}
      </h2>

      <div className="w-full max-w-5xl overflow-hidden">
        <Slider {...settings} ref={sliderRef}>
          {media.map((item, index) => (
            <div key={index} className="p-3">
              <div
                className="relative group cursor-pointer"
                onClick={() => setSelectedMedia(item)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Slide ${index + 1}`}
                    className="h-[250px] w-full object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="relative">
                    <video
                      src={item.src}
                      className="h-[250px] w-full object-cover rounded-xl shadow-md"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-80 w-16 h-16 pointer-events-none" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-10 transition-opacity rounded-xl"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* المودال مع زر الإغلاق */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[1000] p-6">
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-black rounded-xl">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 z-[1001] text-white hover:text-red-400 transition"
            >
              <XCircle size={36} />
            </button>
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt="Selected"
                className="w-full max-h-[90vh] object-contain rounded-xl shadow-lg"
              />
            ) : (
              <video
                key={selectedMedia.src} // Reset video playback when reopened
                src={selectedMedia.src}
                className="w-full max-h-[90vh] object-contain rounded-xl shadow-lg"
                autoPlay
                controls
              />
            )}
          </div>
        </div>
      )}

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
