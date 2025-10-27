import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { motion, type Easing } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
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
      className="py-12 flex justify-center items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col items-center gap-2 w-[400px] px-12 lg:w-[900px]"
        variants={containerVariants}
      >
        <motion.div className="flex flex-col" variants={itemVariants}>
          <motion.h1 className="mt-4 font-bold !text-8xl lg:text-6xl font-sans tracking-wider">
            MATCH IT
          </motion.h1>
          <motion.p className="mb-8 text-sm">
            powered by <span className="font-bold">Eburon</span>
          </motion.p>
        </motion.div>

        <motion.h3
          className="!text-6xl font-semibold text-secondary-foreground mb-12 text-center"
          variants={itemVariants}
        >
          Unlock Your Potential with <br />{" "}
          <span
            style={{
              backgroundSize: "200% 200%",
              animation: "gradientMove 3s ease infinite",
            }}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            AI-Powered Matching
          </span>
        </motion.h3>

        <motion.p
          className="text-2xl text-center text-ring"
          variants={itemVariants}
        >
          Match-It revolutionizes hiring for job seekers and companies with
          intelligent AI matching, personalized recommendations, and
          cutting-edge AI interviews.
        </motion.p>

        <motion.div
          className="mt-10 flex gap-8 justify-between items-center"
          variants={itemVariants}
        >
          <Link to="/candidate/dashboard">
            <Button className="cursor-pointer">
              <p className="font-semibold">Find Your Dream Job</p>
            </Button>
          </Link>
          <Link to="/employer">
            <Button className="cursor-pointer font-semibold">
              Hire Top Talent
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
