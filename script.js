document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  fetchStocks();
});

function fetchStocks() {
  const symbols = ["AAPL", "MSFT", "GOOGL", "TSLA", "META", "NVDA", "AMZN", "NFLX", "INTC", "AMD"];
  const apiKey = "M51GFmBCgOGoJlVXu6l6rZBASwC8TDhM";

  fetch(`https://financialmodelingprep.com/api/v3/quote/${symbols.join(",")}?apikey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("#stock-table tbody");
      tbody.innerHTML = "";
      data.forEach(stock => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${stock.symbol}</td>
          <td>${stock.name || "-"}</td>
          <td>$${stock.price?.toFixed(2)}</td>
          <td class="${stock.changePercent >= 0 ? 'positive' : 'negative'}">
            ${stock.changePercent?.toFixed(2)}%
          </td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch(err => console.error("שגיאה בטעינת מניות:", err));
}