import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";
import logo from "../../assets/images/Logo2.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-2 lg:pt-10 pb-8 px-10 lg:h-auto">
      <div className=" max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 lg:gap-12 mb-10">
        <div className="flex flex-col lg:-translate-x-4">
          <div className="flex items-start mt-2 lg:mt-0 lg:-translate-y-14 lg:-translate-x-9 lg:-ml-3 ">
            <img
              src={logo}
              alt="VidyalayOS Logo"
              className="lg:h-55 h-18 w-auto object-contain scale-[1.8] lg:scale-125  transition-transform"
            />
          </div>

          <p className="text-gray-300 font-space lg:tracking-wider lg:text-sm text-[10px] lg:leading-relaxed tracking-wider -mt-3  lg:mt-2  lg:-translate-y-29 relative z-10">
            The future of education management. Empowering schools with digital
            efficiency and seamless administration.
          </p>

          <div className="flex gap-4 mt-6 lg:-translate-y-25">
            {[FaFacebook, FaInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3, color: "#3B82F6" }}
                className="text-gray-400 text-xl transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="lg:translate-x-8 translate-x-6">
          <h4 className="lg:text-lg text-sm font-bold lg:mt-6 mt-8 lg:mb-6  mb-4 font-space tracking-wider text-blue-500">
            Quick Navigation
          </h4>
          <ul className="flex flex-col font-space gap-3 text-gray-300 text-sm">
            {["Home", "About ", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  to={link.toLowerCase().replace(" ", "")}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:text-blue-500 transition-colors cursor-pointer"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:translate-y-3">
          <h4 className="lg:text-lg text-sm font-bold font-space lg:mb-6 lg:translate-3 tracking-wider ">
            Core Modules
          </h4>
          <ul className="flex flex-col gap-3 text-gray-300 font-space lg:mt-8 mt-3 lg:translate-x-2.5 text-[11px] lg:text-sm">
            <li className="hover:text-white transition-all cursor-default">
              • Student Management
            </li>
            <li className="hover:text-white transition-all cursor-default">
              • Attendance Tracking
            </li>
            <li className="hover:text-white transition-all cursor-default">
              • Fees & Accounting
            </li>
            <li className="hover:text-white transition-all cursor-default">
              • Exam Management
            </li>
          </ul>
        </div>

        <div className="lg:translate-y-6 col-span-1">
          <h4 className="lg:text-lg text-sm font-bold lg:mb-6 mb-4 font-space  tracking-wider">
            Get In Touch
          </h4>
          <ul className="flex flex-col gap-3 lg:gap-4 lg:-translate-y-1 -translate-x-5 lg:translate-x-0 text-gray-300 text-[11px] lg:text-sm">
            <li className="flex items-center gap-2 lg:translate-x-0 -translate-x-2 whitespace-nowrap lg:gap-3 ">
              <FaPhone className="text-blue-600 shrink-0" /> +91 94994 37069
            </li>
            <li className="flex lg:items-center items-start font-space lg:tracking-wider gap-2 lg:gap-3">
              <FaEnvelope className="text-blue-500 mt-1 lg:mt-0 shrink-0" />
              <span className="break-all lg:break-normal">
                vvrmtechnologies@gmail.com
              </span>
            </li>
            <li className="flex font-space tracking-wider items-start gap-3">
              <FaLocationDot className="text-blue-500 mt-1" />
              <span> Rohtak, Haryana, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 lg:pt-3 lg:-translate-y-8 -translate-y-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-300 lg:mt-0 mt-3 lg:leading-0 leading-[-5] lg:text-xs text-[11px] lg:mb-0 mb-3 text-center md:text-left">
          © 2026 VidyalayOS. All rights reserved. Created with ❤️ for Schools.
        </p>
        <div className="flex gap-6 text-xs text-gray-300">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
