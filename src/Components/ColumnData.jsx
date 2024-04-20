import { FaReact, FaHtml5, FaBootstrap, FaPhp, FaAws } from "react-icons/fa";
import {
  SiDjango,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

const columnData = [
  {
    open: true,
    imageUrl: "../images/proyecto11.webp",
    alt: "Imagen del proyecto 1",
    titlemodal: "Rincon Tocopillano",
    hasImage: true,
    description2:
      "Cuenta con un sistema de votación y publicación inspirado en el sitio web Reddit, Ranking de publicaciones más populares, Comentarios en cada publicación, y Categorías de todos los productos.",
    description:
      "El objetivo de esta página web es crear una plataforma en línea inclusiva y accesible para la comunidad de Tocopilla, que permita a usuarios individuales y PYMES vender sus productos de manera eficiente y segura.",
    link: "https://ejemplo.com",
    link2: "https://github.com/MMirkonsio/piedra-papel-tijera",
    columnClass: "cursor-pointer",
  },
  {
    open: true,
    imageUrl: "../images/proyecto2.webp",
    titlemodal: "Piedra, Papel y Tijera",
    alt: "Imagen del proyecto 2",
    hasImage: true,
    description:
      "Juego de piedra, papel y tijera dedicado al entretenimiento ya sea para retos grupales, juntas sociales, etc...",
    description2:
      "Cuenta con un sistema de rondas y resultados a medida que se va ganando, perdiendo o empatando, todo esto enfrentándote a un bot que juega contigo.",
    link: "https://piedra-papel-tijera-gh11.vercel.app/",
    link2: "https://github.com/MMirkonsio/piedra-papel-tijera",
    columnClass: "cursor-pointer",
  },
  {
    open: true,
    imageUrl: "../images/noproject.webp",
    alt: "Imagen del proyecto 3",
    hasImage: true,
    description: "Proyecto en curso...",
    columnClass: "cursor-pointer",
  },
  {
    open: false,
    title: "ANALISTA PROGRAMADOR",
    columnClass: "text-6xl p-1 break-words lg:tracking-wide",
  },
  {
    open: true,
    imageUrl: "../images/noproject.webp",
    alt: "Imagen del proyecto 4",
    hasImage: true,
    description: "Proyecto en curso...",
    columnClass: "cursor-pointer",
  },

  {
    open: true,
    imageUrl: "../images/Curriculum.webp",
    alt: "Imagen del curriculum",
    hasImage: true,
    description:
      "Mi nombre es Mirko Valencia Vlatko, Analista Programador recién egresado de 21 años, de Coquimbo, Chile. Apasionado por la innovación tecnológica, con habilidades en desarrollo web y análisis de datos.",
    experience:
      "Experiencia: Elaboración de contenido Web, Gestionar y mantener el sitio Web, Garantizar que el sitio funcione de manera eficiente a través de las aplicaciones integradas, Crear y diseñar mejoras para el sitio, Optimizar imágenes asegurando su correcta implementación en la Web.",
    columnClass: "cursor-pointer",
  },
  {
    open: true,
    imageUrlTec: "../images/bg-tec.webp",
    alt: "Imagen de Tecnología",
    hasImageTec: true,
    titlemodal: "FRONTEND",
    titlemodal2: "BACKEND",
    titleTec: "TECNOLOGÍAS",
    columnClass: "lg:text-7xl text-6xl  break-words lg:tracking-wide",
    icons: {
      icon1: (
        <FaReact
          className="w-20 h-20 mr-2 hover:scale-110 transition-transform"
          title="ReactJS"
        />
      ),
      icon2: (
        <FaHtml5
          className="w-20 h-20 mr-2 hover:scale-110 transition-transform"
          title="HTML5"
        />
      ),
      icon3: (
        <SiDjango
          className="w-20 h-20 mr-2 hover:scale-110 transition-transform"
          title="Django"
        />
      ),
      icon4: (
        <FaBootstrap
          className="w-20 h-20 mr-2 hover:scale-110 transition-transform"
          title="Bootstrap"
        />
      ),
      icon5: (
        <SiTailwindcss
          className="w-20 h-20 mr-2 hover:scale-110 transition-transform"
          title="Tailwind CSS"
        />
      ),
      icon6: (
        <RiJavascriptFill
          className="w-20 h-20 mr-2 hover:scale-110 transition-transform"
          title="JavaScript"
        />
      ),
      icon7: (
        <FaPhp
          className="w-20 h-20 mr-2 hover:scale-110 transition-transform"
          title="PHP"
        />
      ),
      icon8: (
        <SiExpress
          className="w-20 h-20 mr-2 hover:scale-110 transition-transform"
          title="Express.js"
        />
      ),
      icon9: (
        <SiMongodb
          className="w-20 h-20 mr-2 hover:scale-110 transition-transform"
          title="MongoDB"
        />
      ),
      icon10: (
        <SiMysql
          className="w-20 h-20 mr-2 hover:scale-110 transition-transform"
          title="MySQL"
        />
      ),
      icon11: (
        <FaAws
          className="w-20 h-20 mr-2 hover:scale-110 transition-transform"
          title="AWS"
        />
      ),
    },
  },
];

export default columnData;
