import SettingItem from "./SettingItem";
import { ModeToggle } from "@/components/mode-toggle";
import LanguageSelect from "@/components/language-toggle";
import EmailToggle from "@/components/ui/email-toggle";

const SettingItems = () => {
  return (
    <div className="flex flex-col gap-4">
      <SettingItem
        name="Dark theme"
        description="Toggle between light and dark themes"
      >
        <ModeToggle />
      </SettingItem>

      <SettingItem
        name="Language"
        description="Select your preferred language."
      >
        <LanguageSelect />
      </SettingItem>

      <SettingItem
        name="Email Notifications"
        description="Receive updates and announcements via email."
      >
        <EmailToggle />
      </SettingItem>
    </div>
  );
};

export default SettingItems;
