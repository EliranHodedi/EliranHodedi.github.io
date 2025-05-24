document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  fetchStocks();
});

function fetchStocks() {
  const symbols = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"];
  const apiKey = "demo"; // ניתן להחליף למפתח אישי

  fetch(`https://financialmodelingprep.com/api/v3/quote/${symbols.join(",")}?apikey=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      const tbody = document.querySelector("#stock-table tbody");
      tbody.innerHTML = "";
      data.forEach((stock) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${stock.symbol}</td>
          <td>${stock.name}</td>
          <td>$${stock.price}</td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch((err) => {
      console.error("שגיאה בטעינת מניות:", err);
    });
}
