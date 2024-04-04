import { useEffect } from "react";

const ScrollText = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }

    function addAnimation(scrollers) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="scroller">
      <ul className="scroller-inner font-medium italic  border-t-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 dark:text-gray-100">
        <li className="flex flex-row gap-1">
          <img src="../images/html.png" alt="HTML" />
          HTML
        </li>
        <li>/</li>
        <li className="flex flex-row gap-1">
          <img src="../images/django.png" alt="DJANGO" />
          DJANGO
        </li>
        <li>/</li>
        <li className="flex flex-row gap-1">
          <img src="../images/php.png" alt="PHP" />
          PHP
        </li>
        <li>/</li>
        <li className="flex flex-row gap-1">
          <img src="../images/react.png" alt="REACT" />
          REACT
        </li>
        <li>/</li>
        <li className="flex flex-row gap-1">
          <img src="../images/bootstrap.png" alt="BOOTSTRAP" />
          BOOTSTRAP
        </li>
        <li>/</li>
        <li className="flex flex-row gap-1">
          <img src="../images/mysql.png" alt="MYSQL" />
          MYSQL
        </li>
        <li>/</li>
        <li className="flex flex-row gap-1">
          <img src="../images/html.png" alt="HTML" />
          HTML
        </li>
        <li>/</li>
        <li className="flex flex-row gap-1">
          <img src="../images/django.png" alt="DJANGO" />
          DJANGO
        </li>
        <li>/</li>
        <li className="flex flex-row gap-1">
          <img src="../images/php.png" alt="PHP" />
          PHP
        </li>
        <li>/</li>
        <li className="flex flex-row gap-1">
          <img src="../images/react.png" alt="REACT" />
          REACT
        </li>
        <li>/</li>
        <li className="flex flex-row gap-1">
          <img src="../images/bootstrap.png" alt="BOOTSTRAP" />
          BOOTSTRAP
        </li>
        <li>/</li>
        <li className="flex flex-row gap-1">
          <img src="../images/mysql.png" alt="MYSQL" />
          MYSQL
        </li>
        <li>/</li>
      </ul>
    </div>
  );
};

export default ScrollText;
