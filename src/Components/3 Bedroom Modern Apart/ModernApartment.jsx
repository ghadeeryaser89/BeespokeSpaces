import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { XCircle, PlayCircle } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ الصور والفيديو في نفس المصفوفة
const media = [
  { type: "video", src: "https://res.cloudinary.com/dvzvciomo/video/upload/v1744552285/nigcmbo0eudrrysrc3cb.mp4" },
  { type: "image", src: "https://i.ibb.co/9mky7gjT/IMG-2111.jpg" },
  { type: "image", src: "https://i.ibb.co/zWV5LHFf/IMG-2113.jpg" },
  { type: "image", src: "https://i.ibb.co/21gfq92Z/IMG-2118.jpg" },
  { type: "image", src: "https://i.ibb.co/fGNYC7WN/IMG-2163.jpg" },
  { type: "image", src: "https://i.ibb.co/zH22nLjC/IMG-2180.jpg" },
  { type: "image", src: "https://i.ibb.co/7tDbPcVL/IMG-2186.jpg" },
  { type: "image", src: "https://i.ibb.co/xKzh1xt2/IMG-2187.jpg" },
  { type: "image", src: "https://i.ibb.co/VWxnk1wg/IMG-2189.jpg" },
  { type: "image", src: "https://i.ibb.co/V03tt4Vs/IMG-2194.jpg" },
];

const ModernApartmentSlider = () => {
  const sliderRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
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
      <h2 className="mt-6 text-4xl font-oswald text-darkText text-center tracking-wide uppercase pt-12">
        {t("modern_apartment.title")}
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
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* ✅ مودال العرض */}
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
                key={selectedMedia.src}
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
          ? t("modern_apartment.description")
          : `${t("modern_apartment.description").substring(0, 200)}...`}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 px-4 py-2 bg-accentLight text-darkText rounded-lg text-sm font-semibold hover:bg-accentDark transition"
      >
        {expanded
          ? t("modern_apartment.read_less")
          : t("modern_apartment.read_more")}
      </button>
    </section>
  );
};

export default ModernApartmentSlider;
