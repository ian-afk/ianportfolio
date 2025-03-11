import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
type NavProps = {
  activeSection: string;
};

export default function Nav({ activeSection }: NavProps) {
  const sections = ["home", "about", "skills", "work", "contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 770);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);
  return (
    <section className="md:mx-40 my-4 md:flex md:justify-between mx-4">
      <div className="col-span-5">
        <h1 className="text-xl font-bold">
          <a href="#home">Christian</a>
        </h1>
      </div>
      <div
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        onClick={handleOpen}
      >
        {isOpen ? <TfiClose /> : <FiMenu />}
      </div>
      <nav className="md:mt-0 mt-4">
        <ul
          className={`md:flex md:flex-col flex-row gap-4 md:text-xl justify-evenly transition duration-300 ease-out space-y-2 
    ${isMobile ? (isOpen ? "block top-20" : "hidden") : "flex"}`}
        >
          {sections.map((section) => (
            <li>
              <a
                key={section}
                href={`#${section}`}
                className={`px-4 md:py-2 transition duration-300 ${
                  activeSection === section
                    ? "text-blue-500 font-bold border-b-2 border-blue-500"
                    : "text-gray-400"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
