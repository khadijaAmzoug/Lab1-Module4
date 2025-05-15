function calculateTotalCost() {
    const price  =  parseFloat(document.getElementById("price").value); 
    const quantity = parseFloat(document.getElementById("quantity").value);
    const taxRate =parseFloat(document.getElementById("taxRate").value)/100;
     const discount = parseFloat(document.getElementById("discount").value) || 0;

  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
    document.getElementById("TotalCostOutput").textContent = "Invalid input. Please enter valid numbers.";
    return;
  }
  let totalCost = (price * quantity);
  if (discount > 0) {
    totalCost -= discount;
  }
  totalCost *= (1 + taxRate);
  document.getElementById("TotalCostOutput").textContent = "Your total price is: " + totalCost.toFixed(2);
}
