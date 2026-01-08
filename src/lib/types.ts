export type Service = 'Garage Door Installation' | 'Repair & Maintenance' | 'Emergency Service';

export const services: Service[] = ['Garage Door Installation', 'Repair & Maintenance', 'Emergency Service'];

export type Booking = {
  id: string;
  name: string;
  email: string;
  service: Service;
  paid: boolean;
  createdAt: Date;
};

export type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
};
