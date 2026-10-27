const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
const year = document.getElementById("year");

const cleanPathMap = {
  "/index.html": "/",
  "/index-jp.html": "/jp",
  "/resume.html": "/resume",
  "/resume-jp.html": "/resume-jp",
};
const cleanPath = cleanPathMap[window.location.pathname];

if (cleanPath) {
  window.history.replaceState(null, "", `${cleanPath}${window.location.search}${window.location.hash}`);
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}

// Nested project tabs: selecting a tab shows its panel and hides its siblings' panels.
document.querySelectorAll(".tab-list").forEach((tabList) => {
  const tabs = tabList.querySelectorAll('[role="tab"]');

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((otherTab) => {
        const isSelected = otherTab === tab;
        otherTab.setAttribute("aria-selected", String(isSelected));
        document.getElementById(otherTab.getAttribute("aria-controls")).hidden = !isSelected;
      });
    });
  });
});

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
