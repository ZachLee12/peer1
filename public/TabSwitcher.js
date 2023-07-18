
export function addTabSwitches() {
    const videoStreamBtn = document.querySelector('.video-stream-btn')
    const sendMessageBtn = document.querySelector('.send-message-btn')
    const videoEl = document.querySelector('#video')
    const messagesWrapper = document.querySelector('.messages-wrapper')

    videoStreamBtn.addEventListener('click', () => {
        messagesWrapper.classList.add('hidden')
        videoEl.classList.remove('hidden')
    })

    sendMessageBtn.addEventListener('click', () => {
        messagesWrapper.classList.remove('hidden')
        videoEl.classList.add('hidden')
    })
}