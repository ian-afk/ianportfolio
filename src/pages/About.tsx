import "../styles.css";
import { motion } from "framer-motion";
export default function About() {
  const about = [
    `Web Developer/Software Developer with four years of experience in
    Information Technology specializing in Software Application
    Development, Requirements Gathering, Design Thinking, User Interface
    Design, Testing, Development, Deployment, Data Reporting, and
    Continuous Improvement for a delightful User and Customer
    Experience.`,
    `Highly motivated and collaborative Subject Matter Expert and team
    player, quick learner and eager to share learnings and knowledge to
    others, driven to excellence especially in Web Development, and
    highly adaptable to change and new technologies.`,
  ];
  return (
    <section id="about" className="mx-40 min-h-[70vh] ">
      <div className="text-center font-bold text-2xl my-4">
        <h2 className="underline underline-offset-8 text-[#2d64b0]">About</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-4">
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-[70ch] text-lg font-semibold tracking-wide"
          >
            {about[0]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }} // Start 50px to the right
            whileInView={{ opacity: 1, x: 0 }} // Move to normal position
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }} // Ensures it animates only once
            className="max-w-[70ch] text-lg font-semibold tracking-wide"
          >
            {about[1]}
          </motion.p>
        </div>
        <div className="rounded-full h-56 w-56 overflow-hidden mt-6">
          <img
            src="./profile_3.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
