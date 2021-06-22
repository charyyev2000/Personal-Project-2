const x = document.querySelectorAll(".panel");
x.forEach((panel) => {
  panel.addEventListener("click", () => {
    sth();
    panel.classList.add("active");
  });
});

function sth() {
  x.forEach((panel) => {
    panel.classList.remove("active");
  });
}
