import "../App.css";
import { useState } from "react";
import columnData from "../Components/ColumnData";
import { MdOutlineFileDownload } from "react-icons/md";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    if (item.open) {
      setSelectedItem(item);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "./Curriculumvitae2024.pdf"; // Usar una ruta absoluta que sea válida en producción
    link.download = "Curriculumvitae2024.pdf";
    link.click();
  };

  return (
    <div className="relative min-h-screen">
      {showModal && selectedItem && (
        <div
          id="default-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-neutral-900 text-gray-100 p-4 rounded-lg shadow-lg max-w-md w-full">
            {selectedItem.hasImage && (
              <div className="relative w-full h-64 mb-4">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.alt}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
            )}
            <div>
              {selectedItem.titlemodal && (
                <h2 className="text-2xl font-bold mb-2">
                  {selectedItem.titlemodal}
                </h2>
              )}

              <div className="flex flex-wrap">
                {selectedItem.icons &&
                  Object.values(selectedItem.icons)
                    .slice(0, 6)
                    .map((icon, index) => (
                      <div key={index} className="mr-2 mb-2">
                        {icon}
                      </div>
                    ))}
              </div>

              {selectedItem.titlemodal2 && (
                <h2 className="text-2xl font-bold mb-2">
                  {selectedItem.titlemodal2}
                </h2>
              )}

              <div className="flex flex-wrap">
                {selectedItem.icons &&
                  Object.values(selectedItem.icons)
                    .slice(6)
                    .map((icon, index) => (
                      <div key={index} className="mr-2 mb-2">
                        {icon}
                      </div>
                    ))}
              </div>

              {selectedItem.description && (
                <div className="text-base text-justify mb-4">
                  {selectedItem.description}
                  <br />
                  {selectedItem.description2}
                  <br />
                  {selectedItem.experience}
                </div>
              )}
              <div className="flex justify-end gap-4 items-center">
                {selectedItem.link && (
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline font-bold"
                  >
                    Ver Página
                  </a>
                )}
                {selectedItem.link2 && (
                  <a
                    href={selectedItem.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline font-bold"
                  >
                    Ver Código
                  </a>
                )}
                {selectedItem.experience && (
                  <button
                    onClick={handleDownloadPDF}
                    className="text-blue-500 hover:underline font-bold flex items-center gap-1"
                  >
                    <MdOutlineFileDownload className="h-6 w-6" />
                    Download CV
                  </button>
                )}
                {/* Botón "Close modal" */}
                <button
                  onClick={closeModal}
                  className="bg-neutral-900 text-white font-bold p-2 rounded-md shadow-sm hover:bg-neutral-800"
                  data-modal-hide="default-modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center min-h-screen ">
        <div className="grid auto-rows-[200px] contenedor-grid lg:mt-0 mb-8 mt-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          {columnData.map((data, i) => (
            <button
              key={i}
              className={`project-container row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-900 ${
                i === 3 || i === 6 ? "lg:col-span-2 col-span-1" : ""
              } ${data.columnClass} ${data.open ? "cursor-pointer" : ""}`}
              onClick={() => openModal(data)}
              style={{ position: "relative" }} // Agrega posición relativa al contenedor de botón
            >
              {data.title && (
                <h2 className="font-bold text-gray-100">{data.title}</h2>
              )}
              <h2 className="font-bold text-gray-100">
                {data.titleTec}
              </h2>
              {data.subtitle && (
              <div className="text-lg text-gray-100">{data.subtitle}</div>
              )}
              {data.hasImage && (
                <div className="relative w-full h-full rounded-lg">
                  <img
                    src={data.imageUrl}
                    alt={data.title}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
