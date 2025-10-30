import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Label from "@/components/Label";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { registerUser } from "@/pages/auth/api/index";
import { useAuthStore } from "@/store/useAuthStore";
import type { AxiosError } from "axios";

const schema = z.object({
  fullName: z.string().min(2),
  email: z.email().min(2),
  password: z.string().min(4),
});

type FormValues = z.infer<typeof schema>;

const UserLogin = () => {
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success("You have successfully registered");
      setAuth(data.data.accessToken, data.data.user);
      localStorage.setItem("userId", data.data.user.id);
      navigate("/auth/user/additional");
    },
    onError: (e: AxiosError<{ message: string }>) => {
      toast.error(`Error! ${e?.response?.data.message || e.message}`);
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return (
    <main className="min-h-screen flex flex-col gap-8 p-12 items-center">
      <h3 className="text-2xl font-semibold">Register</h3>
      <div className="flex flex-col p-8 border-1 rounded-2xl md:min-w-[300px]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            {...register("fullName")}
            type="string"
            placeholder="Enter your Full Name here"
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

        <p className="mt-2 text-sm">
          Already have an acocunt
          <Link to="/auth/user/login" className="ml-2 text-chart-2">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
};

export default UserLogin;
