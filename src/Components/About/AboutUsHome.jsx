import { Suspense } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutUsContent = () => {
    const { t } = useTranslation();
    const aboutImage = "https://i.ibb.co/DPJG9RfV/Bespoke-Spaces-Company-Profile-6.jpg"; 

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <section className="bg-darkBg text-lightText py-20 px-6 flex justify-center">
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
                    {/* Text Section */}
                    <div className="md:w-5/12 text-left">
                        <Link to="/about-us">
                            <h2 className="text-4xl font-bold font-oswald mb-6 cursor-pointer text-darkText hover:text-lightText transition">
                                {t("about3.title")}
                            </h2>
                        </Link>
                        <p className="text-lg leading-relaxed font-playfair text-lightText">
                            {t("about3.description1")}
                        </p>
                        <p className="text-lg mt-4 font-playfair text-lightText">
                            {t("about3.description2")}
                        </p>
                        <Link 
                            to="/contact-us" 
                            className="inline-block mt-6 px-6 py-3 bg-lightText text-subtextDark font-semibold hover:bg-darkText transition border-2 border-[#bab09b] font-playfair rounded-md shadow-md hover:shadow-lg"
                        >
                            {t("about3.contact")}
                        </Link>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-7/12 flex justify-center">
                        <Link to="/about-us" className="relative group block">
                            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                                <img 
                                    src={aboutImage} 
                                    alt="About Us" 
                                    className="w-full h-full object-cover"
                                />
                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                                    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                                        {t("about3.more_about_us")}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </Suspense>
    );
};

export default AboutUsContent;
