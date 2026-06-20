window.LUSHAN_CONFIG = Object.freeze({ apiBase: "http://localhost:8000" });
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#apiBase");
  const saved = localStorage.getItem("lushanApiBase");
  if (input && !saved) input.value = window.LUSHAN_CONFIG.apiBase;
});
