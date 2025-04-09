/* eslint-disable react/prop-types */
const ServiceModal = ({ service, onClose, t }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
            <div className="bg-darkBg p-6 rounded-lg shadow-lg max-w-md w-full relative">
                <button
                    className="absolute top-2 right-2 text-accentDark hover:text-highlight transition"
                    onClick={onClose}
                >
                    X
                </button>
                <img
                    src={service.src}
                    alt={t(service.title)}
                    className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="text-2xl font-bold mt-4 text-accentLight">
                    {t(service.title)}
                </h2>
                <p className="text-lightText mt-2">{t(service.description)}</p>
            </div>
        </div>
    );
};

export default ServiceModal;
