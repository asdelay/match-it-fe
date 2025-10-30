import React from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface MainSectionProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

const MainSection: React.FC<MainSectionProps> = ({
  containerVariants,
  itemVariants,
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="flex flex-col items-center gap-2 px-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="flex flex-col" variants={itemVariants}>
        <motion.h1 className="mt-4 font-bold text-6xl lg:text-8xl font-sans tracking-wider">
          MATCH IT
        </motion.h1>
        <motion.p className="mb-8 text-sm">
          powered by <span className="font-bold">Eburon</span>
        </motion.p>
      </motion.div>

      <motion.h3
        className="!text-3xl lg:!text-6xl font-semibold text-secondary-foreground mb-12 text-center"
        variants={itemVariants}
      >
        {t("landing.unlockPotential")} <br />
        <span
          style={{
            backgroundSize: "200% 200%",
            animation: "gradientMove 3s ease infinite",
          }}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          {t("landing.aiMatching")}
        </span>
      </motion.h3>

      <motion.p
        className="text-md lg:text-2xl text-center text-ring max-w-[800px]"
        variants={itemVariants}
      >
        {t("landing.desc")}
      </motion.p>

      <motion.div
        className="mt-20 flex gap-8 justify-between items-center"
        variants={itemVariants}
      >
        <Link to="/candidate/dashboard">
          <Button className="cursor-pointer text-lg px-8 py-6">
            <p className="font-semibold">{t("landing.findJob")}</p>
          </Button>
        </Link>
        <Link to="/employer">
          <Button
            variant="outline"
            className="cursor-pointer text-lg px-8 py-6"
          >
            <div className="font-semibold">{t("landing.hire")}</div>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default MainSection;
