import AboutUsContent from "../About/AboutUsHome.jsx";
import ServicesSlider from "../Services/ServiceHome.jsx";
import ProjectsSection from "../Projects/ProjectsHome.jsx";
import ServiceModal from "../Services/ServiceModal.jsx";
import { useState } from "react";



const AboutUs = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleImageClick = (service) => {
        setSelectedService(service);
    };

    const handleCloseModal = () => {
        setSelectedService(null);
    };

    return (
        <>
            <AboutUsContent />
            <ServicesSlider onImageClick={handleImageClick} />
            <ProjectsSection />
            {selectedService && <ServiceModal service={selectedService} onClose={handleCloseModal} />}
        </>
    );
};

export default AboutUs;


