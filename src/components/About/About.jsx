// import Underline from "../Underline";
import photo from "../../assets/shofik.jpg";
import Resume from "../../assets/Shofikul-Islam.pdf";
// import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease in out", // default easing for AOS animations
});
const About = () => {
  return (
    <div id="about me" className=" py-20 w-full">
      {/* <h1 className="text-4xl text-center font-bold">About Me</h1>
            <Underline lineLength={"200"} /> */}

      <div className="md:flex  w-full  gap-10">
        <div className="md:w-1/4" data-aos="fade-right">
          <img className="w-full md:w-1/2" src={photo} alt="" />
        </div>
        <div className="w-full mt-5 md:mt-0" data-aos="fade-top">
          <h1 className="text-5xl font-bold mb-3">About Me</h1>

          <h2 className="text-2xl font-bold mb-3 ">Full Stack Web Developer</h2>
          <p className="text-justify">
            This is Shafikul Islam B.Sc. in chemistry honours final year
            Gaibandha Govt. College under the National University of
            Bangladesh.I am a Full Stack Web Developer.I have proficiency in
            HTML, CSS, Javascript,Typescript, React Js, Next Js, Node Js,
            Express Js, MongoDB, Prisma,Mongoose,Postgresql many more. I have
            completed more than 20 projects including 2 full-stack projects. I
            am a self-motivated and hard-working person. I am capable of writing
            clean and reusable code. I am qualified to adapt to new technology
            in a short time. As a web developer, my goal is to deliver
            outstanding web experiences that prioritize user satisfaction.
          </p>
          <button className="btn btn-primary mr-5 mt-5 text-white font-normal rounded-sm">
            <a href={Resume} download>
              Download Resume
            </a>
          </button>
          {/* <button className='btn btn-primary  text-white font-normal rounded-sm'>
                        <Link
                            to="https://drive.google.com/file/d/1Uz6lbK-EAVjkkmnKl6euoPu6103D8mcp/view?usp=sharing"
                            target='_blank'
                            className='inline-flex items-center'
                        >
                            Video
                        </Link>
                    </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
