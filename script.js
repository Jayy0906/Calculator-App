let currentInput = "";

function appendValue(value) {
  const display = document.getElementById("displayText");

  // Prevent invalid inputs (e.g., consecutive operators)
  if (
    ["+", "-", "*", "/"].includes(value) &&
    ["+", "-", "*", "/"].includes(currentInput.slice(-1))
  ) {
    return;
  }

  // Update display
  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }

  display.textContent = currentInput;
}

function calculateResult() {
  const display = document.getElementById("displayText");

  try {
    const result = eval(currentInput);

    // Handle division by zero
    if (result === Infinity || isNaN(result)) {
      display.textContent = "Error";
      currentInput = "";
    } else {
      display.textContent = result;
      currentInput = result.toString();
    }
  } catch {
    display.textContent = "Error";
    currentInput = "";
  }
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("displayText").textContent = "0";
}
