import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(120),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  telephone: z.string().trim().min(7, "Enter a telephone number.").max(40),
  service: z.string().min(1, "Choose a service."),
  projectLocation: z.string().trim().min(2, "Enter the project location.").max(160),
  subject: z.string().trim().min(3, "Enter a subject.").max(160),
  message: z.string().trim().min(20, "Please include at least 20 characters.").max(5000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
