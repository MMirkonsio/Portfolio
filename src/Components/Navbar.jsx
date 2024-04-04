import Darkmode from "../Components/DarkMode";
import { Github, Linkedin, Gmail } from "./Iconsvg";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";
import "../App.css";
const Navbar = () => {
  const op = useRef(null); // Ref para el OverlayPanel

  const handleClickGmail = () => {
    const email = "mirkovalencia90@gmail.com"; // Correo electrónico a copiar
    navigator.clipboard.writeText(email); // Copiar el correo electrónico al Portapapeles
    if (op.current) {
      op.current.toggle(event); // Alternar la visibilidad del OverlayPanel
      setTimeout(() => {
        if (op.current) {
          op.current.hide(); // Ocultar el OverlayPanel después de 5 segundos
        }
      }, 1000); // 5000 milisegundos = 5 segundos
    }
  };

  return (
    <div className="flex flex-row h-12 justify-between items-center w-full px-4 py-2 text-neutral-700 dark:text-gray-100 border-b-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 ">
      <div className="flex flex-row justify-center items-center">
        <h1 className="text-2xl font-bold italic">@mirkovalencia</h1>
      </div>
      <div className="flex gap-2">
        <Linkedin title="Linkedin" />
        <Github title="Github" />
        {/* Icono de Gmail */}
        <Gmail title="Gmail" onClick={handleClickGmail} />
        {/* OverlayPanel */}
        <OverlayPanel ref={op} className="gmail-overlay-panel">
          <span className="p-1 text-sm rounded-lg dm-sans font-semibold italic text-green-700">
            Correo copiado!
          </span>
        </OverlayPanel>
      </div>
      <div className="flex items-center space-x-4 font-medium italic underline underline-offset-2">
        <Darkmode />
      </div>
    </div>
  );
};

export default Navbar;
