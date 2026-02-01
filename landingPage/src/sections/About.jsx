import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  Wallet,
  ClipboardList,
  CalendarDays,
  MessageSquare,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import BgImage from "../assets/bgimages/img11.png";

const featuresData = [
  {
    title: "Student Management",
    desc: "Complete profiles, attendance, and analytics in one centralized system.",
    icon: UserCheck,
    points: ["Digital admission", "Attendance tracking"],
    bgColor: "bg-blue-50/40",
    iconBg: "bg-blue-600",
    accent: "text-blue-600",
  },
  {
    title: "Fee Management",
    desc: " Streamline fee collection with automated billing, digital receipts, and real-time financial tracking.",
    icon: Wallet,
    points: ["Online payments", "Auto reminders"],
    bgColor: "bg-emerald-50/40",
    iconBg: "bg-emerald-500",
    accent: "text-emerald-500",
  },
  {
    title: "Examination System",
    desc: "Complete management from scheduling to result publication.",
    icon: ClipboardList,
    points: ["Exam scheduling", "Report cards"],
    bgColor: "bg-purple-50/40",
    iconBg: "bg-purple-500",
    accent: "text-purple-500",
  },
  {
    title: "Timetable Management",
    desc: "Intelligent creation with automated schedule optimization.",
    icon: CalendarDays,
    points: ["Smart scheduling", "Teacher allocation"],
    bgColor: "bg-orange-50/40",
    iconBg: "bg-orange-500",
    accent: "text-orange-500",
  },
  {
    title: "Communication Hub",
    desc: "Seamless communication between teachers, students, and parents.",
    icon: MessageSquare,
    points: ["SMS alerts", "Parent portal"],
    bgColor: "bg-rose-50/40",
    iconBg: "bg-rose-500",
    accent: "text-rose-500",
  },
  {
    title: "Library Management",
    desc: "Digital cataloging, issue tracking, and inventory control.",
    icon: BookOpen,
    points: ["Book catalog", "Issue tracking"],
    bgColor: "bg-indigo-50/40",
    iconBg: "bg-indigo-600",
    accent: "text-indigo-600",
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const bubbleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
      forceRender: true,
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="   relative pb-5 py-10 lg:py-10 lg;pb-20 px-6 lg:px-20 bg-white"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover  "
        >
          <source src={bgvideo} type="video/mp4" />
        </video> */}
        <img
          src={BgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* TOP OVERLAY   */}
        <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER: */}
        <div className="text-center mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold font-mono uppercase tracking-[0.2em] translate-y-1 text-[10px]  "
          >
            Powerful Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className=" text-3xl lg:text-[40px] mt-5 lg:mt-5   font-bold font-mono  tracking-normal leading-[1.1] text-slate-900  mb-2"
          >
            All-in-One <span className="text-blue-600">Platform</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-600 max-w-xl mt-3 lg:mt-1 mx-auto font-space font-medium text-sm leading-relaxed"
          >
            Simplified tools designed to automate every aspect of your school
            operations .
          </motion.p>
        </div>

        {/* FEATURES GRID:*/}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-2 will-change-transform lg:grid-cols-3 gap-3 lg:gap-4"
        >
          {featuresData.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={bubbleVariants}
              className={`lg:p-6 p-4 lg:rounded-4xl rounded-[1.2rem] border border-gray-100 ${feature.bgColor} transform-gpu will-change-transform transition-shadow duration-300 hover:shadow-xl relative overflow-hidden`}
              style={{ backfaceVisibility: "hidden" }}
            >
              <div
                className={`absolute -right-4 -top-4 w-16 h-16 ${feature.iconBg} opacity-10 blur-2xl rounded-full pointer-events-none`}
              ></div>
              <div
                className={`lg:w-10 lg:h-10 w-8 h-8  ${feature.iconBg}  rounded-lg flex items-center justify-center mb-3`}
              >
                <feature.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="lg:text-lg text-sm font-medium font-fraunces text-slate-900 lg:mb-3 mb-1 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-500 lg:text-gray-600 font-medium font-outfit tracking-wider leading-tight lg:leading-relaxed mb-4 text-[10px] lg:text-[13px]">
                {feature.desc}
              </p>
              <div className="space-y-2">
                {feature.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2">
                    <CheckCircle2
                      className={`${feature.accent} w-4 h-4 brightness-95`}
                    />
                    <span className="text-slate-700 lg:font-bold font-mono font-medium text-[11px]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* BOTTOM OVERLAY  */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent z-0 pointer-events-none"></div>
    </section>
  );
};

export default About;
