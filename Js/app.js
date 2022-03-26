const colors = ['green','red','yellow','pink','purple','brown','gray','white',]
const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
const btnSimple = document.getElementById('btn-simple')
const btnHex = document.getElementById('btn-hex')
const textColor = document.querySelector('.color')

btnSimple.addEventListener('click', () => {
    const randomNumber = getRandomColor()
    document.body.style.backgroundColor = colors[randomNumber]
    textColor.textContent = colors[randomNumber]
})
btnHex.addEventListener('click', () => {
    let hexColor = '#'
    for(let i=0;i<6; i++) {
        hexColor += hex[ getRandomHex()]
    }
    document.body.style.backgroundColor = hexColor
    textColor.textContent = hexColor
})
const getRandomColor = () => {
    return Math.floor(Math.random() * colors.length)
}

const getRandomHex = () => {
    return Math.floor(Math.random() * hex.length)
}