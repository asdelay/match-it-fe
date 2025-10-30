import Input from "@/components/Input";
import Label from "@/components/Label";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import z from "zod";
import { passwordResetVerify } from "@/pages/auth/api";
import { useNavigate } from "react-router";
import { LoaderCircle } from "lucide-react";

const schema = z.object({
  email: z.email().min(2),
});

type FormValues = z.infer<typeof schema>;

const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: passwordResetVerify,
  });
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
          onSubmit={handleSubmit(({ email }) => mutation.mutate(email))}
          className="flex flex-col gap-2 text-left"
        >
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
          <Button disabled={mutation.isPending} type="submit">
            {mutation.isPending ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
          <Button variant="outline" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
