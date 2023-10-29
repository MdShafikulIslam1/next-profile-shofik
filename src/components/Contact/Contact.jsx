
import Lottie from 'react-lottie';
import MailAnimation from '../../assets/Mail.json';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from "react-hot-toast";
import 'aos/dist/aos.css';
import Aos from "aos";
// ..
Aos.init({
    duration: 1000,
    easing: 'ease in out',
});

const Contact = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: MailAnimation,
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('portfolioService',
            'template_1r3kcrt',
            form.current,
            '2aeXz6zDJ2l5oX4F0'
        )
            .then(() => {
                toast.success('Thanks You so much for your response!')
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="py-20" id="contact">
            <div className="items-center justify-between md:flex">
                <div className="md:w-1/2" data-aos='fade-right'>
                    <Lottie options={defaultOptions} />
                </div>
                <div className="md:w-1/2 " data-aos='fade-up'>
                    <h1 className="mb-10 text-5xl font-bold text-primary">Contact With Me</h1>
                    <form ref={form} onSubmit={sendEmail} className="w-full" action="">
                        <div className="mb-5">
                            <label className="font-bold text-white" htmlFor="">Name</label>
                            <input
                                name="user_name"
                                className="w-full px-5 py-2 mt-2 border-0 text-slate-800 outline-primary focus:shadow-md focus:shadow-primary"
                                type="text" />
                        </div>
                        <div className="mb-5">
                            <label className="font-bold text-white" htmlFor="">Email</label>
                            <input
                                name="user_email"
                                className="w-full px-5 py-2 mt-2 border-0 text-slate-800 outline-primary focus:shadow-md focus:shadow-primary "
                                type="text" />
                        </div>

                        <div>
                            <label className="font-bold text-white" htmlFor="">Message</label>
                            <textarea
                                className="w-full px-5 py-2 mt-2 mb-5 border-0 outline-primary text-slate-800"
                                name="message" id="" cols="30" rows="5"></textarea>
                        </div>
                        <button type="submit" className="w-full text-lg font-normal text-white rounded-sm btn btn-primary">Send Mail</button>
                    </form>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Contact;