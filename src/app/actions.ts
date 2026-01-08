"use server";

import { z } from "zod";
import { services } from "@/lib/types";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  service: z.enum(services, {
    errorMap: () => ({ message: "Please select a valid service." }),
  }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }
  
  // Simulate saving to database and sending email
  console.log("New contact message received:", validatedFields.data);

  return {
    message: "Thank you for your message! We will get back to you shortly.",
    success: true,
  };
}

export async function submitBookingForm(prevState: any, formData: FormData) {
  const validatedFields = bookingSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    service: formData.get("service"),
  });
  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }

  // Simulate creating a Stripe Checkout session and saving booking to database
  console.log("New booking created:", validatedFields.data);
  // In a real application, you would create a Stripe Checkout session here
  // and return the URL to redirect the user.
  // e.g., redirect(`/checkout?session_id=${sessionId}`);

  return {
    message: "Booking submitted successfully! You would now be redirected to Stripe for payment.",
    success: true,
  };
}
