const si = require("systeminformation");
const nLog = require("console")

// si.processes().then((data) =>
//   console.log(data.list.find((element) => element.name === "zoom.us").state)
// );
console.log(`STARTED`)
const valueObject = {
  processes: "list",
};

const zoomLogger = (data) => {
  // console.log(Object.keys(data.processes.list))
  
  const zoomProcess = data.processes.list.filter(
    (runningProcces) => runningProcces.name === "zoom.us"
  )

  console.log(zoomProcess[0])

  const zoomRunning = data.processes.list.filter(
    (runningProcces) => runningProcces.parentPid === zoomProcess[0].pid
  );
  // nLog.Console(zoomRunning ? "active" : "inactive");
  console.log(`Zoom apps running: `, zoomRunning)
  console.log(zoomRunning ? "active" : "inactive")
};
// si.get(valueObject, zoomLogger)
si.observe(valueObject, 1000, zoomLogger);

module.exports = {
  zoomLogger
}