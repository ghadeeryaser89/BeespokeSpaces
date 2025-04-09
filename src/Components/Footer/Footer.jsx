import { Suspense } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <Suspense fallback={<div>Loading Footer...</div>}>
            <footer className="bg-darkBg text-lightText py-12 px-8 font-oswald">
                <hr className="border-darkText my-8 opacity-30" />

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
                    {/* About Section */}
                    <div className="md:w-1/3">
                        <h3 className="text-2xl font-semibold mb-4 text-darkText">{t("footer.about_us")}</h3>
                        <p className="text-lightText leading-relaxed">{t("footer.about_us_text")}</p>
                        <Link to="/about-us" className="mt-3 inline-block text-lightText hover:underline hover:text-darkText">
                            {t("footer.learn_more")}
                        </Link>
                    </div>

                    {/* Contact Section */}
                    <div className="md:w-1/3">
                        <h3 className="text-2xl font-semibold mb-4 text-darkText">{t("footer.contact_us")}</h3>
                        <p className="text-lightText">{t("footer.email")}: info@bespokehomes.art</p>
                        <p className="text-lightText">{t("footer.phone")}: +966 55 8132 555</p>
                        <Link to="/contact-us" className="mt-3 inline-block text-lightText hover:underline hover:text-darkText">
                            {t("footer.get_in_touch")}
                        </Link>
                    </div>

                    {/* Information Section */}
                    <div className="md:w-1/3">
                        <h3 className="text-2xl font-semibold mb-4 text-darkText">{t("footer.information")}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/privacy-policy" className="text-lightText hover:text-darkText transition">
                                    {t("footer.privacy_policy")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-conditions" className="text-lightText hover:text-darkText transition">
                                    {t("footer.terms_conditions")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="max-w-7xl mx-auto border-t border-darkText mt-8 py-4 text-center">
                    <p className="text-sm text-darkText">
                        &copy; {new Date().getFullYear()} Bespoke Spaces. {t("footer.rights")}
                    </p>
                </div>
            </footer>
        </Suspense>
    );
};

export default Footer;
