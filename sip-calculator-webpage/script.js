const monthlyInput = document.getElementById("monthly-investment");
const rateInput = document.getElementById("return-rate");
const timeInput = document.getElementById("time-period");

const monthlyRange = document.getElementById("monthly-investment-range");
const rateRange = document.getElementById("return-rate-range");
const timeRange = document.getElementById("time-period-range");

const investedSpan = document.getElementById("invested-amount");
const returnSpan = document.getElementById("est-return");
const totalSpan = document.getElementById("total-value");
const resultCircle = document.getElementById("resultCircle");

// Format numbers into Indian currency
function formatRupee(num) {
  return "₹" + num.toLocaleString("en-IN");
}

// SIP Calculation formula
function calculateSIP() {
  const P = parseFloat(monthlyInput.value) || 0;  // monthly investment
  const r = (parseFloat(rateInput.value) || 0) / 100 / 12; // monthly rate
  const n = (parseFloat(timeInput.value) || 0) * 12; // months

  if (P === 0 || r === 0 || n === 0) {
    investedSpan.textContent = "₹0";
    returnSpan.textContent = "₹0";
    totalSpan.textContent = "₹0";
    resultCircle.style.background = "#B6C4B6";
    return;
  }

  const totalInvestment = P * n;
  const maturityValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const estReturn = maturityValue - totalInvestment;

  investedSpan.textContent = formatRupee(totalInvestment);
  returnSpan.textContent = formatRupee(estReturn);
  totalSpan.textContent = formatRupee(maturityValue);

  // Circle fill effect for visualization
  const percent = (maturityValue / (totalInvestment * 2)) * 100;
  resultCircle.style.background = `conic-gradient(
    #163020 ${percent}%, 
    #B6C4B6 ${percent}%
  )`;
}

// Sync range ↔ input fields
function syncInputs(input, range) {
  input.addEventListener("input", () => {
    range.value = input.value;
    calculateSIP();
  });
  range.addEventListener("input", () => {
    input.value = range.value;
    calculateSIP();
  });
}

syncInputs(monthlyInput, monthlyRange);
syncInputs(rateInput, rateRange);
syncInputs(timeInput, timeRange);

// Initial calculation
calculateSIP();
