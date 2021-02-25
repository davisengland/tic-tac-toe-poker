const cardId = document.getElementById('grab-id')
const cardColor = document.getElementById('assign-style')

function setCard() {
    const card = document.getElementById(cardId.value)
    card.style.color = cardColor.value
}