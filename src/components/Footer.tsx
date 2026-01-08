import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold font-headline text-primary">Ksons International Ltd.</p>
            <p className="text-sm text-muted-foreground">Your Trusted Partner in Garage Door Services</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ksons International Ltd. All Rights Reserved.</p>
          <p className="mt-1">Proudly Serving Canada</p>
        </div>
      </div>
    </footer>
  );
}
