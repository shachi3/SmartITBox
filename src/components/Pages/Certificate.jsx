import React from "react";
import cerficate1 from "../../assets/certificate1.jpg";
import cerficate2 from "../../assets/certificate2.jpg";
import cerficate3 from "../../assets/certificate3.jpg";

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      company: "INSTAA TOOL",
      type: "Certificate of Appreciation",
      image: cerficate1,
    },
    {
      id: 2,
      company: "AVANTI Overseas Pvt. Ltd.",
      type: "Certificate of Appreciation",
      image: cerficate2,
    },
    {
      id: 3,
      company: "RMC Switchgears Ltd.",
      type: "Certificate of Appreciation",
      image: cerficate3,
    },
    {
      id: 4,
      company: "PARAMOUNT PRODUCTS PVT. LTD.",
      type: "Certificate of Appreciation",
      image: cerficate3,
    },
    {
      id: 5,
      company: "DNS CONCRETE LLP",
      type: "Certificate of Appreciation",
      image: cerficate2,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 pb-16 mt-6">
      <div className="max-w-5xl mx-auto px-5 text-center mb-16">
        <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Trust & Recognition
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Certificates of <span className="text-yellow-500">Appreciation</span>
        </h1>

        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
          Recognized by industry leaders for delivering reliable business
          automation and Google Workspace solutions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={cert.id} className="group">
              <div className="relative bg-white rounded-2xl overflow-hidden border-4 border-yellow-50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.company}
                    className="w-full h-auto aspect-380/520 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {index === 0 && (
                    <button className="absolute top-4 right-4 bg-yellow-400 hover:bg-yellow-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-10 shrink-0">
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="p-5 bg-white">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                    {cert.company}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {cert.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
