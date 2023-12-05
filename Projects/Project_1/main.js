function loadGame(game) {
  fetch(`${game}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("Game").innerHTML = html;
    })
    .catch(error=>console.error('Error loading new page:', error))
}
