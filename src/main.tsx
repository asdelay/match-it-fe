import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Landing from "./pages/landing/Landing.tsx";
import Candidate from "./pages/candidate/Candidate.tsx";
import Navbar from "./components/Navbar.tsx";
import Interview from "./pages/candidate/interview/Interview.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Employer from "./pages/employer/Employer.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Toaster } from "sonner";
import CandidateDashboard from "./pages/candidate/dashboard/CandidateDashboard.tsx";
import UserRegister from "./pages/auth/userRegister/UserRegister.tsx";
import UserLogin from "./pages/auth/userLogin/UserLogin.tsx";
import Additional from "./pages/auth/additional/Additional.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Account from "./pages/candidate/account/Account.tsx";
import ForgotPassword from "./pages/auth/forgot-password/ForgotPassword.tsx";
import ResetPassword from "./pages/auth/resetPassword/ResetPassword.tsx";
import Settings from "./pages/candidate/settings/Settings.tsx";

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
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
            <Route index element={<Landing />} />
            <Route
              path="/candidate"
              element={
                <ProtectedRoute>
                  <Candidate />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<CandidateDashboard />}></Route>
              <Route path="interview" element={<Interview />}></Route>
              <Route path="settings" element={<Settings />}></Route>
              <Route path="account" element={<Account />}></Route>
            </Route>

            <Route path="/employer" element={<Employer />}></Route>
          </Route>
          <Route
            path="/auth/user"
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
            <Route path="login" element={<UserLogin />} />
            <Route path="register" element={<UserRegister />} />
            <Route path="additional" element={<Additional />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password/" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);
