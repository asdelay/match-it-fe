import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useActiveTitle, useCandidateStore } from "@/store/useCandidateStore";
import { Separator } from "@radix-ui/react-separator";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router";

const Candidate = () => {
  const { pathname } = useLocation();
  const { setActiveByPathname } = useCandidateStore();
  const { t } = useTranslation();

  useEffect(() => {
    setActiveByPathname(pathname);
  }, [pathname, setActiveByPathname]);
  const acitveTitle = useActiveTitle();
  console.log(acitveTitle);
  return (
    <SidebarProvider>
      <AppSidebar />
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
                {t(`sidebar.${acitveTitle}`)}
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Candidate;
