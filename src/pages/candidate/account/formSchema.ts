import z from "zod";

export const schema = z.object({
  fullName: z.preprocess(
    (val) => (val === "" ? undefined : val), 
    z
      .string()
      .min(2, "Full name must contain at least 2 characters")
      .optional()),
  phoneNumber: z.preprocess(val => (val === "" ? undefined : val),z.e164("Incorrect phone number").optional()),
  jobTitle: z.preprocess(val => (val === "" ? undefined : val),z.string().min(1).optional()),
  cv: z
    .any()
    .optional()
    .refine(
      (files) => !files || files.length === 0 || files.length === 1,
      "Please upload a single file"
    )
    .refine(
      (files) =>
        !files || files.length === 0 || files[0].type === "application/pdf",
      "Only PDF files are allowed"
    )
    // Safely transform the value, returning undefined if no file is present
    .transform((files) => (files && files.length > 0 ? files[0] : undefined)),
});

export type FormValues = z.infer<typeof schema>;
