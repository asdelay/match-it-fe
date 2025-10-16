import React from "react";
import CandidatesTable from "./components/candidateTable";

const Employer = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="font-bold">Employer</h1>
      <div className="mt-12">
        <h3 className="font-semibold">Check Available Candidates</h3>
        <CandidatesTable />
      </div>
    </div>
  );
};

export default Employer;
