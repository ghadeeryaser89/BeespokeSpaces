import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Target, ChartNoAxesCombined  } from "lucide-react"; // 👈 Added Eye icon for Vision

// Lazy Load Components
const MotionSection = lazy(() => import("./MotionSection"));
const MotionImage = lazy(() => import("./MotionImage"));

const heroImage = "https://i.ibb.co/7xZ7hy1j/Bespoke-Spaces-Company-Profile-5.jpg";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-darkBg text-lightText font-oswald min-h-screen py-16 px-6 md:px-20 lg:px-32">
      {/* Hero Section */}
      <section className="text-center mb-20 relative mt-10">
        <h1 className="text-5xl md:text-6xl font-bold text-darkText mb-10 animate-fadeInUp">
          Bespoke Spaces
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <MotionImage
            src={heroImage}
            alt={t("about.hero_alt")}
            className="rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </Suspense>
      </section>

      {/* Company Overview Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <MotionSection title={t("about.company_overview.title")}>
          <p className="text-darkBrown text-center max-w-4xl mx-auto mt-10 animate-fadeIn text-xl md:text-2xl font-light leading-relaxed">
            {t("about.description")}
          </p>
        </MotionSection>
      </Suspense>

      {/* Vision & Mission Section */}
      <section className="my-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-darkText font-bold uppercase tracking-widest animate-fadeInUp">
            {t("about.vision_mission.title")}
          </h2>

          <p className="text-darkBrown text-lg md:text-xl mt-4 max-w-2xl mx-auto font-light animate-fadeIn">
            {t("about.vision_mission.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-darkBrown">
  {/* Vision Card */}
  <div className="group bg-backgroundAlt/30 backdrop-blur-lg p-10 rounded-3xl border border-accentLight shadow-lg hover:shadow-2xl hover:scale-[1.03] transition duration-500 relative overflow-hidden flex flex-col items-center text-center">
    {/* Icon */}
    <div className="flex justify-center items-center mb-6">
      <ChartNoAxesCombined className="h-20 w-20 text-caféAuLait" />
    </div>

    <h3 className="text-3xl font-bold mb-4 tracking-wide">
      {t("about.vision_mission.vision")}
    </h3>
    <p className="text-base md:text-lg leading-relaxed font-medium">
      {t("about.vision_mission.details.vision")}
    </p>
    <div className="absolute top-0 right-0 w-24 h-24 bg-caféAuLait opacity-10 rounded-bl-full"></div>
  </div>

  {/* Mission Card */}
  <div className="group bg-backgroundAlt/30 backdrop-blur-lg p-10 rounded-3xl border border-accentLight shadow-lg hover:shadow-2xl hover:scale-[1.03] transition duration-500 relative overflow-hidden flex flex-col items-center text-center">
    {/* Icon */}
    <div className="flex justify-center items-center mb-6">
      <Target className="h-20 w-20 text-caféAuLait" />
    </div>

    <h3 className="text-3xl font-bold mb-4 tracking-wide">
      {t("about.vision_mission.mission")}
    </h3>
    <p className="text-base md:text-lg leading-relaxed font-medium">
      {t("about.vision_mission.details.mission")}
    </p>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-caféAuLait opacity-10 rounded-tr-full"></div>
  </div>
</div>

      </section>

      {/* Our Clients Section */}
      <section className="mb-10 text-center">
        <h2 className="text-4xl text-darkText mb-16 tracking-wide font-bold uppercase animate-fadeInUp">
          {t("about.clients.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 max-w-7xl mx-auto px-6">
          {[
            {
              title: "about.clients.categories.interior_design",
              images: [
                "https://i.ibb.co/tpq18rbF/image.png",
                "https://i.ibb.co/nq2p4JTK/word.png",
              ],
            },
            {
              title: "about.clients.categories.real_estate",
              images: ["https://i.ibb.co/XfT4WZD7/realstate.png"],
            },
            {
              title: "about.clients.categories.facility_management",
              images: [
                "https://i.ibb.co/Y40Kcffg/image.png",
                "https://i.ibb.co/fYd6g6V2/albani.png",
              ],
            },
            {
              title: "about.clients.categories.construction",
              images: [
                "https://i.ibb.co/h6vsFHH/rock.png",
                "https://i.ibb.co/HT0x7gHQ/rimetrica.png",
              ],
            },
          ].map((section, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg sm:text-xl text-lightText font-semibold mb-6 tracking-wide relative inline-block">
                {t(section.title)}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {section.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="w-24 h-24 p-2 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:opacity-90 rounded-xl bg-backgroundAlt/30 backdrop-blur-md"
                  >
                    <img
                      src={image}
                      alt={t(section.title)}
                      className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
