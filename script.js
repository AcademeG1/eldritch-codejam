// import cardsBlue from './assets/MythicCards/blue/indexBlue.js';
import indexCard from './data/mythicCards/colorCard.js';
import green from "./assets/MythicCards/green";
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
let massGreenRes = []
function random(max) {
    let res = 0
    return zam()
    function zam() {
        res = Math.floor(Math.random() * (max))
        if (!massGreenRes.includes(res)) {
            massGreenRes.push(res)
            return res
        } else {
            return random(max)
        }
}}

// function random(max) {
//     return  Math.floor(Math.random() * (max))
// }

// const deskAll = document.querySelector('.desk-all')
const deskTracker = document.querySelector('.desk-tracker')
const ancientFirst = document.querySelector('.ancient-first')
const difficult = document.querySelector('.difficult')
const lite = document.querySelector('.lite')
const middle = document.querySelector('.middle')
const hardd = document.querySelector('.hard')
const deskBtn = document.querySelector('.desk_btn')
const deskCard = document.querySelector('.desk-card')
const deskAll = document.querySelector('.desk-all')

//colors style
const greenOne = document.querySelector('.greenOne')
const brownOne = document.querySelector('.brownOne')
const blueOne = document.querySelector('.blueOne')

const greenTwo = document.querySelector('.greenTwo')
const brownTwo = document.querySelector('.brownTwo')
const blueTwo = document.querySelector('.blueTwo')

const greenThree = document.querySelector('.greenThree')
const brownThree = document.querySelector('.brownThree')
const blueThree = document.querySelector('.blueThree')

const checkRoundMass = []

let greenMass = []
// let greenMassMed = []
// let greenMassHard = []

let blueMass = []
// let blueMassMed = []
// let blueMassHard = []

let brownMass = []
// let brownMassMed = []
// let brownMassHard = []

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


let roundOne = [[],[],[]]
let roundTwo = [[],[],[]]
let roundThree = [[],[],[]]
//

// deskCard.style.backgroundImage =


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
deskBtn.addEventListener('click', () => {
    deskBtn.style.display = 'none'
    deskTracker.style.display = 'block'
    deskAll.style.display = 'block'
    sortGreenCards()
    sortBrownCards()
    sortBlueCards()
    console.log(greenMass)//5
    console.log(brownMass)//9
    console.log(blueMass)//2
    roundOne = [[],[],[]]
    roundTwo = [[],[],[]]
    roundThree = [[],[],[]]
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
    massGreenRes = []
            for (let i = 0; i < Azzot.secondRound[0]; i++) {
                roundTwo[0].push(random(greenMass.length))
            }
            for (let i = 0; i < Azzot.secondRound[1]; i++) {
                roundTwo[1].push(random(brownMass.length))
            }
            for (let i = 0; i < Azzot.secondRound[2]; i++) {
                roundTwo[2].push(random(blueMass.length))
            }
    massGreenRes = []
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
    massGreenRes = []
    console.log(roundThree)

    // let info = roundOne[0].concat(roundOne[2]).concat(roundOne[1])
    // console.log(info)
    greenOne.textContent = `${roundOne[0].length}`
    brownOne.textContent = `${roundOne[1].length}`
    blueOne.textContent = `${roundOne[2].length}`

    greenTwo.textContent = `${roundTwo[0].length}`
    brownTwo.textContent = `${roundTwo[1].length}`
    blueTwo.textContent = `${roundTwo[2].length}`

    greenThree.textContent = `${roundThree[0].length}`
    brownThree.textContent = `${roundThree[1].length}`
    blueThree.textContent = `${roundThree[2].length}`
    // console.log(greenMass[roundOne[1][0]].cardFace)
    // deskCard.appendChild(greenMass[roundOne[0]].cardFace)
})
let timerCounter = 0
let Counter = 0
let Counter1 = 0
deskAll.addEventListener('click', () => {
    let i = roundOne[timerCounter].length
    if (i === 0) {
        console.log('закончился раунд 1')
        timerCounter++
        i = roundOne[timerCounter].length
        Counter = roundOne[timerCounter].length-1
        //roundTwo начинается
    }
    if (Counter <= i){
        console.log(roundOne[timerCounter][Counter])

        console.log('до удаления '+deskCard.hasChildNodes())
        if (deskCard.hasChildNodes()) {
            // deskCard.removeChild()
            deskCard.innerHTML = ''
        }
        console.log('после удаления '+deskCard.hasChildNodes())
        deskCard.appendChild(greenMass[roundOne[timerCounter][Counter]].cardFace)
        console.log(roundOne[timerCounter][0])
        Counter--
        checkRoundMass.push(roundOne[timerCounter].pop())

    }

    greenOne.textContent = `${roundOne[0].length}`
    brownOne.textContent = `${roundOne[1].length}`
    blueOne.textContent = `${roundOne[2].length}`



    console.log('следующая карта')
    console.log(checkRoundMass)
})







// if (ancientFirst.classList.contains('active')) {
//
// }


// console.log(indexCard)
// console.log(indexCard.blueCards)
// console.log(indexCard.blueCards.length)
// console.log(indexCard.blueCards[0].difficulty)
