import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";
import React, { useEffect, useState, type FC } from "react";
import { useNavigate } from "react-router";

interface ProtecredRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: FC<ProtecredRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const { user, setAuth, clearAuth } = useAuthStore();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    async function verify() {
      try {
        if (!user) {
          const res = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/auth/refresh`,
            {},
            { withCredentials: true }
          );
          console.log(res);
          setAuth(res.data.accessToken, res.data.user);
        }
      } catch {
        clearAuth();
        navigate("/auth/user/login");
      } finally {
        setIsChecking(false);
      }
    }
    verify();
  }, []);

  if (isChecking) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Authentication...
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
