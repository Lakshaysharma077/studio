import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Phone, ShieldCheck, Star, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GarageDoorIcon } from '@/components/icons';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-garage');

const services = [
  {
    icon: <GarageDoorIcon className="h-10 w-10 text-primary" />,
    title: 'Garage Door Installation',
    description: 'Expert installation of all types of garage doors for residential and commercial properties.',
    link: '/services#installation',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Repair & Maintenance',
    description: 'Fast and reliable repairs for springs, openers, cables, and more to keep your door running smoothly.',
    link: '/services#repair',
  },
  {
    icon: <Phone className="h-10 w-10 text-primary" />,
    title: 'Emergency Service',
    description: '24/7 emergency services for urgent garage door issues. We are here when you need us most.',
    link: '/services#emergency',
  },
];

const whyChooseUs = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Reliable & Trusted',
    description: 'Our experienced technicians are licensed, insured, and committed to your safety.',
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Quality Workmanship',
    description: 'We use only the highest quality parts and provide exceptional service on every job.',
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'Proudly Canadian',
    description: 'A locally owned and operated business serving communities across Canada.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-shadow">
              Your Trusted Garage Door Experts
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-shadow">
              Professional Installation, Repair, and Maintenance Services Across Canada
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 transition-transform transform hover:scale-105">
                <Link href="/booking">Book Now</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-bold text-lg px-8 py-6 transition-transform transform hover:scale-105">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We offer a complete range of garage door services to meet your needs.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-secondary rounded-full p-4 w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                    <Button asChild variant="link" className="mt-4 text-primary font-bold">
                       <Link href={service.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Ksons International Ltd?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Your satisfaction is our top priority. We stand behind our work with a commitment to quality and reliability.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {whyChooseUs.map((reason) => (
                <div key={reason.title} className="p-6">
                  <div className="flex justify-center items-center mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold font-headline">{reason.title}</h3>
                  <p className="mt-2 text-muted-foreground">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready for a Garage Door Upgrade?</h2>
             <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Let us help you find the perfect solution for your home or business.
              </p>
              <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 transition-transform transform hover:scale-105">
                <Link href="/booking">Book a Free Consultation</Link>
              </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
