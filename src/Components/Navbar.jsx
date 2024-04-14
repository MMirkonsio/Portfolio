import Darkmode from "../Components/DarkMode";
import { Github, Linkedin, Gmail } from "./Iconsvg";
import "../App.css";
import { toast, Toaster } from "sonner";

const Navbar = () => {
  const handleClickGmail = () => {
    const email = "mirkovalencia90@gmail.com";
    navigator.clipboard.writeText(email);
    toast.success("Correo copiado!", {
      duration: 2000,
      className: "my-classname",
    });
  };

  return (
    <div className="index-navbar flex flex-row h-auto justify-between fixed items-center w-full px-4 py-2 text-neutral-700 dark:text-gray-100 border-b-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 mx-auto">
      <div className="flex flex-row justify-center items-center">
        <h1 className="text-2xl font-bold italic">@Mirkovalencia</h1>
      </div>
      <div className="flex gap-4 items-center">
        <Linkedin title="Linkedin" />
        <Github title="Github" />
        {/* Contenedor para los iconos y el botón de Gmail */}
        <div className="flex items-center">
          {/* Añadir un aria-label al botón de Gmail para hacerlo más accesible */}
          <button onClick={handleClickGmail} aria-label="Copiar correo electrónico">
            <Gmail />
          </button>
          {/* Componente Toastify para mostrar las notificaciones */}
          <Toaster richColors position="top-right" />
        </div>
      </div>
      <div className="flex items-center space-x-4 font-medium italic underline underline-offset-2">
        <Darkmode />
      </div>
    </div>
  );
};

export default Navbar;
