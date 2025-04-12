function handleLogin(event) {
  event.preventDefault();
  alert("Login successful (dummy login)");
  window.location.href = 'dashboard.html';
}

function handleDonation(event) {
  event.preventDefault();
  const name = document.getElementById("itemName").value;
  const qty = document.getElementById("itemQty").value;
  const loc = document.getElementById("itemLoc").value;
  alert(`Thanks for donating ${qty} of ${name} at ${loc}!`);
  window.location.href = 'dashboard.html';
}

function handleScan() {
  const resultDiv = document.getElementById("scanResult");
  resultDiv.innerHTML = `
    <h3>Estimated Nutritional Values</h3>
    <ul>
      <li>Calories: 250 kcal</li>
      <li>Proteins: 12g</li>
      <li>Carbs: 30g</li>
      <li>Fats: 10g</li>
      <li>Freshness: 80%</li>
    </ul>
  `;
}
