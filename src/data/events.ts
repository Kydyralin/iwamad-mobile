export type CampusEvent = {
  id: number;
  title: string;
  date: string;
  place: string;
  seats: number;
  description: string;
};

export const events: CampusEvent[] = [
  {
    id: 1,
    title: "Campus Tour",
    date: "2024-05-01",
    place: "Main Campus",
    seats: 30,
    description:
      "Join us for a guided tour of our beautiful campus. Learn about our history, facilities, and student life.",
  },
  {
    id: 2,
    title: "Guest Lecture: The Future of AI",
    date: "2024-05-10",
    place: "Auditorium A",
    seats: 50,
    description:
      "Renowned AI expert Dr. Jane Smith will discuss the latest trends and future directions in artificial intelligence.",
  },
  {
    id: 3,
    title: "Spring Music Festival",
    date: "2024-05-15",
    place: "Outdoor Stage",
    seats: 100,
    description:
      "Enjoy live performances from local bands and artists at our annual Spring Music Festival. Food and drinks will be available.",
  },
];