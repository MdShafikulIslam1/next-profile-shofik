import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'
const SocialLinks = () => {

    return (
        <ul className='text-md flex  gap-x-4  '>
            <li className='p-2 bg-primary text-white rounded-md hover:scale-125 duration-200'>
                <Link to="https://www.facebook.com/profile.php?id=100013695768823" target='_blank'>
                    <FaFacebookF />
                </Link>
            </li>
            <li className='p-2 bg-primary text-white rounded-md hover:scale-125 duration-200'>
                <Link to="https://www.linkedin.com/in/md-shofikul-islam-shofik-0835a5259" target='_blank'>
                    <FaLinkedinIn />
                </Link>

            </li>
            <li className='p-2 bg-primary text-white rounded-md hover:scale-125 duration-200'>
                <Link to="https://github.com/" target='_blank'>
                    <FaGithub />
                </Link>
            </li>
        </ul>
    );
};

export default SocialLinks;