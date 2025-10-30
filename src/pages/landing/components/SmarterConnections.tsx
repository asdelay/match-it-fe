import React from "react";
import { motion, type Variants } from "framer-motion";
import ConnectionCard from "./ConnectionCard";
import { Activity, CircleCheckBig, UserRound } from "lucide-react";
import { useTranslation } from "react-i18next";
interface SmarterConnections {
  containerVariants: Variants;
  itemVariants: Variants;
}

const SmarterConnections: React.FC<SmarterConnections> = ({
  containerVariants,
  itemVariants,
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="flex flex-col bg-card items-center gap-2 p-12 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3
        className="!text-3xl lg:!text-6xl font-semibold text-secondary-foreground mb-8 text-center"
        variants={itemVariants}
      >
        {t("landing.unlockConnections")}
      </motion.h3>

      <motion.p
        className="text-md lg:text-2xl text-center text-ring"
        variants={itemVariants}
      >
        {t("landing.connectionsDesc")}
      </motion.p>

      <motion.div
        className="mt-10 flex flex-col lg:flex-row gap-8 justify-between items-center"
        variants={itemVariants}
      >
        <ConnectionCard
          itemVariants={itemVariants}
          title={t("landing.precisionTitle")}
          description={t("landing.precisionDesc")}
          icon={<CircleCheckBig />}
        />
        <ConnectionCard
          itemVariants={itemVariants}
          title={t("landing.profiles")}
          description={t("landing.profileDesc")}
          icon={<UserRound />}
        />
        <ConnectionCard
          itemVariants={itemVariants}
          title={t("landing.application")}
          description={t("landing.applicationDesc")}
          icon={<Activity />}
        />
      </motion.div>
    </motion.div>
  );
};

export default SmarterConnections;
