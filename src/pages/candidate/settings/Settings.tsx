import { Separator } from "@/components/ui/separator";
import SettingItems from "./SettingItems";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();
  return (
    <div className="p-8 lg:px-16 flex flex-col w-full gap-2">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-2xl md:text-4xl font-bold">
            {t("settings.generalSettings")}
          </h3>
          <p className="text-ring">{t("settings.manageSettings")}</p>
        </div>
      </div>
      <Separator className="my-4" />
      <SettingItems />
    </div>
  );
};

export default Settings;
