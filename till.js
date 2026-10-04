const billBox = document.getElementById("bill");
const paidBox = document.getElementById("paid");
const takeBtn = document.getElementById("takeBtn");
const changeText = document.getElementById("changeText");
const halfText = document.getElementById("halfText");
const nullKind = document.getElementById("nullKind");

takeBtn.addEventListener("click", function () {
  const bill = billBox.value;
  let paid = paidBox.value;

  if (paid === "") {
    paid = null;
  }

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

  if (paid === null) {
    nullKind.textContent = "Kind of paid: " + typeof paid;
  } else {
    nullKind.textContent = "";
  }
});

function getChange(bill, paid) {
  return paid - bill;
}