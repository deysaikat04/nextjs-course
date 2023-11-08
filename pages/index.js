import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/helpers/api-utils";

export default function Home(props) {
  const { featuredList, error, message } = props;

  if (error) {
    return <>{message}</>;
  }
  if (!featuredList) {
    return <>Loading...</>;
  }
  return (
    <>
      <EventList events={props.featuredList} />
    </>
  );
}

export async function getStaticProps() {
  const { error, data } = await getAllEvents();
  if (error) {
    return {
      props: {
        error: true,
        featuredList: [],
        message: "Some error occurred",
      },
    };
  }
  return {
    props: {
      error: false,
      featuredList: data,
      message: "",
    },
  };
}
