import { Separator } from "@/components/ui/separator";
import SettingItems from "./SettingItems";

const Settings = () => {
  return (
    <div className="p-8 lg:px-16 flex flex-col w-full gap-2">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-2xl md:text-4xl font-bold">General Settings</h3>
          <p className="text-ring">
            Manage your application's general preferences.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <SettingItems />
    </div>
  );
};

export default Settings;
