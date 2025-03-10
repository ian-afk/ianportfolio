type NavProps = {
  activeSection: string;
};

export default function Nav({ activeSection }: NavProps) {
  const sections = ["home", "about", "skills", "work"];
  return (
    <section className="mx-40 my-4 grid grid-cols-10">
      <div className="col-span-5">
        <div className="">
          <h1 className="text-xl font-bold">Christian</h1>
        </div>
      </div>
      <div className="col-span-5">
        <nav>
          <ul className="flex gap-4 text-xl justify-evenly">
            {sections.map((section) => (
              <li>
                <a
                  key={section}
                  href={`#${section}`}
                  className={`px-4 py-2 transition duration-300 ${
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
      </div>
    </section>
  );
}
