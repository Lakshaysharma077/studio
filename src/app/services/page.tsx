import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const serviceData = [
  {
    id: 'installation',
    title: 'Garage Door Installation',
    description: 'We specialize in the professional installation of a wide variety of garage doors. Whether you\'re building a new home, upgrading your current door, or looking for a commercial solution, our team ensures a perfect fit and flawless operation. We work with top brands and materials to provide you with a durable, secure, and aesthetically pleasing garage door that enhances your property\'s curb appeal.',
    imageId: 'service-installation',
  },
  {
    id: 'repair',
    title: 'Repair & Maintenance',
    description: 'A malfunctioning garage door can be a major inconvenience and a security risk. Our expert technicians are equipped to handle all types of repairs, from broken springs and cables to opener malfunctions and off-track doors. We also offer preventative maintenance plans to keep your garage door in optimal condition, extending its lifespan and preventing costly future repairs.',
    imageId: 'service-repair',
  },
  {
    id: 'emergency',
    title: '24/7 Emergency Service',
    description: 'Garage door emergencies can happen at any time. That\'s why we offer 24/7 emergency services to address your urgent needs. If your door is stuck, has been damaged, or poses a security threat, our rapid response team is just a call away. We\'ll arrive promptly to secure your property and provide an effective solution, day or night.',
    imageId: 'service-emergency',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Garage Door Services</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Comprehensive solutions for all your garage door needs, delivered with professionalism and care.
        </p>
      </div>

      <div className="space-y-16">
        {serviceData.map((service, index) => {
          const image = PlaceHolderImages.find(img => img.id === service.imageId);
          return (
            <section id={service.id} key={service.id} className="scroll-mt-20">
              <Card className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                <div className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8`}>
                  <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                    <h2 className="text-3xl font-bold font-headline text-primary">{service.title}</h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
                    <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold transition-transform transform hover:scale-105">
                      <Link href={`/booking?service=${encodeURIComponent(service.title)}`}>Book This Service</Link>
                    </Button>
                  </div>
                  <div className="relative h-64 md:h-full min-h-[300px]">
                    {image && (
                       <Image
                        src={image.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                       />
                    )}
                  </div>
                </div>
              </Card>
            </section>
          );
        })}
      </div>
    </div>
  );
}
