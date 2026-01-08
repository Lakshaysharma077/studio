import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { Booking } from "@/lib/types";

// Mock data as the database is not implemented
const mockBookings: Booking[] = [
  {
    id: "BOOK-001",
    name: "Alice Johnson",
    email: "alice@example.com",
    service: "Repair & Maintenance",
    paid: true,
    createdAt: new Date("2024-07-20T10:00:00Z"),
  },
  {
    id: "BOOK-002",
    name: "Bob Williams",
    email: "bob@example.com",
    service: "Garage Door Installation",
    paid: true,
    createdAt: new Date("2024-07-19T14:30:00Z"),
  },
  {
    id: "BOOK-003",
    name: "Charlie Brown",
    email: "charlie@example.com",
    service: "Emergency Service",
    paid: true,
    createdAt: new Date("2024-07-19T09:15:00Z"),
  },
  {
    id: "BOOK-004",
    name: "Diana Miller",
    email: "diana@example.com",
    service: "Repair & Maintenance",
    paid: true,
    createdAt: new Date("2024-07-18T16:00:00Z"),
  },
];


// In a real application, you would fetch this data from your API/database.
// This page should be protected by authentication.
async function getBookings(): Promise<Booking[]> {
  // Simulate API call
  return new Promise(resolve => setTimeout(() => resolve(mockBookings), 500));
}

export default async function AdminPage() {
  const bookings = await getBookings();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline">Admin Dashboard</h1>
        <p className="text-muted-foreground">View all customer bookings.</p>
      </div>

      <div className="rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Service</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Booking Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>
                    <div className="font-medium">{booking.name}</div>
                    <div className="text-sm text-muted-foreground">{booking.email}</div>
                  </TableCell>
                  <TableCell>{booking.service}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={booking.paid ? "default" : "destructive"} className={booking.paid ? "bg-green-600" : ""}>
                      {booking.paid ? "Paid" : "Unpaid"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {booking.createdAt.toLocaleDateString('en-CA', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  No bookings found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
