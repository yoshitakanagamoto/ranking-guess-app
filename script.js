let rankingData;

fetch("menu.json")
  .then(response => response.json())
  .then(data => rankingData = data.ranking);

function checkRanking() {
  const input = document.getElementById("menuInput").value.trim();
  const result = document.getElementById("result");

  const found = rankingData.find(item => item.name === input);

  if (found) {
    if (found.rank <= 10) {
      document.querySelectorAll(".rank")[found.rank - 1].textContent = found.name;
      document.querySelectorAll(".rank")[found.rank - 1].style.color = "red";
      result.textContent = `「${input}」は ${found.rank} 位！（ランキング表に追加）`;
    } else {
      result.textContent = `「${input}」は ${found.rank} 位（ランキング表外）`;
      result.style.color = "blue";
    }
  } else {
    result.textContent = `「${input}」はランク外`;
    result.style.color = "black";
  }

  document.getElementById("menuInput").value = "";
}
