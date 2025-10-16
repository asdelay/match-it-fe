import React from "react";
import Label from "../../../components/Label";
import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createUser } from "../api";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  fullName: z.string().min(1),
  email: z.email(),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["candidates"] });
      toast.success("You have successfully saved your data");
    },
    onError: (error) => {
      toast.error(`An error has occured ${error}`);
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
    console.log({ ...data });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col my-4 mb-8">
      <Label htmlFor="fullName">Full Name</Label>
      <Input
        id="fullName"
        {...register("fullName")}
        type="text"
        placeholder="Enter your full name here"
      />
      {errors.fullName && (
        <p className="mb-4 text-destructive">{errors.fullName.message}</p>
      )}
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        {...register("email")}
        type="email"
        placeholder="Enter your email here"
      />
      {errors.email && (
        <p className="mb-4 text-destructive">{errors.email.message}</p>
      )}
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
        variant="outline"
        type="submit"
        className="mt-1"
      >
        {mutation.isPending ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};

export default CandidateForm;
