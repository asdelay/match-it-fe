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
import { useForm, type Resolver, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type FormValues } from "./formSchema";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../api";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import type { AxiosError } from "axios";
import { useTranslation } from "react-i18next";

interface EditSheetProps {
  userData: FullUser;
}

const EditSheet: FC<EditSheetProps> = ({ userData }) => {
  const userId = useAuthStore((state) => state.user?.id);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema) as Resolver<
      {
        cv: unknown;
        fullName?: string | undefined;
        phoneNumber?: string | undefined;
        jobTitle?: string | undefined;
      },
      unknown,
      {
        cv: unknown;
        fullName?: string | undefined;
        phoneNumber?: string | undefined;
        jobTitle?: string | undefined;
      }
    >,
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", userId] });
      toast.success(t("toast.updatedDataSuccess"));
    },
    onError: (e: AxiosError<{ message: string }>) => {
      toast.error(`Error! ${e?.response?.data.message || e.message}`);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutation.mutate({ data, id: userId as number });
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mt-4 md:mt-0">{t("account.edit")}</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>{t("account.edit")}</SheetTitle>
          <SheetDescription>{t("account.editDesc")}</SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <Label htmlFor="fullName">{t("account.fullName")}</Label>
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
              <Label htmlFor="jobTitle">{t("account.jobTitle")}</Label>
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
              <Label htmlFor="phoneNumber">{t("account.phoneNumber")}</Label>
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
              <Label htmlFor="cv">{t("account.cv")}</Label>
              <Input type="file" id="cv" {...register("cv")} />
              {errors.cv && (
                <p className="mb-4 text-destructive">
                  {errors.cv.message + ""}
                </p>
              )}
            </div>
          </div>
          <SheetFooter className="mt-8">
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                t("account.save")
              )}
            </Button>
            <SheetClose asChild>
              <Button variant="outline">{t("account.close")}</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default EditSheet;
