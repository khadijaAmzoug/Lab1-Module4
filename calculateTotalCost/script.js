function calculateTotalCost() {
    const price  =  parseFloat(document.getElementById("price").value); 
    const quantity = parseFloat(document.getElementById("quantity").value);
    const taxRate =parseFloat(document.getElementById("taxRate").value)/100;

  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
    document.getElementById("TotalCostOutput").textContent = "Invalid input. Please enter valid numbers.";
    return;
  }
  const totalCost = (price * quantity) * (1 + taxRate);

  document.getElementById("TotalCostOutput").textContent = "Your total price is: " + totalCost.toFixed(2);
}