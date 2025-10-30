import { motion, type Easing, type Variants } from "framer-motion";
import MainSection from "./components/MainSection";
import SmarterConnections from "./components/SmarterConnections";
import JobSeekers from "./components/JobSeekers";
import Employers from "./components/Employers";
import Footer from "@/components/footer";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as Easing },
  },
};

const Landing = () => {
  return (
    <motion.div
      className="mt-12 flex flex-col items-center gap-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MainSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
      <SmarterConnections
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
      <JobSeekers
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
      <Employers
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
      <Footer />
    </motion.div>
  );
};

export default Landing;
