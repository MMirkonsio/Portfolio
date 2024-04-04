import "../App.css";
import ScrollText from "../Components/ScrollText";
//import Content from "../Components/Content";
import Navbar from "../Components/Navbar";
import Background from "../Components/background";
import Projects from "../Components/Projects";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center dm-sans">
      <div className="w-full flex flex-col justify-between  md:h-screen sm:h-screen  items-center">
        <Background />
        <Navbar />
        <Projects />
        <ScrollText />
      </div>
    </div>
  );
};

export default Home;
