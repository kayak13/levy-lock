import { z } from "zod";

export const intakeFormSchema = z.object({
  name: z.string().min(1, "Full name is required").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  judgmentAmount: z.number().min(1, "Judgment amount must be greater than 0"),
  courtCountyState: z.string().min(1, "Court, county, and state are required").max(200, "Input is too long"),
  caseNumber: z.string().min(1, "Case number is required").max(100, "Case number is too long"),
  judgmentYear: z.number().min(1900, "Please enter a valid year").max(2100, "Please enter a valid year"),
  debtorName: z.string().max(100, "Name is too long").optional(),
  notes: z.string().max(1000, "Notes are too long").optional(),
});

export type IntakeFormData = z.infer<typeof intakeFormSchema>;

// File validation
export const validateFile = (file: File): { isValid: boolean; error?: string } => {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];

  if (file.size > maxSize) {
    return {
      isValid: false,
      error: `File "${file.name}" is too large. Maximum size is 10MB.`,
    };
  }

  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: `File "${file.name}" is not supported. Please use PDF, JPG, JPEG, or PNG files.`,
    };
  }

  return { isValid: true };
};
