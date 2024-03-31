import { BiHomeAlt2, BiSolidContact, BiSolidUserDetail } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { Link } from "react-scroll";
import Resume from "../../assets/Shafikul_Full-stack-developer.pdf";
import photo from "../../assets/shofik.jpg";
import SocialLinks from './../SocialLinks/SocialLinks';

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      <div
        className={`${
          open ? "left-0 " : "-left-[100%]"
        }  bg-base-100 w-3/4 md:w-auto  duration-200 md:pt-10  top-0 h-full z-50 md:z-auto fixed  md:left-0  md:min-h-screen   `}
      >
        <div className="flex justify-center items-center flex-col pt-10 md:pt-0">
          <img
            className="w-28 h-28 rounded-full border-4 border-primary "
            src={photo}
            alt=""
          />
          <h3 className="text-xl text-white mt-3">Shafikul Islam</h3>
        </div>
        <nav className="my-20 pl-8">
          <ul className="flex flex-col text-md ">
            <li className="cursor-pointer hover:text-primary mb-5">
              <Link
                onClick={() => setOpen(false)}
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="text-primary"
                className="hover:tracking-[5px]  duration-300 inline-flex items-center "
              >
                <span className="mr-2 text-xl">
                  {" "}
                  <BiHomeAlt2 />
                </span>
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:text-primary mb-5">
              <Link
                onClick={() => setOpen(false)}
                to="about me"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="text-primary"
                className="hover:tracking-[5px]  duration-300 inline-flex items-center "
              >
                <span className="mr-2 text-xl">
                  {" "}
                  <BiSolidUserDetail />
                </span>
                About Me
              </Link>
            </li>
            <li className="cursor-pointer hover:text-primary mb-5">
              <Link
                onClick={() => setOpen(false)}
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="text-primary"
                className="hover:tracking-[5px]  duration-300 inline-flex items-center "
              >
                <span className="mr-2 text-xl">
                  {" "}
                  <GiSkills />
                </span>
                My Skills
              </Link>
            </li>
            <li className="cursor-pointer hover:text-primary mb-5">
              <Link
                onClick={() => setOpen(false)}
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="text-primary"
                className="hover:tracking-[5px]  duration-300 inline-flex items-center "
              >
                <span className="mr-2 text-xl">
                  {" "}
                  <GoProjectSymlink />
                </span>
                Projects
              </Link>
            </li>
            <li className="inline-flex items-center cursor-pointer hover:text-primary mb-5">
              <Link
                onClick={() => setOpen(false)}
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="text-primary"
                className="hover:tracking-[5px]  duration-300 inline-flex items-center"
              >
                <span className="mr-2 text-xl">
                  {" "}
                  <BiSolidContact />
                </span>
                Contact Me
              </Link>
            </li>
            <li className="inline-flex items-center cursor-pointer hover:text-primary mb-5">
              <button className="btn btn-primary btn-sm text-white font-normal rounded-sm">
                <a href={Resume} download>
                  Download Resume
                </a>
              </button>
            </li>
          </ul>
        </nav>
        <div className="pl-8 text-lg absolute md:bottom-10">
          <SocialLinks />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
