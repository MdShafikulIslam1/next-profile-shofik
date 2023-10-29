import Underline from "../Underline";
import bookCatalog from "../../assets/images/book-catelog.png";
import usedProducts from "../../assets/images/used-products.png";
import computerService from "../../assets/images/computer-and-it-service.png";
import { Link } from "react-router-dom";

const projects = [
  {
    bgImage: computerService,
    name: "Computer & IT Service",
    description:
      "Jwt based custom authentication,authorization and user persistency.User can booking and see her booking list in dashboard.User Can review any service and see his/her review",
    liveSite: "",
    client: "https://github.com/MdShafikulIslam1/computer-it-service-frontend",
    server:
      "https://github.com/MdShafikulIslam1/computer-and-it-servervice-backend",
    technologies: [
      "HTML",
      "CSS",
      "antd",
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
    name: "Book Catalog",
    description:
      "seller can add book,update book.Users see top selling books ,add to cart and can order.Apply jwt based custom authentication,authorization and user persistence",
    liveSite: "https://chimerical-sundae-3e7d70.netlify.app",
    client: "https://github.com/MdShafikulIslam1/book-catalog-client",
    server: "https://github.com/MdShafikulIslam1/book-catalog-server",
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
    name: "Used Product Sale",
    description:
      "Dashboard page where Admin can control all buyers and sellers user.firebase authentication      . Buyers also purchase products by Visa,MasterCard and other international payment cards.       Apply jsonwebtoken(jwt) for users information security purposes.",
    liveSite: "https://used-products-f2776.web.app",
    client: "https://github.com/MdShafikulIslam1/used-products-client-site",
    server:
      "https://github.com/MdShafikulIslam1/used-products-resale-Server-site",
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
                className=" h-[300px] bg-cover ease-linear border bg-top group-hover:bg-bottom duration-[1.5s] rounded-t-lg"
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
