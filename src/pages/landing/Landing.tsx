import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";

const Landing = () => {
  return (
    <div className="py-12 flex justify-center items-center">
      <div className="flex flex-col gap-2 w-[400px]">
        <h1 className="mt-4 font-bold text-4xl lg:text-6xl tracking-wider">
          MATCH IT
        </h1>
        <h3 className="text-2xl font-semibold text-secondary-foreground">
          Find the right people faster and smarter with out AI-powered platform.
        </h3>
        <p className="mb-12 text-sm">
          powered by <span className="font-bold ">Eburon</span>
        </p>
        <Button>
          <Link to="/candidate">I am looking for a job</Link>
        </Button>
        <Button>
          <Link to="/employer">I am employer</Link>
        </Button>
      </div>
    </div>
  );
};

export default Landing;
