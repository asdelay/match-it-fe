import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Landing from "./pages/landing/Landing.tsx";
import Candidate from "./pages/candidate/Candidate.tsx";
import Navbar from "./components/Navbar.tsx";
import Interview from "./pages/interview/Interview.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Employer from "./pages/employer/Employer.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Toaster } from "sonner";
import CandidateDashboard from "./pages/CandidateDashboard/CandidateDashboard.tsx";
import UserRegister from "./pages/auth/userRegister/UserRegister.tsx";
import UserLogin from "./pages/auth/userLogin/UserLogin.tsx";
import Additional from "./pages/auth/additional/Additional.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />

                <Outlet />
              </div>
            }
          >
            <Route index element={<Landing />} />
            <Route path="/candidate" element={<Candidate />}></Route>
            <Route
              path="/candidate/dashboard"
              element={<CandidateDashboard />}
            ></Route>
            <Route path="/candidate/interview" element={<Interview />}></Route>
            <Route path="/employer" element={<Employer />}></Route>
          </Route>
          <Route path="/auth/user/login" element={<UserLogin />} />
          <Route path="/auth/user/register" element={<UserRegister />} />
          <Route path="/auth/user/additional" element={<Additional />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);
