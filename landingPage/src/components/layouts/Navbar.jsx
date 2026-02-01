import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { navItems } from "../../constants";
import Button from "../common/Button";
import Logo from "../../assets/images/Logo2.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className=" inset-x-0 fixed top-0 left-0 right-0 w-screen z-50 bg-primary   border-b border-gray-900 rounded-b-[3px] shadow-xl py-2  flex-none">
      <div className="w-full px-6 lg:px-10 relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center shrink-0 cursor-pointer ml-6 mt-1 ">
            <img
              src={Logo}
              alt="VidhalayaOS Logo"
              className="h-13 w-auto mr-4 transform scale-310 object-contain [image-rendering:-webkit-optimize-contrast]"
            />
          </div>

          <ul className="hidden lg:flex ml-auto mr-0 mt-3  space-x-6 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-78}
                  delay={0}
                  ease="easeOutExpo"
                  className="cursor-pointer  font-space font-medium text-[15px] tracking-wider text-gray-200 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center font-space font-medium tracking-wide mt-2  items-center ml-8">
            <Button
              href="#"
              variant="primary"
              className="px-6 py-2  text-[15px]"
            >
              Sign In
            </Button>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* MOBILE Menu */}

        <AnimatePresence>
          {mobileDrawerOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed right-0 top-18.75 z-20 bg-primary/95 font-fraunces tracking-wider backdrop-blur-lg w-[94%] mx-auto left-0 rounded-2xl p-8 flex flex-col items-center lg:hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10"
            >
              <ul className="space-y-5 text-center w-full">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      onClick={toggleNavbar}
                      to={item.href}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className="relative block py-2 text-white text-xl font-medium hover:text-blue-500 transition-colors group"
                    >
                      {item.label}
                      {/* 🚀 Hover Underline Animation */}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 w-full flex justify-center"
              >
                <Button
                  href="#"
                  variant="primary"
                  className="w-full max-w-xs py-4 rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all active:scale-95"
                >
                  Sign In
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
