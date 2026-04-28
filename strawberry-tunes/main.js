function toggleCalendar() {
  const month = document.getElementById("monthView");
  const week = document.getElementById("weekView");

  if (month.style.display === "none") {
    month.style.display = "block";
    week.style.display = "none";
  } else {
    month.style.display = "none";
    week.style.display = "block";
  }
}