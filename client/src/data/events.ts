export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  image?: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Community Dialogue: Building Bridges",
    description: "Join us for an open discussion about fostering inclusive communities and addressing social justice issues in our neighborhoods.",
    date: "2024-02-15",
    time: "7:00 PM - 9:00 PM",
    location: "Vancouver Community Centre",
    attendees: 45,
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "Educational Workshop: Understanding Equality",
    description: "An informative session exploring the historical context and contemporary relevance of equality and social justice movements.",
    date: "2024-02-28",
    time: "2:00 PM - 5:00 PM",
    location: "SFU Surrey Campus",
    attendees: 80,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "Annual Awards Ceremony",
    description: "Celebrating individuals and organizations that have made significant contributions to promoting equality and social justice in our community.",
    date: "2024-03-15",
    time: "6:00 PM - 10:00 PM",
    location: "Hotel Vancouver",
    attendees: 150,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];