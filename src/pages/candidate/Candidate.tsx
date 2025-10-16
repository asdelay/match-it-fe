import { Link } from "react-router";
import CandidateForm from "./components/form";
import { Button } from "@/components/ui/button";

const Candidate = () => {
  return (
    <div className="mt-12 flex justify-center align-center">
      <div className="flex flex-col justify-center gap-2">
        <h1>Candidate</h1>
        <CandidateForm />
        <Button>
          <Link to="https://ai-powered-hr-interview-platform-73350400049.us-west1.run.app/">
            Start the interview
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Candidate;
