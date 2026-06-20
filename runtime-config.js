window.LUSHAN_CONFIG = Object.freeze({
  apiBase: "http://localhost:8000",
  amapKey: "46eae30183860ed3629380d231d1bb4",
  amapSecurityCode: "ac7d238b2a0838e7645c631a7cc49dd"
});
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#apiBase");
  const saved = localStorage.getItem("lushanApiBase");
  if (input && !saved) input.value = window.LUSHAN_CONFIG.apiBase;
});
