// Example interactive feature
document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".styled-table tbody tr");
  
    rows.forEach(row => {
      row.addEventListener("click", () => {
        alert(`You clicked on ${row.cells[0].textContent}`);
      });
    });
  });
  
  