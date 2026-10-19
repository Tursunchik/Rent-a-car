document.getElementById("year").textContent = new Date().getFullYear();

const btn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => nav.classList.toggle("open"));

document
  .getElementById("quick-book")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "Заявка отправлена! Администратор свяжется с вами. (Это пример — подключите бэкенд)"
    );
  });