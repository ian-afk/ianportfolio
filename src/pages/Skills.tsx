import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDjango,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiGithub,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
// SiMongodb,SiExpress,SiReact,FaNodeJs,SiJavascript,SiTypescript,SiPython,SiDjango,SiMysql,TbSql,SiHtml5,SiCss3,SiMui,SiAntdesign
export default function Skills() {
  const skills = [
    {
      title: "MongoDB",
      icon: <SiMongodb color="#4DB33D" />,
      color: "#4DB33D",
    },
    {
      title: "ExpressJS",
      icon: <SiExpress color="#000000" />,
      color: "#000000",
    },
    {
      title: "ReactJS",
      icon: <SiReact color="#61DAFB" />,
      color: "#61DAFB",
    },
    {
      title: "NodeJS",
      icon: <FaNodeJs color="#339933" />,
      color: "#339933",
    },
    {
      title: "Javascript",
      icon: <SiJavascript color="#F7DF1E" />,
      color: "#F7DF1E",
    },
    {
      title: "Typescript",
      icon: <SiTypescript color="#3178C6" />,
      color: "#3178C6",
    },
    {
      title: "Python",
      icon: <SiPython color="#3776AB" />,
      color: "#3776AB",
    },
    {
      title: "Django",
      icon: <SiDjango color="#092E20" />,
      color: "#092E20",
    },
    {
      title: "MySQL",
      icon: <SiMysql color="#4479A1" />,
      color: "#4479A1",
    },
    {
      title: "SQL",
      icon: <TbSql color="#CC2927" />,
      color: "#CC2927",
    },
    {
      title: "HTML",
      icon: <SiHtml5 color="#E34F26" />,
      color: "#E34F26",
    },
    {
      title: "CSS",
      icon: <SiCss3 color="#1572B6" />,
      color: "#1572B6",
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss color="#38BDF8" />,
      color: "#38BDF8",
    },
    {
      title: "MUI",
      icon: <SiMui color="#0081CB" />,
      color: "#0081CB",
    },
    {
      title: "Ant Design",
      icon: <SiAntdesign color="#0170FE" />,
      color: "#0170FE",
    },
    {
      title: "Git/Github",
      icon: <SiGithub color="#000" />,
      color: "#000",
    },
  ];

  return (
    <section id="skills" className="md:mx-40 min-h-[60vh]">
      <div className="text-center font-bold text-2xl my-4">
        <h2 className="underline underline-offset-8 text-[#2d64b0]">Skills</h2>
      </div>
      <div className="lg:flex justify-evenly mt-6 gap-7">
        <div className="my-4">
          <p className="md:max-w-[40ch] md:text-end font-semibold text-2xl flex justify-center items-center">
            These are my technical/programming skills that I have experienced
            with from my previous jobs
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-8">
          <ul className="flex gap-6 flex-wrap justify-center">
            {skills
              .filter((_, index) => index <= 3)
              .map((item) => (
                <li
                  key={item.title}
                  className="relative flex flex-col items-center space-y-2 group"
                >
                  <span className="absolute bottom-12 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.title}
                  </span>
                  <span className="md:text-7xl text-4xl">{item.icon}</span>
                </li>
              ))}
          </ul>
          <ul className="flex gap-6 flex-wrap justify-center">
            {skills
              .filter((_, index) => index > 3 && index < 10)
              .map((item) => (
                <li
                  key={item.title}
                  className="relative flex flex-col items-center space-y-2 group"
                >
                  <span className="absolute bottom-12 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.title}
                  </span>
                  <span className="md:text-7xl text-4xl">{item.icon}</span>
                </li>
              ))}
          </ul>
          <ul className="flex gap-6 flex-wrap justify-center">
            {skills
              .filter((_, index) => index > 9)
              .map((item) => (
                <li
                  key={item.title}
                  className="relative flex flex-col items-center space-y-2 group"
                >
                  <span className="absolute bottom-12 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.title}
                  </span>
                  <span className="md:text-7xl text-4xl">{item.icon}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
