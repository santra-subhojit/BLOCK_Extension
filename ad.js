document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggleAdBlocker");
  const adsBlockedElement = document.getElementById("adsBlocked");
  const trackersBlockedElement = document.getElementById("trackersBlocked");

  function updateCounters(blockedAds, blockedTrackers) {
    adsBlockedElement.textContent = blockedAds;
    trackersBlockedElement.textContent = blockedTrackers;
  }

  function toggleAdBlocker(enabled) {
    chrome.runtime.sendMessage(
      { action: "toggleAdBlocker", enabled },
      function (response) {
        if (response.success) {
          console.log("Ad blocker " + (enabled ? "enabled" : "disabled"));
        }
      }
    );
  }

  function initialize() {
    // Fetch initial stats and toggle state
    chrome.runtime.sendMessage({ action: "getStats" }, function (response) {
      updateCounters(response.blockedAds, response.blockedTrackers);
      toggleSwitch.checked = response.adBlockerEnabled;
    });

    // Event listener for toggle switch change
    toggleSwitch.addEventListener("change", function () {
      const enabled = this.checked;
      toggleAdBlocker(enabled);
    });

    // Listener for background messages to update counters
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === "updateCounters") {
        updateCounters(request.blockedAds, request.blockedTrackers);
      }
    });
  }

  // Call initialize function to start the process
  initialize();
});
