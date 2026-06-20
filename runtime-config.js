window.LUSHAN_CONFIG = Object.freeze({
  apiBase: "http://localhost:8000",
  amapKey: "46eae30183860ed3e629380d231d1bb4",
  amapSecurityCode: "ac7d238b2a09838e7645c631a7cc49dd"
});
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#apiBase");
  if (input) {
    if (window.location.pathname.includes("/console/") || (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1" && window.location.hostname !== "")) {
      input.value = window.location.origin;
      localStorage.setItem("lushanApiBase", window.location.origin);
    } else {
      const saved = localStorage.getItem("lushanApiBase");
      input.value = saved || window.LUSHAN_CONFIG.apiBase;
    }
  }
});
