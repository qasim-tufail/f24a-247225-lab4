let people = [{ name: "Qasim" }];

const nameBox = document.getElementById("name");
const hereBtn = document.getElementById("hereBtn");
const outBtn = document.getElementById("outBtn");
const listBody = document.getElementById("listBody");
const countText = document.getElementById("count");

hereBtn.addEventListener("click", function () {
  people.push({ name: nameBox.value, isIn: true });
  drawList();
});

outBtn.addEventListener("click", function () {
  people.push({ name: nameBox.value, isIn: false });
  drawList();
});

function drawList() {
  let html = "";
  let count = 0;

  for (let i = 0; i < people.length; i++) {
    const { name, isIn } = people[i]; // read both from the same person
    html += `<tr><td>${name}</td><td>${isIn}</td></tr>`;

    if (isIn === true) {
      count = count + 1;
    }
  }

  listBody.innerHTML = html;
  countText.textContent = "People in the shop: " + count;
}

drawList();