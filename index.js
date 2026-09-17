(function () {
  const params = new URLSearchParams(window.location.search);
  const mode = (params.get("mode") || "maintenance").toLowerCase();
  const site = params.get("site") || "this service";

  const status = document.getElementById("status");
  const headline = document.getElementById("headline");
  const message1 = document.getElementById("message1");
  const message2 = document.getElementById("message2");
  const detail = document.getElementById("detail");

  if (mode === "blocked") {
    document.title = "Request Rejected";
    status.textContent = "Request Rejected";
    headline.textContent = "Your request was blocked by security policy.";
    message1.textContent =
      "This request did not meet access requirements for " + site + ".";
    message2.textContent =
      "If you believe this is an error, contact akrherz@iastate.edu with the request details.";
    detail.textContent =
      "Legitimate users can retry using normal browser access and valid request patterns.";
    return;
  }

  document.title = "Service Temporarily Unavailable";
  status.textContent = "Temporary Notice";
  headline.textContent = site + " is currently unavailable.";
  message1.textContent =
    "The site is temporarily down for maintenance or an unexpected outage.";
  message2.textContent = "Please try again in a few minutes.";
  detail.textContent =
    "If you are an administrator, restore upstream service and remove the redirect/fallback rule when normal operations resume.";
})();
