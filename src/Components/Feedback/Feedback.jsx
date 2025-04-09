import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ComplainForm = () => {
    const { t } = useTranslation();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [location, setLocation] = useState("");
    const [service, setService] = useState("");
    const [description, setDescription] = useState("");
    const [buildingNum, setBuildingNum] = useState("");  
    const [floor, setFloor] = useState("");  
    const [unitNum, setUnitNum] = useState("");  
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const services = [
        { value: "elevators", label: t("complain.elevators") },
        { value: "hvac", label: t("complain.hvac") },
        { value: "plumbing", label: t("complain.plumbing") },
        { value: "cctv", label: t("complain.cctv") },
        { value: "pest_control", label: t("complain.pest_control") },
        { value: "security", label: t("complain.security") },
        { value: "generators", label: t("complain.generators") },
        { value: "fire_safety_systems", label: t("complain.fire_safety_systems") },
        { value: "electrical_works", label: t("complain.electrical_works") },
        { value: "waste_management", label: t("complain.waste_management") },
        { value: "cleaning_services", label: t("complain.cleaning_services") },
        { value: "other", label: t("complain.other") },
    ];

    const validateForm = () => {
        let newErrors = {};
        if (!firstName.trim()) newErrors.firstName = t("complain.errors.first_name_required");
        if (!lastName.trim()) newErrors.lastName = t("complain.errors.last_name_required");
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = t("complain.errors.invalid_email");
        }
        if (!phone.trim() || !/^\d{11}$/.test(phone)) {
            newErrors.phone = t("complain.errors.invalid_phone");
        }
        if (!country.trim()) newErrors.country = t("complain.errors.country_required");
        if (!location.trim()) newErrors.location = t("complain.errors.location_required");
        if (!service.trim()) newErrors.service = t("complain.errors.service_required");
        if (!description.trim()) newErrors.description = t("complain.errors.description_required");

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const templateParams = {
                firstName,
                lastName,
                email,
                phone,
                country,
                location,
                service,
                description,
                buildingNum,  
                floor,  
                unitNum,  
            };

            emailjs.send(
                "service_sb5lf0w",
                "template_xxxrppr",
                templateParams,
                "lhGvA_l5Z6vT_Pf3f"
            )
                .then(() => setSubmitted(true))
                .catch((error) => console.error("Failed to send email:", error));
        }
    };

    return (
        <div className="bg-lightBg min-h-screen flex items-center justify-center p-6 mt-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-darkBg p-10 rounded-2xl shadow-xl w-full max-w-xl border border-highlight"
            >
                <h2 className="text-3xl font-bold text-center mb-6 text-darkText">{t("complain.title")}</h2>
                {!submitted ? (
                    <motion.form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder={t("complain.first_name")} className="input-field w-full p-3 border border-highlight rounded-lg bg-backgroundAlt/30 text-darkText placeholder:text-darkText" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder={t("complain.last_name")} className="input-field w-full p-3 border border-highlight rounded-lg bg-backgroundAlt/30 text-darkText placeholder:text-darkText" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <input type="email" placeholder={t("complain.email")} className="input-field w-full p-3 border border-highlight rounded-lg bg-backgroundAlt/30 text-darkText placeholder:text-darkText" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder={t("complain.phone")} className="input-field w-full p-3 border border-highlight rounded-lg bg-backgroundAlt/30 text-darkText placeholder:text-darkText" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <input type="text" placeholder={t("complain.country")} className="input-field w-full p-3 border border-highlight rounded-lg bg-backgroundAlt/30 text-darkText placeholder:text-darkText" value={country} onChange={(e) => setCountry(e.target.value)} />
                        <input type="text" placeholder={t("complain.location")} className="input-field w-full p-3 border border-highlight rounded-lg bg-backgroundAlt/30 text-darkText placeholder:text-darkText" value={location} onChange={(e) => setLocation(e.target.value)} />

                        <div className="grid grid-cols-3 gap-4">
                            <input type="text" placeholder={t("complain.buildingnum")} className="input-field w-full p-3 border border-highlight rounded-lg bg-backgroundAlt/30 text-darkText placeholder:text-darkText" value={buildingNum} onChange={(e) => setBuildingNum(e.target.value)} />
                            <input type="text" placeholder={t("complain.floor")} className="input-field w-full p-3 border border-highlight rounded-lg bg-backgroundAlt/30 text-darkText placeholder:text-darkText" value={floor} onChange={(e) => setFloor(e.target.value)} />
                            <input type="text" placeholder={t("complain.unitnum")} className="input-field w-full p-3 border border-highlight rounded-lg bg-backgroundAlt/30 text-darkText placeholder:text-darkText" value={unitNum} onChange={(e) => setUnitNum(e.target.value)} />
                        </div>

                        {/* Custom Dropdown for Service */}
                        <div className="relative">
                            <div
                                className="input-field w-full p-3 border border-highlight rounded-lg bg-backgroundAlt/30 text-darkText cursor-pointer"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                {service ? t(`complain.${service}`) : t("complain.select_service")}
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 w-full bg-backgroundAlt/90 border border-highlight rounded-lg z-10">
                                    {services.map((option) => (
                                        <div
                                            key={option.value}
                                            className="p-3 text-darkText hover:bg-accentLight cursor-pointer"
                                            onClick={() => {
                                                setService(option.value);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            {option.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <textarea placeholder={t("complain.description")} className="input-field w-full p-3 border border-highlight rounded-lg bg-backgroundAlt/30 text-darkText h-32 placeholder:text-darkText" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                        <motion.button type="submit" className="mt-4 px-6 py-3 bg-lightText text-subtextDark hover:bg-darkText font-semibold rounded-xl">
                            {t("complain.submit")}
                        </motion.button>
                    </motion.form>
                ) : (
                    <p className="text-green-600 text-center font-semibold">{t("complain.success")}</p>
                )}
            </motion.div>
        </div>
    );
};

export default ComplainForm;
