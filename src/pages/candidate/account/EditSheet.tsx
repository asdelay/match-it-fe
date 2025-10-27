import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Label from "@/components/Label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { FC } from "react";
import type { FullUser } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type FormValues } from "./formSchema";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../api";
import { toast } from "sonner";

interface EditSheetProps {
  userData: FullUser;
}

const EditSheet: FC<EditSheetProps> = ({ userData }) => {
  const userId = useAuthStore((state) => state.user?.id);

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
      queryClient.invalidateQueries({ queryKey: ["user", userId] });
      toast.success("You have successfully updated your data");
    },
    onError: (error) => {
      toast.error(`An error has occured ${error}`);
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate({ data, id: userId as number });
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mt-4 md:mt-0">Edit Profile</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                defaultValue={userData?.fullName}
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="mb-4 text-destructive">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                placeholder="Software Developer"
                defaultValue={userData?.jobTitle}
                {...register("jobTitle")}
              />
              {errors.jobTitle && (
                <p className="mb-4 text-destructive">
                  {errors.jobTitle.message}
                </p>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                placeholder="+32470123456"
                defaultValue={userData?.phoneNumber}
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <p className="mb-4 text-destructive">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="cv">CV</Label>
              <Input type="file" id="cv" {...register("cv")} />
              {errors.cv && (
                <p className="mb-4 text-destructive">
                  {errors.cv.message + ""}
                </p>
              )}
            </div>
          </div>
          <SheetFooter className="mt-8">
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default EditSheet;
