const si = require("systeminformation");

// si.processes().then((data) =>
//   console.log(data.list.find((element) => element.name === "zoom.us").state)
// );

const valueObject = {
  processes: "list",
};

const zoomLogger = (data) => {
  // console.log(data.processes.list)
  const zoomRunning = data.processes.list.find(
    (runningProcces) => runningProcces.name === "zoom.us"
  );
  console.log(zoomRunning ? "active" : "inactive");
};
// si.get(valueObject, zoomLogger)
si.observe(valueObject, 1000, zoomLogger);