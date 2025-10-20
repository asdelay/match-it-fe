import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";

const Landing = () => {
  return (
    <div className="py-12 flex justify-center items-center">
      <div className="flex flex-col items-center gap-2 w-[400px] px-12 lg:w-[900px]">
        <div className="flex flex-col gap-2">
          <h1 className="mt-4 font-bold !text-8xl lg:text-6xl font-sans tracking-wider">
            MATCH IT
          </h1>
          <p className="mb-8 text-sm">
            powered by <span className="font-bold ">Eburon</span>
          </p>
        </div>

        <h3 className="!text-6xl font-semibold text-secondary-foreground mb-12">
          Unlock Your Potential with <br />{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI-Powered Matching
          </span>
        </h3>
        <p className="text-2xl text-center text-ring">
          Match-It revolutionizes hiring for job seekers and companies with
          intelligent AI matching, personalized recommendations, and
          cutting-edge AI interviews.
        </p>
        <div className="mt-10 flex gap-8 justify-between items-center">
          <Link to="/auth/user/login">
            <Button className="cursor-pointer">
              <p className="font-semibold">Find Your Dream Job</p>
            </Button>
          </Link>
          <Link to="/employer">
            <Button className="cursor-pointer font-semibold">
              Hire Top Talent
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
