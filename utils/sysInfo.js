const si = require("systeminformation");

// si.processes().then((data) =>
//   console.log(data.list.find((element) => element.name === "zoom.us").state)
// );

const valueObject = {
  processes: "list",
};

const zoomLog = (data) => {
  // console.log(data.processes.list)
  const zoomStatus = data.processes.list.find(
    (runningProcces) => runningProcces.name === "zoom.us"
  );

  console.log(zoomStatus.state);
};

module.exports = {
  zoomObserver: () => si.observe(valueObject, 1000, zoomLog),

  stopObserver: () => clearTimeout(si.observe(valueObject, 1000, zoomLog)),
};
