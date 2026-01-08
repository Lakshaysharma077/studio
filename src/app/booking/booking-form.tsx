"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { submitBookingForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services, Service } from "@/lib/types";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 transition-transform transform hover:scale-105">
      {pending ? "Submitting..." : "Pay & Book"}
    </Button>
  );
}

export function BookingForm() {
  const initialState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useFormState(submitBookingForm, initialState);
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service') as Service | null;

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      // Here you would typically redirect to Stripe
    } else if (state.message) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <form action={dispatch} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="John Doe" required />
        {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service</Label>
        <Select name="service" defaultValue={preselectedService || undefined}>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>{service}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {state.errors?.service && <p className="text-sm text-destructive">{state.errors.service[0]}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
