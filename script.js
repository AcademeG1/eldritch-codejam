// import cardsBlue from './assets/MythicCards/blue/indexBlue.js';
import indexCard from './data/mythicCards/colorCard.js';
let difficultLvl = ''
const ancientsData = [
    {
        id: 'azathoth',
        name: 'azathoth',
        firstStage: {
            greenCards: 1,
            blueCards: 1,
            brownCards: 2,
        },
        secondStage: {
            greenCards: 2,
            blueCards: 1,
            brownCards: 3,
        },
        thirdStage: {
            greenCards: 2,
            blueCards: 0,
            brownCards: 4,
        },
    },
]

function random(max) {
    return Math.floor(Math.random() * (max - 1 + 1) + 1)
}

const ancientFirst = document.querySelector('.ancient-first')
const difficult = document.querySelector('.difficult')
const lite = document.querySelector('.lite')
const middle = document.querySelector('.middle')
const hardd = document.querySelector('.hard')
const deskBtn = document.querySelector('.desk_btn')
let greenMass = []
let greenMassMed = []
let greenMassHard = []

let blueMass = []
let blueMassMed = []
let blueMassHard = []

let brownMass = []
let brownMassMed = []
let brownMassHard = []

let isClickAncient = false
console.log(isClickAncient)
ancientFirst.addEventListener('click', () => {isClickAncient = true
    ancientFirst.classList.add('active')
    if (isClickAncient) {
        difficult.style.display = 'flex'
    }
    console.log(isClickAncient)})

lite.addEventListener('click', () => {
    lite.classList.add('active')
    deskBtn.style.display = 'block'
    difficultLvl = 'easy'
    sortGreenCards()
    sortBrownCards()
    sortBlueCards()
    console.log(greenMass)//5
    console.log(brownMass)//9
    console.log(blueMass)//2
        for (let i = 0; i < Azzot.firstRound[0]; i++) {
            roundOne[0].push(random(greenMass.length))
        }
        for (let i = 0; i < Azzot.firstRound[1]; i++) {
            roundOne[1].push(random(brownMass.length))
        }
        for (let i = 0; i < Azzot.firstRound[2]; i++) {
            roundOne[2].push(random(blueMass.length))
        }
    console.log(roundOne)
        for (let i = 0; i < Azzot.secondRound[0]; i++) {
            roundTwo[0].push(random(greenMass.length))
        }
        for (let i = 0; i < Azzot.secondRound[1]; i++) {
            roundTwo[1].push(random(brownMass.length))
        }
        for (let i = 0; i < Azzot.secondRound[2]; i++) {
            roundTwo[2].push(random(blueMass.length))
        }
    console.log(roundTwo)
        for (let i = 0; i < Azzot.thirtyRound[0]; i++) {
            roundThree[0].push(random(greenMass.length))
        }
        for (let i = 0; i < Azzot.thirtyRound[1]; i++) {
            roundThree[1].push(random(brownMass.length))
        }
        for (let i = 0; i < Azzot.thirtyRound[2]; i++) {
            roundThree[2].push(random(blueMass.length))
        }
    console.log(roundThree)
})

middle.addEventListener('click', () => {
    middle.classList.add('active')
    deskBtn.style.display = 'block'
    difficultLvl = 'normal'
    sortGreenCards()
    sortBrownCards()
    sortBlueCards()
    console.log(greenMass)//5
    console.log(brownMass)//9
    console.log(blueMass)//2
})
hardd.addEventListener('click', () => {
    hardd.classList.add('active')
    deskBtn.style.display = 'block'
    difficultLvl = 'hard'
    sortGreenCards()
    sortBrownCards()
    sortBlueCards()
    console.log(greenMass)//5
    console.log(brownMass)//9
    console.log(blueMass)//2
})



const Azzot = {
    firstRound : [1, 2, 1],
    secondRound : [2, 3, 1],
    thirtyRound : [2, 4, 0],
}


const roundOne = [[],[],[]]
const roundTwo = [[],[],[]]
const roundThree = [[],[],[]]
//

function sortGreenCards() {
    greenMass = []
    // greenMassMed = []
    // greenMassHard = []
    indexCard.greenCards.forEach((el) => {
        if (el.difficulty === difficultLvl) {
            greenMass.push(el)
        }
    })
    // indexCard.greenCards.forEach((el) => {
    //     if (el.difficulty === difficultLvl) {
    //         greenMassMed.push(el)
    //     }
    // })
    // indexCard.greenCards.forEach((el) => {
    //     if (el.difficulty === difficultLvl) {
    //         greenMassHard.push(el)
    //     }
    // })
}
function sortBlueCards() {
    blueMass = []
    // blueMassMed = []
    // blueMassHard = []
    indexCard.blueCards.forEach((el) => {
        if (el.difficulty === difficultLvl) {
            blueMass.push(el)
        }
    })
    // indexCard.blueCards.forEach((el) => {
    //     if (el.difficulty === difficultLvl) {
    //         blueMassMed.push(el)
    //     }
    // })
    // indexCard.blueCards.forEach((el) => {
    //     if (el.difficulty === difficultLvl) {
    //         blueMassHard.push(el)
    //     }
    // })
}
function sortBrownCards() {
    brownMass = []
    // brownMassMed = []
    // brownMassHard = []
    indexCard.brownCards.forEach((el) => {
        if (el.difficulty === difficultLvl) {
            brownMass.push(el)
        }
    })
    // indexCard.brownCards.forEach((el) => {
    //     if (el.difficulty === difficultLvl) {
    //         brownMassMed.push(el)
    //     }
    // })
    // indexCard.brownCards.forEach((el) => {
    //     if (el.difficulty === difficultLvl) {
    //         brownMassHard.push(el)
    //     }
    // })
}

// console.log(Azzot.firstRound[0])


if (ancientFirst.classList.contains('active')) {

}


// console.log(indexCard)
// console.log(indexCard.blueCards)
// console.log(indexCard.blueCards.length)
// console.log(indexCard.blueCards[0].difficulty)
