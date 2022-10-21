const cols = document.querySelectorAll('.col')
const btns = document.querySelectorAll('button')
const changeClasses = document.querySelectorAll('.fa-lock')
// console.log(changeClasses);

// btns.forEach(addEventListener('click', btn => {
//     console.log('btn');
// })

// btns.forEach(btn => {
//     btn.addEventListener('click', function() {
//         // changeClasses.forEach(i => i.classList.toggle('fas fa-thin fa-lock-open'))
//         // console.log('btn');
//         btn.classList.toggle('fa-lock')
//         btn.classList.toggle('fa-lock-open')
//     })
// })


// Открытие / закрытие замка:
document.addEventListener('click', event => {
    const type = event.target.dataset.type

    if (type === 'lock') {
        const list = event.target.tagName.toLowerCase() === 'i' ? event.target : event.target.children[0]

        list.classList.toggle('fa-lock-open')
        list.classList.toggle('fa-lock')
    
    } else if (type === 'text') {
        copyToClipBoard(event.target.textContent)
    }
})


document.addEventListener('keydown', e=> {
    e.preventDefault()
    if (e.code.toLowerCase() === 'space') {
        setRanColor()
    }
    // console.log(e.code);
}) 


function genRanColor() {
    const hexCodes = '0123456789ABCDEF'
    let color = ''

    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}


// Копирование заголовка:
function copyToClipBoard(text) {
    return navigator.clipboard.writeText(text)
}


function setTextColor(text, color) {
    const luminance = chroma(color).luminance();

    text.style.color = luminance > .5 ? '#15032b' : '#fff'
    // text.style.color = luminance > .5 ? 'darkblue' : '#fff'
}

function setRanColor() {
    cols.forEach(col => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        const text = col.querySelector('h2')
        const btn = col.querySelector('button')

        if (isLocked) return null

        const runRamColor = genRanColor()
        text.textContent = runRamColor.toLowerCase()

        col.style.background = runRamColor

        setTextColor(text, runRamColor)
        setTextColor(btn, runRamColor)
    })
}

setRanColor()