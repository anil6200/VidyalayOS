import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Mail,
  Phone,
  Calendar,
  Send,
  ShieldCheck,
  Users,
  Zap,
  CheckCircle2,
} from "lucide-react";

import bgVideo from "../assets/bgvideos/video5.mp4";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    institutionName: "",
    role: "",
    phone: "",
    date: "",
  });
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.institutionName ||
      !formData.phone ||
      !formData.date
    ) {
      alert("Please fill all the fields!");
      return;
    }
    console.log("Form Submitted:", formData);
    setShowSuccess(true);
    setFormData({
      fullName: "",
      institutionName: "",
      role: "",
      phone: "",
      date: "",
    });
    setTimeout(() => setShowSuccess(false), 3000);
  };
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 40, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 40, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full -mt-38 py-14 lg:py-16 px-6 lg:px-20 overflow-hidden bg-white flex items-center min-h-150 z-10"
    >
      <div className=" absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover  "
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-white to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 1, // Speed slow kar di
            ease: "easeOut",
          }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-[40px]   font-bold font-space italic tracking-normal leading-[1.1]    text-slate-900  ">
            Let's Start a <span className="text-blue-600">Conversation .</span>
          </h2>
          <p className="text-gray-600 mt-3 text-[15px] font-space font-bold max-w-2xl">
            Have questions about VidyalayOS? Our team is here to help you
            automate your school .
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* LEFT SIDE: */}
          <div className="w-full lg:w-[40%] space-y-8">
            <h3 className="text-[16px] font-black font-serif  text-slate-900 tracking-wider uppercase">
              What to expect :
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: Zap,
                  title: "Quick Setup",
                  desc: "See how easily you can migrate your existing data.",
                  color: "text-blue-600 bg-blue-50",
                },
                {
                  icon: Users,
                  title: "Role-Based Access",
                  desc: "Experience the app as a Teacher, Parent, or Admin.",
                  color: "text-indigo-600 bg-indigo-50",
                },
                {
                  icon: ShieldCheck,
                  title: "Data Security",
                  desc: "Understand our bank-grade encryption & cloud backups.",
                  color: "text-emerald-600 bg-emerald-50",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex gap-4 group optimize-gpu"
                >
                  <div
                    className={`w-12 h-12 ${item.color} rounded-xl shrink-0 flex items-center justify-center transition-transform group-hover:scale-110`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold font-space tracking-wide text-slate-900 text-base">
                      {item.title}
                    </h4>
                    <p className="text-gray-800 font-space font-bold mt-1 italic  text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CONTACT  LINKS */}
            <div className="pt-8 border-t border-gray-100 flex flex-col gap-4">
              <div className="flex items-center gap-3 font-instrument tracking-wider text-slate-700 font-bold text-[15px]">
                <Phone className="w-5 h-5  text-blue-600" /> +91 94994 37069
              </div>
              <div className="flex items-center gap-3 tracking-wider font-space text-slate-700 font-bold text-sm">
                <Mail className="w-5 h-5 text-blue-600" />{" "}
                vvrmtechnologies@gmail.com
              </div>
            </div>
          </div>

          {/*  RIGHT SIDE  */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.95, x: 80 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-[40%]   mb-30  optimize-gpu  bg-white ring-1 ring-gray-100 pt-5 lg:p-10 rounded-3xl lg:rounded-4xl shadow-2xl shadow-blue-900/5 transition-shadow hover:shadow-blue-900/10"
          >
            <form
              onSubmit={handleSubmit}
              className="p-2 lg:p-0 grid grid-cols-1 md:grid-cols-2 gap-8"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="space-y-1.5 mb-1">
                <label className="text-[12px] font-bold capitalize font-space tracking-widest  text-slate-800 ml-3 lg:ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="lg:w-full w-full lg:translate-x-0  px-5 py-3.5 mt-2 lg:rounded-xl rounded-[3rem] bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none tracking-wider  font-space transition-all text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold capitalize font-space tracking-widest text-slate-800 ml-3 lg:ml-1">
                  Institution Name
                </label>
                <input
                  type="text"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  required
                  placeholder="Greenwood High"
                  className="w-full px-5 py-3.5 mt-2 lg:rounded-xl rounded-[3rem] bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none tracking-wider  font-space transition-all text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold capitalize font-space tracking-widest text-slate-800 ml-3 lg:ml-1">
                  Your Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 mt-2 lg:rounded-xl rounded-[3rem] bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all text-xs tracking-wider  font-space text-gray-500"
                >
                  <option value="" disabled hidden>
                    Select your role
                  </option>
                  <option value="Principal / Owner">Principal / Owner</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Teacher">Teacher</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold capitalize font-space  tracking-widest text-slate-800 ml-3 lg:ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 00000 00000"
                  className="w-full px-5 py-3.5 mt-2 lg:rounded-xl rounded-[3rem] bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 tracking-wider outline-none  font-space transition-all text-xs"
                />
              </div>

              <div className="space-y-1.5 md:col-span-1">
                <label className="text-[12px] font-bold capitalize font-space tracking-widest text-slate-800 ml-3 lg:ml-1">
                  Preferred Demo Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 mt-2 lg:rounded-xl rounded-[3rem] bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all text-xs font-space text-gray-500"
                  />
                  <Calendar className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="lg:w-full w-3/4 bg-blue-600 text-white font-black py-4 px-8 lg:px-0 rounded-4xl lg:rounded-2xl mb-5 lg:mb-0 ml-7 lg:ml-0 lg:shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3 hover:bg-blue-700 transition-all text-sm"
                >
                  <span>Schedule Demo</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-100 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 backdrop-blur-md"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle2 className="text-white w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Success!</h4>
              <p className="text-[10px] text-gray-400">
                Your demo will be scheduled soon.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
