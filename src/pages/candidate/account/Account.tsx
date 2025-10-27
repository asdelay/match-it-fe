import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getUser } from "@/pages/candidate/dashboard/api";
import { useAuthStore } from "@/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import EditSheet from "./EditSheet";
import type { FullUser } from "@/types";
import { Link } from "react-router";
import { useMutations } from "./mutations";

const Account = () => {
  const userId = useAuthStore((state) => state.user?.id);

  const query = useQuery<{ data: FullUser }>({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId as number),
    enabled: !!userId,
  });

  const { logoutMutation, deleteAccountMutation } = useMutations();

  const userData = query.data?.data;
  if (!userId) return <p>Loading user...</p>;
  if (query.isLoading) return <p>Loading...</p>;
  if (query.isError || !userData) return <p>Error loading user</p>;

  return (
    <div className="p-8 lg:px-16 flex flex-col w-full gap-2">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <div>
          <h3 className="text-2xl md:text-4xl font-bold">Account Settings</h3>
          <p className="text-ring">
            Manage your profile information and preferences.
          </p>
        </div>
        <div>
          <EditSheet userData={userData} />
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <h4 className="font-semibold text-ring">Full Name</h4>
          <p>{userData?.fullName ?? "-"}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-ring">Email</h4>
          <p>{userData?.email ?? "-"}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-ring">CV</h4>
          {userData.cvUrl ? (
            <Link target="_blank" to={userData.cvUrl}>
              View CV
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-ring">Job Title</h4>
          <p>{userData?.jobTitle ?? "-"}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-ring">Phone Number</h4>
          <p>{userData?.phoneNumber ?? "-"}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-ring">Last update</h4>
          <p>
            {userData?.updatedAt
              ? new Date(userData.updatedAt).toLocaleDateString()
              : "-"}
          </p>
        </div>
      </div>
      <Separator className="my-8" />

      <Link to="/auth/user/forgot-password">
        <Button className="mt-4 md:mt-0" variant="outline">
          Reset Password
        </Button>
      </Link>
      <Separator className="my-8" />
      <div className="flex justify-between">
        <Button
          disabled={logoutMutation.isPending}
          className="mt-4 md:mt-0"
          variant="destructive"
          onClick={() => logoutMutation.mutate(userId)}
        >
          {logoutMutation.isPending ? "Loading..." : "Log Out"}
        </Button>
        <Button
          disabled={deleteAccountMutation.isPending}
          className="mt-4 md:mt-0"
          variant="destructive"
          onClick={() => deleteAccountMutation.mutate(userId)}
        >
          {deleteAccountMutation.isPending ? "Loading..." : "Delete Account"}
        </Button>
      </div>
    </div>
  );
};

export default Account;
