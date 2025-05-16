function checkEligibility(age, isEmployed) {
    if (age > 18 && isEmployed) {
  return "You are eligible for the program.";
}
else if (age > 18 && !isEmployed) {
  return "You are conditionally eligible for the program.";
}
else if (age > 18 && !isEmployed) {
  return "You are conditionally eligible for the program.";
}

}

 function checkEligibility(age, isEmployed) {
    if (age > 18 && isEmployed) {
      return "You are eligible for the program.";
    } else if (age > 18 && !isEmployed) {
      return "You are conditionally eligible for the program.";
    } else {
      return "You are not eligible for the program.";
    }
  }

  function handleCheck() {
    const ageValue = document.getElementById("age").value;
    const employmentValue = document.getElementById("employment").value;

    const age = parseInt(ageValue);

    const isEmployed = employmentValue === "yes";

    const result = checkEligibility(age, isEmployed);

    document.getElementById("result").textContent = result;
  }