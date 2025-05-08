import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    // Define certificates that are stored in the public/certificates folder
    const staticCertificates = [
      {
        id: 1,
        title: "APEDA CERTIFICATE",
        pdfUrl: "/certificates/APEDA CERTIFICATE.pdf",
        thumbnailUrl: "/thumbnail/APEDA CERTIFICATE.jpg",
      },
      {
        id: 2,
        title: "FSSAI NEW LICENSE",
        pdfUrl: "/certificates/FSSAI NEW LICENSE.pdf",
        thumbnailUrl: "/thumbnail/FSSAI NEW LICENSE.jpg",
      },
      {
        id: 3,
        title: "GST REGISTRATION CERTIFICATE",
        pdfUrl: "/certificates/GST REGISTRATION CERTIFICATE.pdf",
        thumbnailUrl: "/thumbnail/GST REGISTRATION CERTIFICATE.jpg",
      },
      {
        id: 4,
        title: "HALAL CERTIFICATE",
        pdfUrl: "/certificates/HALAL CERTIFICATE.pdf",
        thumbnailUrl: "/thumbnail/HALAL CERTIFICATE.jpg",
      },
      {
        id: 5,
        title: "IMPORT EXPORT REGISTRATION",
        pdfUrl: "/certificates/IMPORT EXPORT REGISTRATION.pdf",
        thumbnailUrl: "/thumbnail/IMPORT EXPORT REGISTRATION.jpg",
      },
      {
        id: 6,
        title: "SPICE BOARD CERTIFICATE",
        pdfUrl: "/certificates/SPICE BOARD CERTIFICATE.pdf",
        thumbnailUrl: "/thumbnail/SPICE BOARD CERTIFICATE.jpg",
      },
    ];

    setCertificates(staticCertificates);
  }, []);

  const handleDownload = (certificate) => {
    // Create an anchor element and trigger download
    const link = document.createElement("a");
    link.href = certificate.pdfUrl;
    link.download = `${certificate.title
      .replace(/\s+/g, "-")
      .toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPdf = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseViewer = () => {
    setSelectedCertificate(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white flex items-center justify-center h-[40vh] sm:h-[50vh]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1733236954585-298e01830b4e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Certificates</h1>
          <p className="text-lg sm:text-xl">
            Our certifications demonstrate our commitment to quality and
            compliance
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <div className="container mx-auto p-4 sm:p-6 py-12">
        <h2 className="text-2xl sm:text-3xl text-[#1a538c] underline font-bold mb-6 text-center">
          Our Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-4">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center"
            >
              {/* PDF Thumbnail */}
              <div
                onClick={() => handleViewPdf(certificate)}
                className="relative w-full cursor-pointer overflow-hidden border-b border-gray-200 aspect-[3/4] max-sm:w-[60vw]"
              >
                <img
                  src={certificate.thumbnailUrl}
                  alt={certificate.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <div className="px-4 flex-1 flex flex-col justify-between w-full">
                <h3 className="text-lg sm:text-xl font-bold text-center text-[#1a538c] underline min-h-[64px] flex items-center justify-center mt-4">
                  {certificate.title}
                </h3>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(certificate)}
                  className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-300 w-full mb-4"
                >
                  <FaDownload className="mr-2" /> Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-2 sm:p-4 border-b">
              <h3 className="text-lg sm:text-xl font-semibold truncate pr-2">
                {selectedCertificate.title}
              </h3>
              <button
                onClick={handleCloseViewer}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-hidden">
              <div className="w-full h-full relative">
                {/* Try iframe first */}
                <iframe
                  src={`${selectedCertificate.pdfUrl}#toolbar=0&zoom=FitH`}
                  className="w-full h-full"
                  title={selectedCertificate.title}
                  style={{ border: "none" }}
                />

                {/* Fallback for mobile (open in new tab) */}
                <div className="sm:hidden absolute inset-0 bg-white flex items-center justify-center text-center p-4">
                  <div>
                    <p className="text-gray-700 mb-2">
                      PDF viewing is not supported on mobile devices.
                    </p>
                    <a
                      href={selectedCertificate.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                    >
                      Open in New Tab
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 sm:p-4 border-t flex justify-end">
              <button
                onClick={() => handleDownload(selectedCertificate)}
                className="flex items-center justify-center bg-green-600 md:hover:bg-green-700 text-white px-4 py-2 rounded-md md:transition-colors md:duration-300"
              >
                <FaDownload className="mr-2" /> Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
