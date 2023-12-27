const players = {
    "premire_league": [
        {
            "first_name": "Aaron",
            "last_name": "Signer",
            "pdga_number": 97556
        },
        {
            "first_name": "Samuel",
            "last_name": "Hockenberry",
            "pdga_number": 12345
        },
    ]
}

function generatePlayerCardHtml(player) {
    return `
    <a href="https://bing.com">
      <img
        src="https://cdn.shopify.com/s/files/1/0602/4976/8102/files/Tanner.jpg?v=1674102821"
        alt="Tanner McCartney"
        class="player-img"
      >
    </a>
    <div class="container">
      <h3 class="fit-content no-margin">
        ${player.first_name} <br>
        ${player.last_name}
      </h3>
      <p class="fit-content no-margin">PDGA #${player.pdga_number}</p>
      <p></p>
    </div>
    `;
}

let div = document.getElementById("div");
console.log(players.premire_league);

for (player of players.premire_league) {
    const div2 = document.createElement('div');
    div2.classList.add("member");
    div2.innerHTML = generatePlayerCardHtml(player);

    // div.appendChild(div2);

}




  