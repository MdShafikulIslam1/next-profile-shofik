import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'
const SocialLinks = () => {

    return (
        <ul className='text-md flex  gap-x-4  '>
            <li className='p-2 bg-primary text-white rounded-md hover:scale-125 duration-200'>
                <Link to="https://www.facebook.com/profile.php?id=100088009747582" target='_blank'>
                    <FaFacebookF />
                </Link>
            </li>
            <li className='p-2 bg-primary text-white rounded-md hover:scale-125 duration-200'>
                <Link to="https://www.linkedin.com/in/md-habibur-rahman4542" target='_blank'>
                    <FaLinkedinIn />
                </Link>

            </li>
            <li className='p-2 bg-primary text-white rounded-md hover:scale-125 duration-200'>
                <Link to="https://github.com/habibur-pro" target='_blank'>
                    <FaGithub />
                </Link>
            </li>
        </ul>
    );
};

export default SocialLinks;