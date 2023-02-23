let toggleButton = document.querySelector('.toggle')

let toggleOn = document.querySelector('.on')

let toggleOff = document.querySelector('.off')

let container = document.querySelector('.container')

let fluorescent = document.querySelector('.fluorescent')

let fluorescentOff = document.querySelector('.fluorescent__off')

let fluorescentOn = document.querySelector('.fluorescent__on')

let toggleButtonPosition = document.querySelector('.pos')

let bodyOn = document.querySelector('.body__on')

let bodyOff = document.querySelector('.body__off')

let light = false

toggleButton.addEventListener("click", function(){
    if (light) {
        light = false
        toggleButtonPosition.classList.add('off')
        toggleButtonPosition.classList.remove('on')
        document.querySelector('.hero__body').classList.add('body__off')
        document.querySelector('.hero__body').classList.remove('body__on')
        fluorescent.classList.add('fluorescent__off')
        fluorescent.classList.remove('fluorescent__on')

    } else {
        light = true
        toggleButtonPosition.classList.remove('off')
        toggleButtonPosition.classList.add('on')
        document.querySelector('.hero__body').classList.remove('body__off')
        document.querySelector('.hero__body').classList.add('body__on')
        fluorescent.classList.remove('fluorescent__off')
        fluorescent.classList.add('fluorescent__on')
    }
})