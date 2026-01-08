import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookingForm } from "./booking-form";

export default function BookingPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24 flex justify-center items-center min-h-[calc(100vh-8rem)]">
        <Card className="w-full max-w-lg shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline">Book a Service</CardTitle>
            <CardDescription>
              Fill out the form below to schedule your garage door service. We'll confirm your appointment shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BookingForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
