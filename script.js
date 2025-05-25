document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("stock-search");
  searchInput.addEventListener("input", () => {
    filterTable(searchInput.value.trim());
  });

  fetchStocks();
});

function fetchStocks() {
  const symbols = ["AAPL", "MSFT", "GOOGL", "TSLA", "META", "NVDA", "AMZN", "NFLX", "INTC", "AMD"];
  const apiKey = "M51GFmBCgOGoJlVXu6l6rZBASwC8TDhM";
  fetch(`https://financialmodelingprep.com/api/v3/quote/${symbols.join(",")}?apikey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      renderStocks(data);
    })
    .catch(err => console.error("שגיאה בטעינת מניות:", err));
}

function renderStocks(data) {
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
      <td><button class="btn-fancy" onclick="buyStock('${stock.symbol}', '${stock.name}', ${stock.price})">קנייה</button></td>
      <td><button class="btn-fancy" onclick="sellStock('${stock.symbol}', ${stock.price})">מכירה</button></td>
    `;
    tbody.appendChild(row);
  });
}

function filterTable(searchText) {
  const rows = document.querySelectorAll("#stock-table tbody tr");
  rows.forEach(row => {
    const symbol = row.children[0].textContent;
    const name = row.children[1].textContent;
    row.style.display = symbol.includes(searchText.toUpperCase()) || name.includes(searchText) ? "" : "none";
  });
}

function buyStock(symbol, name, price) {
  alert(`קנית מניה: ${symbol} ב-$${price.toFixed(2)}`);
}

function sellStock(symbol, price) {
  alert(`מכרת מניה: ${symbol} ב-$${price.toFixed(2)}`);
}
