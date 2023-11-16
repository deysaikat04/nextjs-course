export async function getAllEvents() {
  const dataToReturn = {
    error: false,
    data: [],
    message: "",
  };
  try {
    const URL = process.env.NEXT_APP_FIREBASE_EVENTS_FETCH_URL;

    const response = await fetch(URL);
    const data = await response.json();

    const events = [];
    for (let anItem in data) {
      events.push({
        id: anItem,
        ...data[anItem],
      });
    }
    dataToReturn.data = events;
  } catch (error) {
    dataToReturn.error = true;
    dataToReturn.message = error.message;
  }

  return dataToReturn;
}

export async function getEventById(eventId) {
  const { error, data } = await getAllEvents();
  if (error) {
    return [];
  }

  return data.find((anEvent) => anEvent.id === eventId);
}

export async function getFeaturedEvents() {
  const { error, data } = await getAllEvents();
  if (error) {
    return [];
  }

  return data.filter((event) => event.isFeatured);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const { data: allEvents } = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
