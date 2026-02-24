document.addEventListener("DOMContentLoaded", function () {
  window.customers = [];

  const searchInput = document.getElementById("customerSearchInput");
  const resultsDiv = document.getElementById("customerResults");

  // ===================== LOAD DATA FROM CSV =====================
  async function loadCustomers() {
    try {
      const response = await fetch("customers.csv.xls");
      const csvText = await response.text();

      const rows = csvText.split("\n").slice(1);

      window.customers = rows
        .filter((row) => row.trim() !== "")
        .map((row) => {
          const cols = row.split(",");

          return {
            name: cols[0],
            email: cols[1],
            phone: cols[2],
            address: cols[3],
            type: cols[4],
            gender: cols[5],
            age: cols[6],
            duration: cols[7],
          };
        });

      displayCustomers(customers);
    } catch (error) {
      console.error("Error loading customers:", error);
    }
  }

window.orders = [];

async function loadOrders() {
  const response = await fetch("orders.csv.xls");
  const csvText = await response.text();

  const rows = csvText.split("\n").slice(1);

  window.orders = rows
    .filter(row => row.trim() !== "")
    .map(row => {
      const cols = row.split(",");
      return {
        email: cols[0],
        orderId: cols[1],
        product: cols[2],
        amount: cols[3],
        status: cols[4],
        date: cols[5],
      };
    });

  console.log("Orders loaded:", window.orders);
}

loadOrders();

  // ===================== DISPLAY CUSTOMERS =====================
  function displayCustomers(list) {
    resultsDiv.innerHTML = "";

    list.forEach((c) => {
      const card = document.createElement("div");
      card.className = "customer-card";

      card.innerHTML = `
        <h3>${c.name}</h3>
        <p><b>Email:</b> ${c.email}</p>
        <p><b>Phone:</b> ${c.phone}</p>
        <p><b>Address:</b> ${c.address}</p>
        <p><b>Customer Type:</b> ${c.type}</p>
        <p><b>Gender:</b> ${c.gender}</p>
        <p><b>Age:</b> ${c.age}</p>
        <p><b>With Wishlistz:</b> ${c.duration}</p>
      `;

      resultsDiv.appendChild(card);
    });
  }

  // ===================== SEARCH FILTER =====================
  if (searchInput) {
    searchInput.addEventListener("keyup", () => {
      const value = searchInput.value.toLowerCase();

      const filtered = customers.filter(
        (c) =>
          c.name.toLowerCase().includes(value) ||
          c.email.toLowerCase().includes(value) ||
          c.phone.includes(value),
      );

      displayCustomers(filtered);
    });
  }

  // Load data when page opens
  loadCustomers();
});