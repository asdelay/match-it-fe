import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessagesSquare } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
const Interview = () => {
  const { t } = useTranslation();
  return (
    <div className="p-8 lg:px-16 flex flex-col w-full gap-8 items-center">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-4xl font-bold">
            {t("aiInterview.heading")}
          </h3>
          <p className="text-ring">{t("aiInterview.desc")}</p>
        </div>
      </div>
      <Card className="w-full max-w-sm text-center">
        <CardHeader>
          <CardTitle className="flex flex-col gap-2 items-center">
            <MessagesSquare size={64} />
            <span className="text-lg md:text-2xl">
              {t("aiInterview.cardTitle")}
            </span>
          </CardTitle>
          <CardDescription>{t("aiInterview.cardDesc")}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            to="https://ai-powered-hr-interview-platform-73350400049.us-west1.run.app/"
            className="w-full"
            target="_blank"
          >
            <Button className="w-full">
              {t("aiInterview.startInterview")}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Interview;
