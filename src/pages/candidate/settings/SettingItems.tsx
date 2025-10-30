import SettingItem from "./SettingItem";
import { ModeToggle } from "@/components/mode-toggle";
import LanguageSelect from "@/components/language-toggle";
import EmailToggle from "@/components/ui/email-toggle";
import { useTranslation } from "react-i18next";

const SettingItems = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4">
      <SettingItem
        name={t("settings.darkTheme")}
        description={t("settings.darkThemeDesc")}
      >
        <ModeToggle />
      </SettingItem>

      <SettingItem
        name={t("settings.lang")}
        description={t("settings.selectLang")}
      >
        <LanguageSelect />
      </SettingItem>

      <SettingItem
        name={t("settings.emailNotifications")}
        description={t("settings.receiveNotifications")}
      >
        <EmailToggle />
      </SettingItem>
    </div>
  );
};

export default SettingItems;
