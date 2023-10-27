import { Link } from "react-scroll";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <div>
      <div className="md:flex justify-between text-white mb-3 ">
        <div>
          <h1 className="text-3xl font-bold text-white">Shafikul Islam</h1>
          <h3 className="text-xl mt-3">Full Stack Developer</h3>
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary ">Quick Links</h3>
          <ul>
            <li className="hover:underline cursor-pointer font-normal text-sm mb-1">
              <Link to="home">Home</Link>
            </li>
            <li className="hover:underline cursor-pointer font-normal text-sm mb-1">
              <Link to="about me">About Me</Link>
            </li>
            <li className="hover:underline cursor-pointer font-normal text-sm mb-1">
              <Link to="skills">My Skills</Link>
            </li>
            <li className="hover:underline cursor-pointer font-normal text-sm mb-1">
              <Link to="projects">My Projects</Link>
            </li>
            <li className="hover:underline cursor-pointer font-normal text-sm mb-1">
              <Link to="contact">Contact Me</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary">Services</h3>
          <ul>
            <li className="hover:underline cursor-pointer font-normal text-sm mb-1">
              <Link>Web Development</Link>
            </li>
            <li className="hover:underline cursor-pointer font-normal text-sm mb-1">
              <Link>E-Commerce Development</Link>
            </li>
            <li className="hover:underline cursor-pointer font-normal text-sm mb-1">
              <Link>Full Stack Development</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="text-lg font-bold text-primary">Contact</h3>
          <p>(+880) 19742 97726</p>
          <p className="hover:underline cursor-pointer">
            {" "}
            179398ssshofik@gmail.com
          </p>
          <p className="mb-3">Gaibandha, Rangpur</p>
          <SocialLinks />
        </div>
      </div>
      <hr className="bg-primary border-primary " />
      <div>
        <p className="text-center py-5 text-white text-sm">
          Copyright © 2023 - All right reserved by Shafikul Islam
        </p>
      </div>
    </div>
  );
};

export default Footer;
