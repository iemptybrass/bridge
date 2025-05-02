( function () {
  window.addEventListener("load", () => {
    if (!window.drawerController) {
      console.error("drawerController not found.");
      return; }
    const statusDiv = document.getElementById("drawer-status");
    const updateInterval = 100;
    function updateStatus() {
      const target = window.drawerController.targetPosition.toFixed(1);
      const actual = window.drawerController.position.toFixed(1);
      statusDiv.innerHTML = `Target: ${target}%<br>Actual: ${actual}%`; }
    setInterval(updateStatus, updateInterval);  } ); } ) ();
