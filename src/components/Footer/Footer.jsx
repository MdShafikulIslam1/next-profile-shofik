import { Link } from "react-scroll";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <div>
      <div className="justify-between mb-3 text-white md:flex ">
        <div>
          <h1 className="text-3xl font-bold text-white">Shafikul Islam</h1>
          <h3 className="mt-3 text-xl">Full Stack Developer</h3>
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary ">Quick Links</h3>
          <ul>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link to="home">Home</Link>
            </li>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link to="about me">About Me</Link>
            </li>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link to="skills">My Skills</Link>
            </li>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link to="projects">My Projects</Link>
            </li>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link to="contact">Contact Me</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary">Services</h3>
          <ul>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link>Web Development</Link>
            </li>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link>E-Commerce Development</Link>
            </li>
            <li className="mb-1 text-sm font-normal cursor-pointer hover:underline">
              <Link>Full Stack Development</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="text-lg font-bold text-primary">Contact</h3>
          <p>(+880) 19742 97726</p>
          <p className="cursor-pointer hover:underline">
            {" "}
            mdshafikuli421@gmail.com
          </p>
          <p className="mb-3">Gaibandha, Rangpur</p>
          <SocialLinks />
        </div>
      </div>
      <hr className="bg-primary border-primary " />
      <div>
        <p className="py-5 text-sm text-center text-white">
          Copyright © 2023 - All right reserved by Shafikul Islam
        </p>
      </div>
    </div>
  );
};

export default Footer;
