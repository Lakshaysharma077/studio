import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from "./contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We're here to help. Reach out to us with any questions or to get a free quote.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form and we'll get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          <div className="space-y-8">
            <h2 className="text-2xl font-bold font-headline text-primary">Our Information</h2>
            <div className="flex items-start gap-4">
              <div className="bg-secondary p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <a href="tel:+1-800-555-1234" className="text-muted-foreground hover:text-primary transition-colors">(800) 555-1234</a>
                <p className="text-sm text-muted-foreground">Mon - Fri, 8am - 6pm</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-secondary p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <a href="mailto:contact@ksonsinternational.com" className="text-muted-foreground hover:text-primary transition-colors">contact@ksonsinternational.com</a>
                 <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-secondary p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-muted-foreground">Serving local communities across Canada.</p>
                <p className="text-sm text-muted-foreground">Head Office, Toronto, ON</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
