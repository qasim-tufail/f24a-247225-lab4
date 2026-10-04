let people = [];

const nameBox = document.getElementById("name");
const hereBtn = document.getElementById("hereBtn");
const outBtn = document.getElementById("outBtn");

hereBtn.addEventListener("click", function () {
  people.push({ name: nameBox.value, isIn: true });
});

outBtn.addEventListener("click", function () {
  people.push({ name: nameBox.value, isIn: false });
});