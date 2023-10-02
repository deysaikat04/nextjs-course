import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventHandler = (year, month) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList events={events} />
    </Fragment>
  );
};

export default AllEventsPage;
