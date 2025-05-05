import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";

const Brochures = () => {
  const [brochures, setBrochures] = useState([]);
  const [selectedBrochure, setSelectedBrochure] = useState(null);

  useEffect(() => {
    // Define brochures from the public/brochures folder
    const staticBrochures = [
      {
        id: 1,
        title: "Agricultural Products",
        pdfUrl: "brochures/Agricultural Products.pdf",
        thumbnailUrl: "/thumbnail/Agricultural Products.jpg",
      },
      {
        id: 2,
        title: "Chemicals and Raw Materials",
        pdfUrl: "brochures/Chemicals and Raw Materials.pdf",
        thumbnailUrl: "/thumbnail/Chemicals and Raw Materials.jpg",
      },
      {
        id: 3,
        title: "Food and Beverages",
        pdfUrl: "brochures/Food and Beverages.pdf",
        thumbnailUrl: "/thumbnail/Food and Beverages.jpg",
      },
      {
        id: 4,
        title: "Imitation jewellery",
        pdfUrl: "brochures/Imitation jewellery.pdf",
        thumbnailUrl: "/thumbnail/Imitation jewellery.jpg",
      },
      {
        id: 5,
        title: "Industrial Machinery",
        pdfUrl: "brochures/Industrial Machinery.pdf",
        thumbnailUrl: "/thumbnail/Industrial Machinery.jpg",
      },
      {
        id: 6,
        title: "Textiles and Garments",
        pdfUrl: "brochures/Textiles and Garments.pdf",
        thumbnailUrl: "/thumbnail/Textiles and Garments.jpg",
      },
      {
        id: 7,
        title: "Tiles and Ceramics Products",
        pdfUrl: "brochures/Tiles and Ceramics Products.pdf",
        thumbnailUrl: "/thumbnail/Tiles and Ceramics Products.jpg",
      },
      {
        id: 8,
        title: "Consumer Electronics",
        pdfUrl: "brochures/Consumer Electronics.pdf",
        thumbnailUrl: "/thumbnail/Consumer Electronics.jpg",
      },
    ];

    setBrochures(staticBrochures);
  }, []);

  const handleDownload = (brochure) => {
    // Store in localStorage that this brochure was downloaded
    const downloadedBrochures = JSON.parse(
      localStorage.getItem("downloadedBrochures") || "[]"
    );
    if (!downloadedBrochures.includes(brochure.id)) {
      downloadedBrochures.push(brochure.id);
      localStorage.setItem(
        "downloadedBrochures",
        JSON.stringify(downloadedBrochures)
      );
    }

    // Create an anchor element and trigger download
    const link = document.createElement("a");
    link.href = brochure.pdfUrl;
    link.download = `${brochure.title.replace(/\s+/g, "-").toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPdf = (brochure) => {
    setSelectedBrochure(brochure);
  };

  const handleCloseViewer = () => {
    setSelectedBrochure(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white flex items-center justify-center h-[40vh] sm:h-[50vh]"
        style={{ backgroundImage: "url('/brochure.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Brochures</h1>
          <p className="text-lg sm:text-xl">
            Download our product brochures to learn more about what we offer
          </p>
        </div>
      </section>

      {/* Brochures Grid */}
      <div className="container mx-auto p-4 sm:p-6 py-12">
        <h2 className="text-2xl sm:text-3xl text-[#1a538c] underline font-bold mb-6 text-center">
          Our Brochures
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-4">
          {brochures.map((brochure) => (
            <div
              key={brochure.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center"
            >
              {/* PDF Thumbnail */}
              <div
                onClick={() => handleViewPdf(brochure)}
                className="relative w-full cursor-pointer overflow-hidden border-b border-gray-200 aspect-[3/4] max-sm:w-[60vw]"
              >
                <img
                  src={brochure.thumbnailUrl}
                  alt={brochure.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              {/* Title */}
              <div className="px-4 flex-1 flex flex-col justify-between w-full">
                <h3 className="text-lg sm:text-xl font-bold text-center text-[#1a538c] underline min-h-[64px] flex items-center justify-center mb-4">
                  {brochure.title}
                </h3>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(brochure)}
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
      {selectedBrochure && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-2 sm:p-4 border-b">
              <h3 className="text-lg sm:text-xl font-semibold truncate pr-2">
                {selectedBrochure.title}
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
                  src={`${selectedBrochure.pdfUrl}#toolbar=0&zoom=FitH`}
                  className="w-full h-full"
                  title={selectedBrochure.title}
                  style={{ border: "none" }}
                />

                {/* Fallback for mobile (open in new tab) */}
                <div className="sm:hidden absolute inset-0 bg-white flex items-center justify-center text-center p-4">
                  <div>
                    <p className="text-gray-700 mb-2">
                      PDF viewing is not supported on mobile devices.
                    </p>
                    <a
                      href={selectedBrochure.pdfUrl}
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
                onClick={() => handleDownload(selectedBrochure)}
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

export default Brochures;
