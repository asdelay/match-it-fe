import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useAuthStore } from "@/store/useAuthStore";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

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
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">
                Building Your Application
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center gap-4 p-8 border-1 rounded-2xl ">
            <h3 className="text-2xl font-bold mb-4">{user.fullName}</h3>
            <p>Job title: {user.jobTitle}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phoneNumber}</p>
            <p>
              CV:{" "}
              {user.cvUrl ? (
                <Link target="_blank" to={user.cvUrl}>
                  Check CV
                </Link>
              ) : (
                ""
              )}
            </p>
            <Button className="mt-2">
              <Link to="https://ai-powered-hr-interview-platform-73350400049.us-west1.run.app/">
                Start the interview
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SidebarInset>
  );
};

export default CandidateDashboard;
