import Peer from "peerjs";
const peer1 = new Peer("Philipp", {
    host: "localhost",
    port: 9000,
    path: "/",
})
const sendMsgBtn = document.querySelector('.btn')

//Peer
// 'open' = when connection to PeerServer is established
peer1.on('open', (id) => console.log(`${id} connected to PeerServer`))

// 'connection'= when connection from a remote Peer is established
peer1.on('connection', (dataConnection) => {
    console.log('[log]: ' + dataConnection.peer + " connected")
    dataConnection.on('close', () => console.log(`%c[connection]: connection closed for ${dataConnection.peer}`, 'color:red;'))
    dataConnection.on('data', data => console.log(`[message from ${dataConnection.peer}]: ${data}`))

    dataConnection.on('open', () => {
        console.log(`%c[connection]: connection ready for ${dataConnection.peer}`, 'color:#35ce35;')
        //DataConnection (receiving messages)
        const conn = peer1.connect('Zach')
        conn.on('open', () => {
            console.log(`%c[connection]: connection with ${conn.peer} established`, 'color:#35ce35;')
        })
        conn.on('close', () => {
            console.log(`%c[connection]: connection with ${conn.peer} lost`, 'color:red;')
        })

        conn.on('data', data => console.log(`[message from ${conn.peer}]: ${data}`))

    })

    sendMsgBtn.addEventListener('click', () => {
        dataConnection.send("ITS ME PHILIPP")
    })
})

peer1.on("error", (error) => {
    console.error(error)
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




