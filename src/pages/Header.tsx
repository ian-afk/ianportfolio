import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
export default function Header() {
  return (
    <section
      id="home"
      className="mx-40 min-h-[90vh] grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4"
    >
      <div className="col-span-5 flex items-center">
        <div className="">
          <p className="text-6xl font-bold flex flex-col space-y-2">
            <span>Hi,</span>
            <span className="block ">
              I am <span className="text-[#2d64b0]">Christian</span>
            </span>
            <span className="block">Full-stack Developer</span>
          </p>
          <div className="mt-12">
            <button className="px-6 py-2 bg-[#2d64b0] text-white rounded-xl font-semibold">
              Contact
            </button>
          </div>
          <div className="mt-16">
            <nav>
              <ul className="flex gap-6 text-2xl">
                <li className="p-2">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/christian-dosal-5311a5243/"
                    className="hover:text-[#0a66c2]"
                  >
                    <FiLinkedin />
                  </a>
                </li>
                <li className="p-2">
                  <a target="_blank" href="https://github.com/ian-afk">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="col-span-5 flex justify-center items-center">
        <img src="./profile-1.png" alt="" />
      </div>
    </section>
  );
}
