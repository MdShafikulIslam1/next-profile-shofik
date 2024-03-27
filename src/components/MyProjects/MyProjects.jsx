import { Link } from "react-router-dom";
import bookCatalog from "../../assets/images/book-catelog.png";
import computerService from "../../assets/images/computer-and-it-service.png";
import usedProducts from "../../assets/images/used-products.png";
import Underline from "../Underline";

const projects = [
  {
    bgImage: computerService,
    name: "Computer Repair & IT Service",
    description:
      "Efficiently book services, and make payments securely via SSL commearz. A multi-role user system ensures privacy, with a user-friendly dashboard displaying payment and booking history.",
    liveSite: "https://computer-it-service-frontend.vercel.app",
    client: "https://github.com/MdShafikulIslam1/computer-it-service-frontend",
    server:
      "https://github.com/MdShafikulIslam1/computer-and-it-servervice-backend",
    technologies: [
      "HTML",
      "CSS",
      "Antd",
      "Tailwind CSS",
      "TypeScript",
      "Next.js",
      "Redux",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    bgImage: bookCatalog,
    name: "WhatsApp - Chat application",
    description:
      "Engage in live conversations via a user-friendly interface. Send text, images, and emojis for effective      communication. Keep track of recent chats for easy access",
    liveSite: "https://whats-app-clone-frontend-pi.vercel.app",
    client: "https://github.com/MdShafikulIslam1/whatsApp-clone-frontend",
    server: "https://github.com/MdShafikulIslam1/whatsApp-server",
    technologies: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "DaisyUI",
      "TypeScript",
      "React",
      "Redux",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    bgImage: usedProducts,
    name: "Vehicle Hub -(Team project)",
    description:
      "Seamlessly compare key metrics such as fuel efficiency, maintenance costs, and performance to optimize fleet management. Gain insights for informed decision-making and resource allocation",
    liveSite: "https://vehicle-management-frontend-seven.vercel.app",
    client: "https://github.com/nisharga/vehicle-management-frontend",
    server: "https://github.com/19khaled88/vahicle_management_backend",
    technologies: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "DaisyUI",
      "JavaScript",
      "React",
      "Tanstack Query",
      "Express",
      "MongoDB",
    ],
  },
];
const MyProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="text-5xl font-bold text-center">My Projects</h1>
      <Underline />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects &&
          projects?.map((project, index) => (
            <div key={index} className="group relative">
              <div
                className=" h-[300px] bg-cover ease-linear border bg-top group-hover:bg-bottom duration-[1.7s] rounded-t-lg"
                style={{ backgroundImage: `url(${project?.bgImage})` }}
              ></div>
              <div className="p-3 bg-secondary ">
                <h3 className="text-primary text-xl font-bold">
                  {project?.name}
                </h3>
                <p className="text-sm mb-3 ">{project?.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project &&
                    project?.technologies?.map((tech, index) => (
                      <p
                        key={index}
                        className="bg-primary text-xs px-3 py-1 rounded-full text-white "
                      >
                        {tech}
                      </p>
                    ))}
                </div>
                <hr className="my-2" />
                <div className="my-3 flex justify-between ">
                  <button className="btn btn-accent  text-white btn-sm">
                    <Link to={project?.liveSite} target="_blank">
                      Live site
                    </Link>
                  </button>
                  <button className="btn btn-accent text-white btn-sm">
                    <Link to={project?.client} target="_blank">
                      Client
                    </Link>
                  </button>
                  <button className="btn btn-accent text-white btn-sm">
                    <Link to={project?.server} target="_blank">
                      Server
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyProjects;
