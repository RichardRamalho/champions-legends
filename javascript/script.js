const personagens = document.querySelectorAll(".jogador");
console.log(personagens);

personagens.forEach((jogador) => {
  jogador.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    removeSelectionCharacter();

    jogador.classList.add("selecionado");

    alteractionCharacterSelection(jogador);

    alteractionCharacterName(jogador);

    alteractionCharacterDescription(jogador);
  });
});

function alteractionCharacterDescription(jogador) {
  const description = document.getElementById("text-character");
  description.innerText = jogador.getAttribute("data-description");
}

function alteractionCharacterName(jogador) {
  const nameCharacter = document.getElementById("name-character");
  nameCharacter.innerText = jogador.getAttribute("data-name");
}

function alteractionCharacterSelection(jogador) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");

  const idCharacter = jogador.attributes.id.value;
  imagemPersonagemGrande.src = `./src/images/png/player-${idCharacter}.png`;
}

function removeSelectionCharacter() {
  const characterSelection = document.querySelector(".selecionado");
  characterSelection.classList.remove("selecionado");
}
