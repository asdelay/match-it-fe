import React from "react";
import { motion, type Variants } from "framer-motion";
import NumberableCard from "./NumerableCard";
import { useTranslation } from "react-i18next";
interface SmarterConnections {
  containerVariants: Variants;
  itemVariants: Variants;
}

const Employers: React.FC<SmarterConnections> = ({
  containerVariants,
  itemVariants,
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="flex flex-col items-center gap-2 p-12 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3
        className="!text-3xl lg:!text-6xl font-semibold text-secondary-foreground mb-8 text-center"
        variants={itemVariants}
      >
        {t("landing.employers")}
      </motion.h3>

      <motion.p
        className="text-md lg:text-2xl text-center text-ring"
        variants={itemVariants}
      >
        {t("landing.employersDesc")}
      </motion.p>

      <motion.div
        className="mt-12 lg:mt-30 flex flex-col lg:flex-row gap-8 justify-between items-center"
        variants={itemVariants}
      >
        <NumberableCard
          itemVariants={itemVariants}
          title={t("landing.postJob")}
          description={t("landing.postJobTitle")}
          number={1}
        />
        <NumberableCard
          itemVariants={itemVariants}
          title={t("landing.aiMatches")}
          description={t("landing.aiMatchesDesc")}
          number={2}
        />
        <NumberableCard
          itemVariants={itemVariants}
          title={t("landing.connect")}
          description={t("landing.connectDesc")}
          number={3}
        />
      </motion.div>
    </motion.div>
  );
};

export default Employers;
