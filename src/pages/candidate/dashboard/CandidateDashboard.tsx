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

const CandidateDashboard = () => {
  const userId = useAuthStore((state) => state.user?.id);

  const query = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId as number),
    enabled: !!userId,
  });

  const user = query.data?.data;

  if (!userId) return <p>Loading user...</p>;
  if (query.isLoading || !user) return <p>Loading...</p>;
  if (query.isError) return <p>Error loading user</p>;

  return (
    <div className="p-8 lg:px-16 flex flex-col w-full gap-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-2xl md:text-4xl font-bold">
            Welcome, {user.fullName.split(" ")[0]}!
          </h3>
          <p className="text-ring">Track your performance from here.</p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="text-ring">Total applications</CardHeader>
          <CardContent className="text-lg md:text-2xl font-bold">
            68
          </CardContent>
          <CardFooter className="text-ring text-sm md:text-md">
            +12% from last month
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="text-ring">Interviews Scheduled</CardHeader>
          <CardContent className="text-lg md:text-2xl font-bold">
            12
          </CardContent>
          <CardFooter className="text-ring text-sm md:text-md">
            +3 since last week
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="text-ring">Offers Received</CardHeader>
          <CardContent className="text-lg md:text-2xl font-bold">2</CardContent>
          <CardFooter className="text-ring text-sm md:text-md">
            Excellent progress
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="text-ring">Avg. Interview Score</CardHeader>
          <CardContent className="text-lg md:text-2xl font-bold">
            8.2 / 10
          </CardContent>
          <CardFooter className="text-ring text-sm md:text-md">
            +4.32% from last month
          </CardFooter>
        </Card>
      </div>

      <PerformanceChart />
    </div>
  );
};

export default CandidateDashboard;
