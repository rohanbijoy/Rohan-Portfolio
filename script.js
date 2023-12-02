function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function toggleList(event) {
  event.preventDefault(); // Prevent the default behavior of the link
  var list = document.getElementById("keyContributionsList");
  var link = document.getElementById("toggleLink");

  if (list.style.display === 'none') {
      list.style.display = 'block';
      link.textContent = 'Less Details';
  } else {
      list.style.display = 'none';
      link.textContent = 'More Details';
  }
}