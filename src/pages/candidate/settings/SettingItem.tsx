import { Separator } from "@/components/ui/separator";
import React from "react";

interface SettingItemProps {
  name: string;
  description: string;
  children: React.ReactNode;
}

const SettingItem: React.FC<SettingItemProps> = ({
  name,
  description,
  children,
}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h6 className="font-semibold">{name}</h6>
          <p className="text-ring">{description}</p>
        </div>
        {children}
      </div>
      <Separator className="my-2" />
    </>
  );
};

export default SettingItem;
