const { PeerServer } = require('peer')
const port = 9000

const peerServer = PeerServer({ port: port, path: "/" }, () => {
    console.log(`Peer server listening at ${port}`)
})