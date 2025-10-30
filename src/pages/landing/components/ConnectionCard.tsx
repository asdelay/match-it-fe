import React from "react";
import { motion, type Variants } from "framer-motion";

interface SmarterConnections {
  itemVariants: Variants;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ConnectionCard: React.FC<SmarterConnections> = ({
  itemVariants,
  title,
  description,
  icon,
}) => {
  return (
    <motion.div
      className="w-[300px] p-8 border-1 border-ring rounded-2xl flex flex-col gap-2"
      variants={itemVariants}
    >
      {icon}
      <h6 className="text-lg font-semibold">{title}</h6>
      <p className="text-ring">{description}</p>
    </motion.div>
  );
};

export default ConnectionCard;
