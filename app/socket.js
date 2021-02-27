import { io } from "socket.io-client";

// window.location describes the URL of the page we're on!
const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
})

export default socket