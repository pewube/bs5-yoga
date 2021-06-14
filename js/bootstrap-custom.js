// bootstrap scrollspy fix

function hotfixScrollSpy() {
  var dataSpyList = [].slice.call(
    document.querySelectorAll('[data-bs-spy="scroll"]')
  );
  let curScroll = getCurrentScroll();
  dataSpyList.forEach(function (dataSpyEl) {
    let offsets = bootstrap.ScrollSpy.getInstance(dataSpyEl)["_offsets"];
    for (let i = 0; i < offsets.length; i++) {
      offsets[i] += curScroll;
    }
  });
}

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

window.onload = function () {
  hotfixScrollSpy();
  window.scrollBy(0, 1);
};

// navbar-collapse

const navbarCollapse = document.getElementById("navbarNav");
const navbarTogglerBtn = document.querySelector(".navbar-toggler");
const navbarCollapseLinks = document.querySelectorAll("#navbarNav .nav-link");

navbarCollapseLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarCollapse.classList.remove("collapse", "show");
    navbarCollapse.classList.add("collapse");
    navbarTogglerBtn.classList.add("collapsed");
    navbarTogglerBtn.setAttribute("aria-expanded", "false");
  });
});
