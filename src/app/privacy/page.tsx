import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-headline text-center">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p><strong>Last Updated: {new Date().toLocaleDateString('en-CA')}</strong></p>
            
            <p>Ksons International Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

            <h2 className="text-foreground font-headline">1. Collection of Your Information</h2>
            <p>We may collect personal information from you, such as your name, email address, and phone number, when you voluntarily submit it to us through our contact or booking forms.</p>

            <h2 className="text-foreground font-headline">2. Use of Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer service.</li>
              <li>Process your bookings and payments.</li>
              <li>Send you confirmation and notification emails related to your bookings.</li>
              <li>Improve our website and services.</li>
            </ul>

            <h2 className="text-foreground font-headline">3. Disclosure of Your Information</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you (such as payment processors), so long as those parties agree to keep this information confidential.</p>

            <h2 className="text-foreground font-headline">4. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
            
            <h2 className="text-foreground font-headline">5. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us through our <a href="/contact" className="text-primary hover:underline">contact page</a>.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
