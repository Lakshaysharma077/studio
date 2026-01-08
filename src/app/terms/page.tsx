import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-headline text-center">Terms & Conditions</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p><strong>Last Updated: {new Date().toLocaleDateString('en-CA')}</strong></p>
            
            <p>Please read these Terms and Conditions ("Terms") carefully before using the Ksons International Ltd. website and services.</p>

            <h2 className="text-foreground font-headline">1. Service Terms</h2>
            <p>By booking a service with us, you agree to the terms of the service as described on our website. We will perform our services in a professional and timely manner. Any specified completion times are estimates and not guaranteed.</p>

            <h2 className="text-foreground font-headline">2. Payments and Bookings</h2>
            <p>All bookings require payment at the time of service scheduling unless otherwise agreed upon. We use a third-party payment processor (Stripe) to handle transactions. We do not store your credit card information.</p>

            <h2 className="text-foreground font-headline">3. Cancellation and Refund Policy</h2>
            <p>Cancellations must be made at least 24 hours prior to the scheduled service time to be eligible for a full refund. Cancellations made within 24 hours may be subject to a cancellation fee. Refunds are processed based on the original method of payment.</p>

            <h2 className="text-foreground font-headline">4. Limitation of Liability</h2>
            <p>Ksons International Ltd. will not be liable for any indirect, incidental, special, or consequential damages that result from the use of, or the inability to use, our services.</p>
            
            <h2 className="text-foreground font-headline">5. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of Canada, without regard to its conflict of law provisions.</p>
            
            <h2 className="text-foreground font-headline">6. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us through our <a href="/contact" className="text-primary hover:underline">contact page</a>.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
