import CandidateForm from "@/pages/auth/components/form";

const Additional = () => {
  return (
    <div className="p-8 lg:px-16 flex flex-col w-full gap-2">
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-bold">Account Settings</h3>
          <p className="text-ring">
            Manage your profile information and preferences.
          </p>
        </div>

        <div className="w-[250px] md:w-[300px] lg:w-[400px]">
          <CandidateForm />
        </div>
      </div>
    </div>
  );
};

export default Additional;
