import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const LanguageSelect = () => {
  const { t, i18n } = useTranslation();
  return (
    <Select onValueChange={(value) => i18n.changeLanguage(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t("settings.selectLang")} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("settings.lang")}</SelectLabel>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="nl">Nederlands</SelectItem>
          <SelectItem value="ua">Українська</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;
