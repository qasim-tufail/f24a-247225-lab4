let rows = [];

const itemBox = document.getElementById("item");
const quantityBox = document.getElementById("quantity");
const priceBox = document.getElementById("price");
const addBtn = document.getElementById("addBtn");
const sheetBody = document.getElementById("sheetBody");

addBtn.addEventListener("click", addRow);

function addRow() {
  const row = {
    quantity: quantityBox.value,
    price: priceBox.value
  };

  if (itemBox.value !== "") {
    row.item = itemBox.value; // an empty box leaves the object with no item
  }

  row.line = row.quantity * row.price;
  row.note = row.price + row.quantity;

  rows.push(row);
  drawTable();

  itemBox.value = "";
  quantityBox.value = "";
  priceBox.value = "";
}

function drawTable() {
  let html = "";
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    html += `<tr>
      <td>${row.item}</td>
      <td>${row.quantity}</td>
      <td>${row.price}</td>
      <td>${row.line}</td>
      <td>${row.note}</td>
    </tr>`;
  }
  sheetBody.innerHTML = html;
}