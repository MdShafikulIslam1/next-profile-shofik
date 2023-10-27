import { TypeAnimation } from "react-type-animation";
import photo from "../../assets/shofik.jpg";
import Resume from "../../assets/Shofikul-Islam.pdf";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  delay: 400,
  duration: 1000,
  easing: "ease-in-out",
});

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row  my-10 justify-between md:gap-10 min-h-screen items-center  w-full"
    >
      <div className="md:w-1/2 " data-aos="fade-right">
        <h3 className="text-2xl font-bold text-white">Hello I am</h3>
        <h1 className="text-5xl font-bold text-white my-7">Shafikul Islam</h1>
        <h4 className=" text-lg">
          <TypeAnimation
            className="text-primary"
            sequence={[
              // Same substring at the start will only be typed once, initially
              "I am Professional Full Stack Developer",
              1000,
              "I am Professional Front-End Developer",
              1000,
              "I am Professional MERN Stack Developer",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "1.2em" }}
            repeat={Infinity}
          />
        </h4>

        <p className="mt-5 text-lg font-normal">
          Passionate about creating visually appealing, user-friendly websites.
          Seeking opportunities to drive innovation, exceed client expectations,
          and advance my career in web development.
        </p>
        <button className="btn btn-primary mr-5 rounded-sm text-white mt-8">
          <a href={Resume} download>
            Download Resume
          </a>
        </button>
        <button className="btn btn-primary  text-white font-normal rounded-sm">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-primary"
            className="inline-flex items-center"
          >
            Hire Me
          </Link>
        </button>
      </div>
      <div className="md:w-1/2 my-5 md:my-auto" data-aos="fade-left">
        <img className=" rounded-full" src={photo} alt="" />
      </div>
    </div>
  );
};

export default Home;
