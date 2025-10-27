import Input from "@/components/Input";
import Label from "@/components/Label";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import z from "zod";
import { changePasswords } from "@/pages/auth/api";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import type { AxiosError } from "axios";

const schema = z
  .object({
    password: z.string().min(4, "Password must be at least 4 characters"),
    repeatPassword: z.string().min(4, "Please repeat your password"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"], // show error under the second field
  });

type FormValues = z.infer<typeof schema>;

const ResetPassword = () => {
  const params = new URLSearchParams(location.search);
  const tid = params.get("tid");
  const token = params.get("t");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: changePasswords,
    onSuccess: () => {
      toast.success("Password is succesfully reset");
      navigate("/");
    },
    onError: (e: AxiosError<{ message: string }>) => {
      toast.error(`Error! ${e?.response?.data.message || e.message}`);
    },
  });

  if (!tid || !token) {
    return <h1>Wrong URL</h1>;
  }

  const onSubmit = (data: { password: string; repeatPassword: string }) => {
    mutation.mutate({ newPassword: data.password, tid, token });
  };
  return (
    <div className="mt-12 p-8 lg:px-16 flex justify-center w-full gap-2">
      <div className="flex flex-col text-center">
        <div className="mb-8">
          <h3 className="text-2xl md:text-4xl font-bold">Forgot Password</h3>
          <p className="text-ring">
            Enter yout email and click submit to procees
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onReset={() => reset()}
          className="flex flex-col gap-2 text-left"
        >
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            {...register("password")}
            type="password"
            placeholder="Enter your password here"
          />
          {errors.password && (
            <p className="mb-4 text-destructive">{errors.password.message}</p>
          )}
          <Label htmlFor="password">Repeat Password</Label>
          <Input
            id="repeatPassword"
            {...register("repeatPassword")}
            type="password"
            placeholder="Enter your password one more time here"
          />
          {errors.repeatPassword && (
            <p className="mb-4 text-destructive">
              {errors.repeatPassword.message}
            </p>
          )}
          <Button disabled={mutation.isPending} type="submit">
            {mutation.isPending ? "Loading..." : "Submit"}
          </Button>
          <Button type="reset" variant="outline">
            Clear
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
