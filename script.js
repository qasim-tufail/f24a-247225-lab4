let rows = [];

const itemBox = document.getElementById("item");
const quantityBox = document.getElementById("quantity");
const priceBox = document.getElementById("price");
const addBtn = document.getElementById("addBtn");
const sheetBody = document.getElementById("sheetBody");
const totalEl = document.getElementById("total");
const totalKindEl = document.getElementById("totalKind");
const noteKindEl = document.getElementById("noteKind");
const textMatchEl = document.getElementById("textMatch");
const sameKindEl = document.getElementById("sameKind");
const lineKindEl = document.getElementById("lineKind");

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
  showTotal(row);

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

function showTotal(lastRow) {
  let total = 0;
  for (let i = 0; i < rows.length; i++) {
    if (!isNaN(rows[i].line)) {
      total = total + rows[i].line;
    }
  }

  const priceAsNumber = Number(lastRow.price);

  totalEl.textContent = "Total: " + total;
  totalKindEl.textContent = "Kind of total: " + typeof total;
  noteKindEl.textContent = "Kind of note: " + typeof lastRow.note;
  textMatchEl.textContent = "Price text matches price as a number: " + (lastRow.price == priceAsNumber);
  sameKindEl.textContent = "Price text and price number are the same kind: " + (typeof lastRow.price === typeof priceAsNumber);

  if (isNaN(lastRow.line)) {
    lineKindEl.textContent = "Kind of Line: " + typeof lastRow.line;
  } else {
    lineKindEl.textContent = "";
  }
}