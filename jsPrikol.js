let massGreenRes = []
function zam(max) {
    let res = Math.floor(Math.random() * (max))
    if (!massGreenRes.includes(res)) {
        massGreenRes.push(res)
        return res
    } else {
        return randomGreen(max)
    }
}
function randomGreen(max) {
    return zam(max)
}
console.log(randomGreen(5))
console.log(randomGreen(5))
console.log(randomGreen(5))
console.log(randomGreen(5))
console.log(randomGreen(5))
