import React, { useRef, useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { HiMail, HiUser,HiPhone } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import emailjs from "emailjs-com";
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import Fiverr_Icon from "../components/Fiverr_Icon";
import Footer from "../components/Footer";
const Contact = () => {
  const form = useRef();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false)
  const handleOk = () => {
    // Perform any necessary actions here

    // Close the modal
    setIsOpen(false);

    // Navigate to the homepage
    router.push('/');
  };

  const handleCancel = () => {
    // Perform any necessary actions here

    // Close the modal
    setIsOpen(false);

    // Navigate to the homepage
    router.push('/');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_grwz04j",
        "template_qj43agl",
        form.current,
        "p6mJg_qMUC2_OCjyo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <BannerLayout>
      <div className=" px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="text-LightGray md:text-sm">India</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="text-LightGray md:text-sm">Pune</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Company:</span>
                <span className="text-LightGray md:text-sm">Ariv Tech</span>
              </div>
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="text-LightGray text-sm">
                  meheratharva49@gmail.com
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Linkedin:</span>
                <a
                  className="text-LightGray text-sm"
                  href="https://www.linkedin.com/in/atharva-meher-8574131a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Atharva Meher
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone:</span>
                <span className="text-LightGray text-sm">+91 7774 891831</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://github.com/atharvam2004"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://www.linkedin.com/in/atharva-meher-8574131a0/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://twitter.com/43Meher"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700 hidden sm:block"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <Fiverr_Icon />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <SiUpwork />
          </a>
        </div>

        <div className="my-12 w-full h-auto text-Snow">
          <h1 className="text-lg font-bold">Get In Touch</h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm"
          >
            <div className="flex flex-col w-full">
              <div className="userIcon relative mb-6">
                <div
                  id="icon"
                  className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                >
                  <HiUser />
                </div>
                <input
                  type="text"
                  className="input_stylings"
                  name="from_name"
                  placeholder="Name"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="userIcon relative mb-6">
                <div
                  id="icon"
                  className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                >
                  <HiPhone />
                </div>
                <input
                  type="text"
                  className="input_stylings"
                  name="phone"
                  placeholder="Phone No"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="mailIcon relative mb-6">
                <div
                  id="icon"
                  className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                >
                  <HiMail />
                </div>
                <input
                  name="email"
                  type="email"
                  className="input_stylings"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="textIcon relative mb-6">
                <div
                  id="icon"
                  className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                >
                  <BsChatTextFill />
                </div>
                <textarea
                  rows={6}
                  cols={50}
                  name="message"
                  className="input_stylings"
                  placeholder="Message"
                />
              </div>
            </div>
            <input className="button"  onClick={() => setIsOpen(true)} type="submit" value="Send" />
          </form>
        </div>
      </div>
      {/* success modal */}

      <Footer />
      <Modal
                 className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
                 centered
                 open={isOpen}
                 footer={null}
                 closable={false}
                 onOk={handleOk}
                 onCancel={handleCancel}
            >
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-Green font-bold text-2xl'>Messege Sent!!</h1>
                    <p >I have recieved your messege and will try to connect ASAP!</p>
                </div>
            </Modal>
    </BannerLayout>
  );
};

export default Contact;
