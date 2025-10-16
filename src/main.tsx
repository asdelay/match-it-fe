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

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Toaster />
                <Outlet />
              </div>
            }
          >
            <Route index element={<Landing />} />
            <Route path="/candidate" element={<Candidate />}></Route>
            <Route path="/candidate/interview" element={<Interview />}></Route>
            <Route path="/employer" element={<Employer />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);
