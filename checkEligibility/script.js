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

  // 2. دالة لجلب القيم من الواجهة وربطها مع checkEligibility
  function handleCheck() {
    const ageValue = document.getElementById("age").value;
    const employmentValue = document.getElementById("employment").value;

    // نحول العمر إلى رقم
    const age = parseInt(ageValue);

    // نحول yes/no إلى true/false
    const isEmployed = employmentValue === "yes";

    // نستدعي الدالة الرئيسية
    const result = checkEligibility(age, isEmployed);

    // نعرض النتيجة للمستخدم
    document.getElementById("result").textContent = result;
  }