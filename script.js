const toggle = document.querySelector("#menu-toggle");
const links = document.querySelector("#nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
links.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  links.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#contact-form").addEventListener("submit", event => {
  event.preventDefault();
  document.querySelector("#status").textContent =
    "Form validated. Connect an email service if you want to send messages.";
});
