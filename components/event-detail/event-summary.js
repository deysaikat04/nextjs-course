import classes from "./event-summary.module.css";

function EventSummary(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <p>{title}</p>
    </section>
  );
}

export default EventSummary;
