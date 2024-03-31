import Aos from "aos";
import "aos/dist/aos.css";
import bootstrapLogo from "../../assets/logo/bootstrap_logo.png";
import cssLogo from "../../assets/logo/css_logo.png";
import expressLogo from "../../assets/logo/express_logo.png";
import firebaseLogo from "../../assets/logo/firebase_logo.png";
import htmlLogo from "../../assets/logo/html_logo.png";
import javascriptLogo from "../../assets/logo/javascript_logo.png";
import mongodbLogo from "../../assets/logo/mongodb_logo.png";
import nextLogo from "../../assets/logo/next_logo.png";
import nodeLogo from "../../assets/logo/node_logo.png";
import postgresql from "../../assets/logo/postgresql.jpg";
import prisma from "../../assets/logo/prisma.png";
import reactLogo from "../../assets/logo/react_logo.png";
import tailwindLogo from "../../assets/logo/tailwind_logo.png";
import typescript from "../../assets/logo/typescript.webp";
import Underline from "../Underline";
// ..
Aos.init({
  duration: 1000,
  easing: "ease in out",
});
const skills = [
  {
    image: htmlLogo,
    title: "HTML",
  },
  {
    image: cssLogo,
    title: "CSS",
  },
  {
    image: javascriptLogo,
    title: "JavaScript",
  },
  {
    image: reactLogo,
    title: "React",
  },
  {
    image: bootstrapLogo,
    title: "Bootstrap",
  },
  {
    image: tailwindLogo,
    title: "Tailwind CSS",
  },
  {
    image: nodeLogo,
    title: "Node.js",
  },
  {
    image: expressLogo,
    title: "Express.js",
  },
  {
    image: mongodbLogo,
    title: "MongoDB",
  },
  {
    image: firebaseLogo,
    title: "Firebase",
  },
  {
    image: prisma,
    title: "Prisma",
  },
  {
    image: nextLogo,
    title: "Next.js",
  },
  {
    image: typescript,
    title: "TypeScript",
  },
  {
    image: postgresql,
    title: "PostgreSQL",
  },
];

const MySkills = () => {
  return (
    <div id="skills" className="my-20" data-aos="fade-up">
      <h1 className="text-center text-5xl font-bold ">My Skills</h1>
      <Underline />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {skills &&
          skills?.map((skill, index) => (
            <div
              key={index}
              className="flex rounded hover:skew-x-4 gap-2 items-center border border-primary hover:-translate-y-2 duration-300 hover:bg-primary px-5 py-3"
            >
              <img className="w-12" src={skill?.image} alt="" />
              <h3 className="md:text-xl font-bold text-white">
                {skill?.title}
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MySkills;
