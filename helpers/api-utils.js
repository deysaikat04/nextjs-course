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
