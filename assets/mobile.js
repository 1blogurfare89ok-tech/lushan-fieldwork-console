document.addEventListener("DOMContentLoaded", () => {
  // Set default active tab attribute on body
  document.body.setAttribute("data-active-tab", "map");

  const tabBtns = document.querySelectorAll(".tab-btn");
  const teamConsole = document.querySelector("#teamConsole");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      document.body.setAttribute("data-active-tab", tab);
      
      // Update active tab button style
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Handle team console visibility
      if (tab === "team") {
        if (teamConsole) {
          teamConsole.classList.add("open");
          teamConsole.setAttribute("aria-hidden", "false");
        }
      } else {
        if (teamConsole) {
          teamConsole.classList.remove("open");
          teamConsole.setAttribute("aria-hidden", "true");
        }
      }

      // Trigger map resize to update tile layouts
      setTimeout(() => {
        // flatMap
        if (window.flatMap) {
          window.flatMap.invalidateSize();
        }
        // terrainMap
        if (window.terrainMap) {
          window.terrainMap.invalidateSize();
        }
        // teamMap
        if (window.teamMap) {
          window.teamMap.invalidateSize();
        }
      }, 150);
    });
  });

  // Intercept Close Team button click to sync tab state back to map
  const closeTeamBtn = document.querySelector("#closeTeam");
  if (closeTeamBtn) {
    closeTeamBtn.addEventListener("click", () => {
      if (document.body.getAttribute("data-active-tab") === "team") {
        document.body.setAttribute("data-active-tab", "map");
        tabBtns.forEach(b => {
          if (b.getAttribute("data-tab") === "map") {
            b.classList.add("active");
          } else {
            b.classList.remove("active");
          }
        });
      }
    });
  }

  // Intercept Open Team button click (e.g. from topbar) to sync tab state
  const openTeamBtn = document.querySelector("#openTeam");
  if (openTeamBtn) {
    openTeamBtn.addEventListener("click", () => {
      if (window.innerWidth <= 760) {
        document.body.setAttribute("data-active-tab", "team");
        tabBtns.forEach(b => {
          if (b.getAttribute("data-tab") === "team") {
            b.classList.add("active");
          } else {
            b.classList.remove("active");
          }
        });
      }
    });
  }

  // Set initial elevation label based on screen width
  const elevLabel = document.querySelector(".terrain-readout span");
  if (elevLabel) {
    elevLabel.textContent = window.innerWidth <= 760 ? "点击位置高程" : "鼠标悬停高程";
  }
});

