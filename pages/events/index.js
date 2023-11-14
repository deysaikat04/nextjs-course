import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/helpers/api-utils";
import { useRouter } from "next/router";
import { Fragment } from "react";

const AllEventsPage = ({events}) => {
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

export async function getStaticProps() {
  const { error, data } = await getAllEvents() ;
  if (error) {
    return {
      props: {
        error: true,
        events: [],
        message: "Some error occurred",
      },
    };
  }
  return {
    props: {
      error: false,
      events: data,
      message: "",
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
