import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser } from "./api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
const CandidateDashboard = () => {
  const queryClient = useQueryClient();
  const tempUser = queryClient.getQueryData(["tempUser"]);

  const userId = tempUser?.data?.user?.id; // safely extract the ID

  const query = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId), // ✅ must be a function!
    enabled: !!userId, // ✅ don't run until we have an ID
  });

  if (query.isLoading) return <p>Loading...</p>;
  if (query.isError) return <p>Error loading user</p>;

  const user = query.data?.data;
  console.log(user);

  return (
    <div className="mt-20 px-8 flex justify-center items-center">
      <div className="flex flex-col items-center gap-4 p-8 border-1 rounded-2xl ">
        <h3 className="text-2xl font-bold mb-4">{user.fullName}</h3>
        <p>Job title: {user.jobTitle}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phoneNumber}</p>
        <p>CV: {user.cvUrl}</p>
        <Button className="mt-2">
          <Link to="https://ai-powered-hr-interview-platform-73350400049.us-west1.run.app/">
            Start the interview
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CandidateDashboard;
