import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById, getFeaturedEvents } from "@/helpers/api-utils";
import { useRouter } from "next/router";
import { Fragment } from "react";

const EventDetailsPage = (props) => {
  const { event } = props;

  if (!event) {
    return <h2>No event found!</h2>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const eventData = await getEventById(eventId);

  return {
    props: {
      event: eventData,
    },
    revalidate: 30,
  };
}

export default EventDetailsPage;
