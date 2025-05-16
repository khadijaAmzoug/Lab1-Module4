function formatFullName() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  if (firstName==="" || lastName==="") {
    document.getElementById("fullNameOutput").textContent = "Invalid name input.";
    document.getElementById("fullNameOutput").classList.add("error");
    return;

  }
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  const capitalizedfirstName = capitalize(firstName);
  const capitalizedlastName = capitalize(lastName);

  const fullName = `${capitalizedfirstName} ${capitalizedlastName}`;

  document.getElementById("fullNameOutput").textContent = "Your full name is: " + fullName;
document.getElementById("fullNameOutput").classList.remove("error");
}
 