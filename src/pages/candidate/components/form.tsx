import Label from "../../../components/Label";
import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateUser } from "../api";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";

const schema = z.object({
  phoneNumber: z.e164(),
  jobTitle: z.string().min(1),
  cv: z
    .any()
    .refine(
      (files) => files?.length === 1 && files[0] instanceof File,
      "Please upload a file"
    )
    .transform((files) => files[0])
    .refine(
      (file) => file.type === "application/pdf",
      "Only PDF files are allowed"
    ),
});

type FormValues = z.infer<typeof schema>;

const CandidateForm = () => {
  const { data: userData } = useQueryClient().getQueryData(["tempUser"]);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["candidates"] });
      toast.success("You have successfully saved your data");
      navigate("/candidate/dashboard");
    },
    onError: (error) => {
      toast.error(`An error has occured ${error}`);
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate({ data, id: userData.user.id });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col my-4 mb-8">
      <Label htmlFor="phoneNumber">Phone Number</Label>
      <Input
        id="phoneNumber"
        {...register("phoneNumber")}
        type="text"
        placeholder="Enter your phone number here"
      />
      {errors.phoneNumber && (
        <p className="mb-4 text-destructive">{errors.phoneNumber.message}</p>
      )}
      <Label htmlFor="jobTitle">Desired job title</Label>
      <Input
        id="jobTitle"
        {...register("jobTitle")}
        type="text"
        placeholder="Enter your desired role here"
      />
      {errors.jobTitle && (
        <p className="mb-4 text-destructive">{errors.jobTitle.message}</p>
      )}
      <Label htmlFor="cv">CV</Label>
      <Input
        id="cv"
        {...register("cv")}
        type="file"
        placeholder="Upload your CV here"
      />
      {errors.cv && (
        <p className="mb-4 text-destructive">{errors.cv.message as string}</p>
      )}
      <Button
        disabled={mutation.isPending}
        type="submit"
        className="mt-2 cursor-pointer"
      >
        {mutation.isPending ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          "Submit"
        )}
      </Button>
      <Link to="/candidate/dashboard" className="block !w-full mt-2">
        <Button type="submit" variant="outline" className="cursor-pointer">
          Skip
        </Button>
      </Link>
    </form>
  );
};

export default CandidateForm;
