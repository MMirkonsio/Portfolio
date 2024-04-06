import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "../App.css";
import { useState } from "react";
import "primeicons/primeicons.css";
import columnData from "../Components/ColumnData";

const Projects = () => {
  const [activeDialogIndex, setActiveDialogIndex] = useState(null);
  const [blurBackground, setBlurBackground] = useState(false);

  const openModal = (index) => {
    setActiveDialogIndex(index);
    setBlurBackground(true);
  };

  const closeModal = () => {
    setActiveDialogIndex(null);
    setBlurBackground(false);
  };

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/src/assets/Curriculumvitae2024.pdf";
    link.download = "Curriculumvitae2024.pdf";
    link.click();
  };

  return (
    <div
      className={`flex justify-center items-center ${
        blurBackground ? "blur-background" : ""
      }`}
      style={{ marginTop: "calc(3.9rem + 1px)" }}
    >
      <div className="grid lg:auto-rows-[190px] auto-rows-[250px] contenedor-grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 p-4">
        {columnData.map((data, i) => (
          <div
            key={i}
            className={`project-container row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 ${
              i === 3 || i === 6 ? "lg:col-span-2 col-span-1 " : ""
            } ${data.columnClass} ${
              activeDialogIndex !== null && activeDialogIndex !== i
                ? "hidden"
                : ""
            } ${data.hasImage ? "cursor-pointer" : ""}`}
            onClick={() => data.hasImage && openModal(i)}
          >
            <h2 className="font-bold dark:text-gray-100 text-neutral-800">
              {data.title}
            </h2>
            <div className="text-lg dark:text-gray-100 text-neutral-800">
              {data.subtitle}
            </div>
            {data.hasImage && (
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <img
                  src={data.imageUrl}
                  alt={data.title}
                  className="w-full h-full rounded-lg object-cover grayscale transition-all duration-300"
                />
                <img
                  src={data.imageUrl}
                  alt={data.title}
                  className="absolute top-0 left-0 w-full h-full rounded-lg object-cover transition-all duration-300 opacity-0 hover:opacity-100"
                />
              </div>
            )}
          </div>
        ))}
        {columnData.map(
          (data, i) =>
            data.hasImage && (
              <Dialog
                key={i}
                visible={activeDialogIndex === i}
                onHide={closeModal}
                modal
                showHeader={false}
                className="dialog-modal"
              >
                <div className="contenedor-model mx-auto relative bg-gray-100 dark:bg-neutral-900  rounded-xl border-2 border-slate-400/20  dm-sans">
                  {data.imageUrl && (
                    <img
                      src={data.imageUrl}
                      alt={data.title}
                      className="foto-model lg:rounded-l-lg  object-cover transition-all duration-300"
                    />
                  )}
                  <div className=" dark:bg-neutral-900 lg:rounded-r-lg ">
                    {data.title && (
                      <h2 className="text-4xl font-bold ">{data.title}</h2>
                    )}
                    {data.description && (
                      <div className="dark:bg-neutral-900 lg:rounded-r-lg">
                        {data.title && (
                          <h2 className="text-4xl font-bold">{data.title}</h2>
                        )}
                        <div className="text-base text-justify flex lg:h-4/5 dark:text-neutral-100 text-neutral-900 p-2">
                          {data.description}
                          <br />
                          {data.description2}
                          <br />
                          {data.experience}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-center gap-20 mb-4 mt-4 dark:text-neutral-100 text-neutral-900">
                      {data.link && (
                        <Button
                          icon="pi pi-external-link"
                          className="text-2xl p-button-rounded p-button-text p-button-sm  p-2 "
                          onClick={() => window.open(data.link, "_blank")}
                        />
                      )}
                      {data.link2 && (
                        <Button
                          icon="pi pi-code"
                          className="text-2xl p-button-rounded p-button-text p-button-sm  p-2 "
                          onClick={() => window.open(data.link2, "_blank")}
                        />
                      )}
                      {data.experience && (
                        <Button
                          className="p-button-text p-button-sm  block p-2 ml-2  bg-neutral-800 rounded-lg text-neutral-100 "
                          onClick={() => handleDownloadPDF(columnData[0])}
                        >
                          <i className="pi pi-download mr-2"></i>
                          <span>Descargar CV</span>
                        </Button>
                      )}

                      <Button
                        icon="pi pi-times"
                        className="p-button-rounded p-button-text p-button-sm  p-2 text-2xl"
                        onClick={closeModal}
                      />
                    </div>
                  </div>
                </div>
              </Dialog>
            )
        )}
      </div>
    </div>
  );
};

export default Projects;
