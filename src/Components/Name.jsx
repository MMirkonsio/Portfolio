import { useEffect } from "react";

const Name = () => {
  useEffect(() => {
    let isFirefox = typeof InstallTrigger !== "undefined";
    const words = "MIRKOVALENCIA";

    const createElement = (char) => {
      const div = document.createElement("div");
      div.innerText = char;
      div.classList.add("character");
      return div;
    };

    const createSpiral = (containerId, offset) => {
      const container = document.querySelector(`#${containerId}`);
      const spiral = document.createElement("div");
      spiral.classList.add("spiral");
      spiral.style.setProperty("--offset", offset);

      words.split("").forEach((char, i) => {
        spiral.append(createElement(char));
      });

      container.appendChild(spiral);
    };

    createSpiral("spiral", "0deg");
    createSpiral("spiral2", isFirefox ? "180deg" : "-180deg");
  }, []);

  return (
    <div>
      <div id="spiral"></div>
      <div id="spiral2"></div>
    </div>
  );
};

export default Name;
