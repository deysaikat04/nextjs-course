import EventItem from "./event-item";
import classes from './event-list.module.css';

function EventList({ events }) {
  return (
    <ul className={classes.list}>
      {
        events && events.map(singleEvent => {
          const { id,
            title,
            description,
            location,
            date,
            image,
            isFeatured } = singleEvent;
          return <EventItem
            key={id}
            id={id}
            title={title}
            description={description}
            location={location}
            date={date}
            image={image}
            isFeatured={isFeatured} />
        })
      }
    </ul>
  );
}

export default EventList;
