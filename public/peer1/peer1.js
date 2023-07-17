import Peer from "peerjs";
const peer1 = new Peer("Philipp", {
    host: "localhost",
    port: 9000,
    path: "/",
})

// 'open' = when connection to PeerServer is established
peer1.on('open', (id) => console.log(`${id} connected to PeerServer`))

// 'connection'= when connection from a remote Peer is established
peer1.on('connection', data => console.log(data))

peer1.on("error", (error) => {
    console.error(error)
})

const conn = peer1.connect('Zach')

conn.on('open', () => {
    conn.on('data', (data) => console.log('Received data: ' + data))
    conn.on('error', (err) => console.error(err))
    conn.send('Hello Zach, I am Philipp.')
})
const sendMsgBtn = document.querySelector('.btn')
sendMsgBtn.addEventListener('click', () => {
    conn.send("ITS ME PHILIPP")
    conn.on('error', (err) => console.error(err))
})

//Video Streams
const videoStreamBtn = document.querySelector('.video-stream-btn')
const closeStreamBtn = document.querySelector('.close-stream-btn')
let mediaConnection;
videoStreamBtn.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            mediaConnection = confirm('call Zach?') ? peer1.call('Zach', stream) : null;
            console.log(mediaConnection)
            const videoEl = document.getElementById('video')
            videoEl.srcObject = stream
            videoEl.play()
        })
        .catch(err => console.error(err))
})

closeStreamBtn.addEventListener('click', async () => {
    if (mediaConnection) {
        await mediaConnection.close()
        console.log('Video ended')
    }
})




