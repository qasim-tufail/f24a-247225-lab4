const billBox = document.getElementById("bill");
const paidBox = document.getElementById("paid");
const takeBtn = document.getElementById("takeBtn");
const changeText = document.getElementById("changeText");
const halfText = document.getElementById("halfText");

takeBtn.addEventListener("click", function () {
  const bill = billBox.value;
  const paid = paidBox.value;

  const change = getChange(bill, paid); // the call is above the function

  if (change < 0) {
    changeText.textContent = "Still owed: " + (change * -1);
  } else {
    changeText.textContent = "Change: " + change;
  }

  if (change > 0) {
    halfText.textContent = "Half of the change: " + change / 2;
  } else {
    halfText.textContent = "";
  }
});

function getChange(bill, paid) {
  return paid - bill;
}