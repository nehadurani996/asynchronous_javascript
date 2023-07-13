const dataLayer = [];

function pushEvent(eventData) {
  // Push the event data to the data layer
  dataLayer.push(eventData);

  console.log("Pushing event:", eventData);
}

function handleConcurrentEvents(eventDataArray) {
  // Create an array of promises for each event
  const promises = eventDataArray.map((eventData) => {
    return new Promise((resolve) => {
      pushEvent(eventData);
      resolve();
    });
  });

  // Execute all promises concurrently
  Promise.all(promises)
    .then(() => {
      console.log("All events pushed successfully.");
    })
    .catch((error) => {
      console.error("Error pushing events:", error);
    });
}

// Example usage
const events = [
  { property1: "value1", property2: "value2" },
  { property3: "value3", property4: "value4" },
  // Add more event data objects here...
];

handleConcurrentEvents(events);
