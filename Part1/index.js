const player = document.querySelector('#player')
let boxes = document.querySelectorAll('td')
let clickedBoxes = []

function play(boxId) {
    const clickedBox = document.getElementById(boxId)
    clickedBox.innerText = player.innerText

    if(clickedBoxes.includes(boxId) !== true) {
        clickedBoxes.push(boxId)

        if(player.innerText === 'X') {
            player.innerText = 'O'
        } else {
            player.innerText = 'X'
        }

        if(boxes[0].innerText === boxes[1].innerText && boxes[0].innerText === boxes[2].innerText && boxes[0].innerText.length > 0) {
            if(player.innerText === 'X') {
                window.alert(`Player ${player.innerText} Wins!`)
            } else {
                window.alert(`Player X Wins!`)
            }
        } else if(boxes[3].innerText === boxes[4].innerText && boxes[3].innerText === boxes[5].innerText && boxes[3].innerText.length > 0) {
            if(player.innerText === 'X') {
                window.alert(`Player O Wins!`)
            } else {
                window.alert(`Player X Wins!`)
            }
        } else if(boxes[6].innerText === boxes[7].innerText && boxes[6].innerText === boxes[8].innerText && boxes[6].innerText.length > 0) {
            if(player.innerText === 'X') {
                window.alert(`Player O Wins!`)
            } else {
                window.alert(`Player X Wins!`)
            }
        } else if(boxes[0].innerText === boxes[3].innerText && boxes[0].innerText === boxes[6].innerText && boxes[0].innerText.length > 0) {
            if(player.innerText === 'X') {
                window.alert(`Player O Wins!`)
            } else {
                window.alert(`Player X Wins!`)
            }
        } else if(boxes[1].innerText === boxes[4].innerText && boxes[1].innerText === boxes[7].innerText && boxes[1].innerText.length > 0) {
            if(player.innerText === 'X') {
                window.alert(`Player O Wins!`)
            } else {
                window.alert(`Player X Wins!`)
            }
        } else if(boxes[2].innerText === boxes[5].innerText && boxes[2].innerText === boxes[8].innerText && boxes[2].innerText.length > 0) {
            if(player.innerText === 'X') {
                window.alert(`Player O Wins!`)
            } else {
                window.alert(`Player X Wins!`)
            }
        } else if(boxes[0].innerText === boxes[4].innerText && boxes[0].innerText === boxes[8].innerText && boxes[0].innerText.length > 0) {
            if(player.innerText === 'X') {
                window.alert(`Player O Wins!`)
            } else {
                window.alert(`Player X Wins!`)
            }
        } else if(boxes[2].innerText === boxes[4].innerText && boxes[2].innerText === boxes[6].innerText && boxes[2].innerText.length > 0) {
            if(player.innerText === 'X') {
                window.alert(`Player O Wins!`)
            } else {
                window.alert(`Player X Wins!`)
            }
        } else {
            if(clickedBoxes.length === 9) {
                window.alert(`"CAT's" game`)
            }
        }
    }
}

