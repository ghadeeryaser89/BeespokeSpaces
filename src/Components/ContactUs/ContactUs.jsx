import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const ContactUs = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="bg-lightBg text-lightText py-20 px-6 flex justify-center  mt-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full grid md:grid-cols-2 gap-12"
      >
        {/* Contact Info & Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl font-oswald font-bold mb-6 text-darkText">
            {t("contact.title")}
          </h2>
          <div className="mb-8 space-y-2">
            <p>
              <strong>{t("contact.addressLabel")}:</strong> Riyadh, Saudi Arabia
            </p>
            <p>
              <strong>{t("contact.callLabel")}:</strong> +966 55 8132 555
            </p>
            <p>
              <strong>{t("contact.emailLabel")}:</strong> info@bespokehomes.art
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contact.namePlaceholder")}
              className="w-full border border-highlight bg-backgroundAlt/30 p-3 text-darkText placeholder-subtextLight rounded-lg focus:ring-2 focus:ring-darkText focus:outline-none"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.emailPlaceholder")}
              className="w-full border border-highlight bg-backgroundAlt/30 p-3 text-darkText placeholder-subtextLight rounded-lg focus:ring-2 focus:ring-darkText focus:outline-none"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={t("contact.subjectPlaceholder")}
              className="w-full border border-highlight bg-backgroundAlt/30 p-3 text-darkText placeholder-subtextLight rounded-lg focus:ring-2 focus:ring-darkText focus:outline-none"
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.messagePlaceholder")}
              className="w-full border border-highlight bg-backgroundAlt/30 p-3 text-darkText placeholder-subtextLight h-32 rounded-lg focus:ring-2 focus:ring-darkText focus:outline-none"
            ></motion.textarea>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mr-2 accent-highlight w-5 h-5"
              />
              <label htmlFor="terms" className="text-sm">
                {t("contact.terms")} {" "}
                <span className="font-bold">{t("contact.termsConditions")}</span>
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="inline-block mt-6 px-8 py-3 bg-lightText text-subtextDark font-semibold transition border-2 border-accentLight font-playfair hover:bg-darkText hover:border-darkText rounded-lg"
            >
              {t("contact.sendButton")}
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full overflow-hidden rounded-lg shadow-lg h-[500px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1855575.336546754!2d47.943809594340166!3d24.721023435888597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1743261767647!5m2!1sar!2seg"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
