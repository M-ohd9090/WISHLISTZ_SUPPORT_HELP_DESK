const customers = [
  {
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    address: "Pune, Maharashtra",
    type: "Business",
    age: 29,
    gender: "Male",
    duration: "2 Years"
  },
  {
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "9123456780",
    address: "Mumbai, Maharashtra",
    type: "General",
    age: 26,
    gender: "Female",
    duration: "1 Year"
  }
];

const searchInput = document.getElementById("customerSearchInput");
const resultsDiv = document.getElementById("customerResults");

function displayCustomers(list) {
  resultsDiv.innerHTML = "";
  list.forEach(c => {
    resultsDiv.innerHTML += `
      <div class="customer-card">
        <h3>${c.name}</h3>
        <p><b>Email:</b> ${c.email}</p>
        <p><b>Phone:</b> ${c.phone}</p>
        <p><b>Address:</b> ${c.address}</p>
        <p><b>Customer Type:</b> ${c.type}</p>
        <p><b>Gender:</b> ${c.gender}</p>
        <p><b>Age:</b> ${c.age}</p>
        <p><b>With Wishlistz:</b> ${c.duration}</p>
      </div>
    `;
  });
}

displayCustomers(customers);

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(value) ||
    c.email.toLowerCase().includes(value) ||
    c.phone.includes(value)
  );
  displayCustomers(filtered);
});
