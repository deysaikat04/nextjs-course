import classes from "./event-item.module.css";
import Link from "next/link";

function EventItem({
	id,
	title,
	description,
	location,
	date,
	image,
	isFeatured,
}) {
	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	const formattedAddress = location.replace(", ", "\n");
	const exploreLink = `/events/${id}`;

	return (
		<li className={classes.item}>
			<img src={"/" + image} alt={title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						{/* <DateIcon /> */}
						<time>{humanReadableDate}</time>
					</div>
					<div className={classes.address}>
						{/* <AddressIcon /> */}
						<address>{formattedAddress}</address>
					</div>
				</div>

				<div className={classes.actions}>
					{/* <Button link={exploreLink}>
					<span>Explore Event</span>
					<span className={classes.icon}>
						<ArrowRightIcon />
					</span>
					</Button> */}
					<Link href={exploreLink}>Explore event</Link>
				</div>
			</div>
		</li>
	);
}

export default EventItem;
