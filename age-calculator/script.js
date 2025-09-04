// Select elements
const dobInput = document.getElementById("date-of-birth");
const currentDateInput = document.getElementById("current-date");
const calcBtn = document.getElementById("calc-btn");
const resetBtn = document.getElementById("reset-btn");
const resultBoxes = document.querySelectorAll(".wrappers-text h2");

// Autofill today's date
currentDateInput.valueAsDate = new Date();

// Show error
function showError(message) {
  const errorMsg = document.getElementById("error-msg");
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
  setTimeout(() => (errorMsg.style.display = "none"), 3000);
}

// Calculate age
function calculateAge() {
  const dobValue = dobInput.value;
  const currentValue = currentDateInput.value;

  if (!dobValue) {
    showError("⚠️ Please select your Date of Birth!");
    return;
  }
  if (!currentValue) {
    showError("⚠️ Please select the Current Date!");
    return;
  }

  const dob = new Date(dobValue);
  const currentDate = new Date(currentValue);

  if (currentDate.getTime() < dob.getTime()) {
    showError("⚠️ Current date cannot be earlier than Date of Birth!");
    return;
  }

  // ✅ Years / Months / Days
  let years = currentDate.getFullYear() - dob.getFullYear();
  let months = currentDate.getMonth() - dob.getMonth();
  let days = currentDate.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonthDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    days += prevMonthDays;
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  // ✅ Hours & Minutes
  const diffMs = currentDate - dob;
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor(diffMs / (1000 * 60));

  // Animate results
  document.querySelectorAll(".wrappers-text").forEach((box) => {
    box.classList.remove("show");
    void box.offsetWidth; // restart animation
    box.classList.add("show");
  });

  // Display results
  resultBoxes[0].textContent = years;
  resultBoxes[1].textContent = months;
  resultBoxes[2].textContent = days;
  resultBoxes[3].textContent = hours;
  resultBoxes[4].textContent = minutes;

  // 🎂 Next Birthday Countdown (FIXED - inside calculateAge)
  let nextBirthday = new Date(
    currentDate.getFullYear(),
    dob.getMonth(),
    dob.getDate()
  );

  if (nextBirthday.getTime() < currentDate.getTime()) {
    nextBirthday.setFullYear(currentDate.getFullYear() + 1);
  }

  const diffBdayMs = nextBirthday - currentDate;
  const daysToBirthday = Math.ceil(diffBdayMs / (1000 * 60 * 60 * 24));

  document.getElementById("next-bday").textContent = daysToBirthday;
}

// Reset
function resetFields() {
  dobInput.value = "";
  currentDateInput.valueAsDate = new Date();
  resultBoxes.forEach((box) => (box.textContent = "00"));
  document
    .querySelectorAll(".wrappers-text")
    .forEach((box) => box.classList.remove("show"));
  document.getElementById("error-msg").style.display = "none";
  document.getElementById("next-bday").textContent = "--";
}

// Events
calcBtn.addEventListener("click", calculateAge);
resetBtn.addEventListener("click", resetFields);

// 🌗 Theme Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  // Change icon dynamically
  if (document.body.classList.contains("light-theme")) {
    themeToggle.innerHTML = '<i class="ri-sun-line"></i>'; // Sun icon
  } else {
    themeToggle.innerHTML = '<i class="ri-moon-line"></i>'; // Moon icon
  }
});
