function printClickEventLogs(logs) {
  logs
    .filter((log) => log.type === "click")
    .forEach((log) =>
      console.log(`${log.type}: ${new Date(log.date).toLocaleString()}`)
    );
}

printClickEventLogs([
  {
    type: "click",
    date: "2023-01-01T12:00:00Z",
  },
  {
    type: "hover",
    date: "2023-01-01T12:10:00Z",
  },
  {
    type: "scroll",
    date: "2023-01-01T12:15:00Z",
  },
  {
    type: "click",
    date: "2023-01-01T12:20:00Z",
  },
]);
