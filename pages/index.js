import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

const featuredList = getFeaturedEvents();

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <EventList events={featuredList} />
    </>
  );
}
