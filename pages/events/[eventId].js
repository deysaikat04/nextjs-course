import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

const EventDetailsPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const anEvent = getEventById(eventId);

  if (!anEvent) {
    return <h2>No event found!</h2>;
  }
  return (
    <Fragment>
      <EventSummary />
      <EventLogistics
        date={anEvent.date}
        address={anEvent.location}
        image={anEvent.image}
        imageAlt={anEvent.title}
      />
      <EventContent>
        <p>{anEvent.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailsPage;
