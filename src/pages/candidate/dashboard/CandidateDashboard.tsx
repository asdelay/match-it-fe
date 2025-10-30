import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api";
import { useAuthStore } from "@/store/useAuthStore";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import PerformanceChart from "./PerformanceChart";
import { LoaderCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const CandidateDashboard = () => {
  const { t } = useTranslation();
  const userId =
    useAuthStore((state) => state.user?.id) || localStorage.getItem("userId");

  const query = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser(Number(userId)),
    enabled: !!userId,
  });

  const user = query.data?.data;

  if (query.isLoading || !user)
    return <LoaderCircle className="animate-spin" />;
  if (query.isError) return <p>Error loading user</p>;

  return (
    <div className="p-8 lg:px-16 flex flex-col w-full gap-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-2xl md:text-4xl font-bold">
            {t("dashboard.welcome")}, {user.fullName.split(" ")[0]}!
          </h3>
          <p className="text-ring">{t("dashboard.desc")}</p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="text-ring">
            {t("dashboard.totalApplications")}
          </CardHeader>
          <CardContent className="text-lg md:text-2xl font-bold">
            68
          </CardContent>
          <CardFooter className="text-ring text-sm md:text-md">
            +12% {t("dashboard.fromLastMonth")}
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="text-ring">
            {t("dashboard.interviews")}
          </CardHeader>
          <CardContent className="text-lg md:text-2xl font-bold">
            12
          </CardContent>
          <CardFooter className="text-ring text-sm md:text-md">
            +3 {t("dashboard.sinceLastWeek")}
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="text-ring">{t("dashboard.offers")}</CardHeader>
          <CardContent className="text-lg md:text-2xl font-bold">2</CardContent>
          <CardFooter className="text-ring text-sm md:text-md">
            {t("dashboard.progress")}
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="text-ring">
            {t("dashboard.avgScore")}
          </CardHeader>
          <CardContent className="text-lg md:text-2xl font-bold">
            8.2 / 10
          </CardContent>
          <CardFooter className="text-ring text-sm md:text-md">
            +4.32% {t("dashboard.fromLastMonth")}
          </CardFooter>
        </Card>
      </div>

      <PerformanceChart />
    </div>
  );
};

export default CandidateDashboard;
