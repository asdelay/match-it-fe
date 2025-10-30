import React from "react";
import { motion, type Variants } from "framer-motion";

interface SmarterConnections {
  itemVariants: Variants;
  title: string;
  description: string;
  number: number;
}

const NumberableCard: React.FC<SmarterConnections> = ({
  itemVariants,
  title,
  description,
  number,
}) => {
  return (
    <motion.div
      className="w-[300px] border-1 border-ring rounded-2xl flex flex-col items-center"
      variants={itemVariants}
    >
      <div className="bg-accent size-12 flex justify-center items-center p-2 rounded-full font-bold -translate-y-[50%]">
        <p>{number}</p>
      </div>
      <div className="px-8 pb-8">
        <h6 className="text-lg font-semibold">{title}</h6>
        <p className="text-ring">{description}</p>
      </div>
    </motion.div>
  );
};

export default NumberableCard;
