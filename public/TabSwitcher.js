const videoStreamBtn = document.querySelector('.video-stream-btn')
const sendMessageBtn = document.querySelector('.send-message-btn')
const videoEl = document.querySelector('#video')
const messagesWrapper = document.querySelector('.messages-wrapper')
const showMessageBtn = document.querySelector('.show-message-btn')

export function addTabSwitches() {
    showMessageBtn.addEventListener('click', () => {
        messagesWrapper.classList.remove('hidden')
        videoEl.classList.add('hidden')
    })

    videoStreamBtn.addEventListener('click', () => {
        messagesWrapper.classList.add('hidden')
        videoEl.classList.remove('hidden')
    })

    sendMessageBtn.addEventListener('click', () => {
        messagesWrapper.classList.remove('hidden')
        videoEl.classList.add('hidden')
    })
}

export function addMessageFromPhilipp(msg) {
    const p = document.createElement('p')
    p.classList.add('message-philipp')
    p.innerText = msg
    messagesWrapper.append(p)
}

export function addMessageFromZach(msg) {
    const p = document.createElement('p')
    p.classList.add('message-zach')
    p.innerText = msg
    messagesWrapper.append(p)
}