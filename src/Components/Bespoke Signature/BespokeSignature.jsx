import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { XCircle, PlayCircle } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const media = [
  { type: "video", src: "https://res.cloudinary.com/dvzvciomo/video/upload/v1754522033/WhatsApp_Video_2025-08-06_at_19.29.30_f96f36a8_luk8nx.mp4" },
  { type: "image", src: "https://i.ibb.co/zHSW3qVf/IMG-20250807-WA0007.jpg" },
  { type: "image", src: "https://i.ibb.co/PZVrnrXw/IMG-20250807-WA0010.jpg" },
  { type: "image", src: "https://i.ibb.co/KzzzZpNh/IMG-20250807-WA0011.jpg" },
  { type: "image", src: "https://i.ibb.co/p6wQ8j6h/IMG-20250807-WA0022.jpg" },
  { type: "image", src: "https://i.ibb.co/k6Vc9b6K/IMG-20250807-WA0026.jpg" },
  { type: "image", src: "https://i.ibb.co/YFB8Dpps/IMG-20250807-WA0052.jpg" },
  { type: "image", src: "https://i.ibb.co/Rp0bNYKd/IMG-20250807-WA0053.jpg" },
  { type: "image", src: "https://i.ibb.co/Tqh4CTwp/IMG-20250807-WA0058.jpg" },
  { type: "image", src: "https://i.ibb.co/mC3DW2d4/IMG-20250807-WA0064.jpg" },
  { type: "image", src: "https://i.ibb.co/6cr27MTK/IMG-20250807-WA0068.jpg" },
  { type: "image", src: "https://i.ibb.co/rGmmmTRg/IMG-20250807-WA0072.jpg" },
];

const BespokeSignatureSlider = () => {
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

  const paragraphs = [
    t("bespoke_signature_office.description"),
    t("bespoke_signature_office.luxury_details"),
    t("bespoke_signature_office.planning"),
    t("bespoke_signature_office.signature_touches"),
    t("bespoke_signature_office.philosophy")
  ];

  return (
    <section className="bg-darkBg text-lightText py-12 px-6 flex flex-col items-center">
      <h2 className="mt-6 text-4xl font-oswald text-darkText text-center tracking-wide uppercase pt-12">
        {t("bespoke_signature_office.title")}
      </h2>

      {/* Slider Section */}
      <div className="w-full max-w-5xl overflow-hidden mt-6">
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

      {/* Modal for full image/video */}
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

      {/* Paragraphs */}
      <div className="text-lg text-subtextLight leading-relaxed tracking-wide max-w-4xl text-center mt-10 space-y-6">
        {paragraphs.slice(0, expanded ? paragraphs.length : 1).map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 px-5 py-2 bg-accentLight text-darkText rounded-lg text-sm font-semibold hover:bg-accentDark transition"
      >
        {expanded
          ? t("modern_apartment.read_less")
          : t("modern_apartment.read_more")}
      </button>
    </section>
  );
};

export default BespokeSignatureSlider;
