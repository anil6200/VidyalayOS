import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dashboard from "../assets/images/dashboard.png";
import dashboard2 from "../assets/images/dashboard2.png";
import dashboard4 from "../assets/images/dashboard3.png";
import bgvideo from "../assets/bgvideos/video3.mp4";
import { Link } from "react-scroll";

import { FaSchool, FaGraduationCap, FaChalkboardUser } from "react-icons/fa6";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 15,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stagger: 0.5,
      damping: 12,
      stiffness: 100,
    },
  },
};

const Hero = () => {
  const sliderImages = [dashboard4, dashboard, dashboard2];
  const [currentImg, setCurrentImg] = useState(0);

  const [index, setIndex] = useState(0);
  const slidingHeadlines = [
    { text: "Empower your School with VidyalayOs", highlight: "VidyalayOs" },
    {
      text: "Simplify Administration, Amplify Learning",
      highlight: "Learning",
    },
    {
      text: "Seamless Management for Modern Schools",
      highlight: "Modern Schools",
    },
    {
      text: "Digital Transformation for Every Classroom",
      highlight: "Every Classroom",
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % sliderImages.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidingHeadlines.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);
  const statsData = [
    {
      icon: FaSchool,
      number: "500+",
      label: "Schools Using VidyalayOs",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: FaGraduationCap,
      number: "150K+",
      label: "Students Enrolled",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: FaChalkboardUser,
      number: "8,000+",
      label: "Teachers Connected",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];
  return (
    <motion.section
      id="home"
      variants={containerVariants}
      viewport={{ once: false, amount: 0.3 }}
      initial="hidden"
      animate="visible"
      className=" relative min-h-screen lg:h-[calc(100vh-80px)] w-screen bg-white overflow-hidden flex items-center pt-16 pb-5 lg:pb-0"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.video
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          autoPlay
          muted
          loop
          playsInline
          loading="lazy"
          preload="metadata"
          className="  absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover    "
        >
          <source src={bgvideo} type="video/mp4" />
        </motion.video>{" "}
        *{/*  Overlay:   */}
        <div className="absolute inset-0 "></div>
      </div>
      {/*   MAIN WRAPPER  */}
      <div className=" max-w-7xl mx-auto w-full h-full flex flex-col lg:flex-row items-center justify-between  px-6 lg:px-12 py-10 lg:py-0">
        {/* LEFT SIDE:CONTENT */}

        <div className=" w-full lg:w-[42%] flex flex-col justify-center space-y-4 lg:space-y-14 text-center lg:text-left lg:pr-10 z-40 relative px-4">
          <div className=" flex flex-col max-w-xl">
            <motion.div
              variants={itemVariants}
              className="  relative h-auto will-change-transform min-h-20 lg:h-35 overflow-hidden mb-4 lg:mb-0 lg:mt-12"
            >
              <AnimatePresence mode="wait">
                <motion.h1
                  key={index}
                  className="text-3xl lg:text-[38px] md:text-5xl will-change-transform  font-bold font-space italic text-primary tracking-normal leading-tight  "
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {slidingHeadlines[index].text.split(" ").map((word, i) => {
                    const isHighlighted =
                      slidingHeadlines[index].highlight.includes(word);

                    return (
                      <span
                        key={i}
                        className={isHighlighted ? "text-blue-600" : ""}
                      >
                        {word} {i === 1 && <br />}
                      </span>
                    );
                  })}
                </motion.h1>
              </AnimatePresence>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className=" will-change-transform flex flex-row items-center justify-center lg:justify-start gap-3  md:gap-6 lg:gap-10 mt-2 lg:mt-0 "
            >
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className=" flex flex-col items-center lg:flex-row lg:items-center gap-2 lg:gap-3 flex-1 lg:flex-none"
                >
                  <div
                    className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center ${stat.bgColor} shrink-0`}
                  >
                    <stat.icon
                      className={`text-sm lg:text-lg ${stat.iconColor}`}
                    />
                  </div>
                  <div className=" flex flex-col text-center lg:text-left ">
                    <h3 className="  text-[10px] lg:text-sm font-black text-slate-900 leading-none">
                      {stat.number}
                    </h3>
                    <p className="  text-[7px] lg:text-[10px] font-bold text-slate-600 uppercase mt-1 lg:mt-1 max-w-16.25 lg:max-w-21.25 leading-snug  lg:leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[16px] lg:text-[17px] text-gray-900 -translate-y-9 font-young mb-12 mt-20 font-medium leading-relaxed tracking-wide max-w-105"
            >
              The complete all-in-one platform to{" "}
              <span className="text-slate-800 text-[17px] font-sora  ">
                automate administration
              </span>
              , bridge communication, and focus on student growth.
            </motion.p>
            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className=" flex justify-center lg:justify-start w-full  lg:mt-0 -translate-y-12 lg:-translate-y-10"
            >
              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                className="flex items-center gap-3 optimize-gpu text-slate-700 font-bold font-space tracking-wider hover:text-blue-600 transition-all group cursor-pointer"
              >
                {/* Play Icon Circle */}
                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-8 border-l-blue-600 border-b-[5px] border-b-transparent ml-1"></div>
                </div>

                <span className="text-lg">Quick Demo</span>
              </Link>
            </motion.div>
          </div>
        </div>
        {/* RIGHT SIDE:*/}
        <motion.div
          variants={itemVariants}
          className="   w-[158%] lg:w-[55%] flex items-center justify-center lg:justify-end z-40  translate-x-1 lg:translate-x-12 mt-0 -translate-y-5 lg:mt-0"
        >
          <div className="  relative w-full max-w-[320px] md:max-w-150 lg:max-w-187.5 group px-4 lg:px-0 ">
            <div className=" relative rounded-4xl lg:rounded-[2.5rem] bg-white border border-slate-200 p-1 lg:p-1.6 shadow-2xl overflow-hidden transform transition-all duration-700 hover:rotate-1 lg:hover:rotate-2 hover:scale-[1.02]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImg}
                  src={sliderImages[currentImg]}
                  alt="VidyalayOS Feature"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-auto rounded-4xl object-cover shadow-inner"
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
      {/* BOTTOM OVERLAY  */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent z-0 pointer-events-none"></div>
    </motion.section>
  );
};

export default Hero;
