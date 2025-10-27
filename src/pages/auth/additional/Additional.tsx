import CandidateForm from "@/pages/auth/components/form";

const Additional = () => {
  return (
    <div className="flex flex-col items-center p-2 lg:p-4 py-8">
      <h3 className="text-2xl font-semibold mb-8">
        Enter additional information
      </h3>
      <div className="w-[200px] lg:w-[300px]">
        <CandidateForm />
      </div>
    </div>
  );
};

export default Additional;
