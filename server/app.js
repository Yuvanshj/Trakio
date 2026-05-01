const express = require("express")
const app = express()

const path = require("path")
const http = require("http")

const port = process.env.PORT || 4000

const socketio = require("socket.io")
const server = http.createServer(app)
const io = socketio(server)

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

io.on("connection", (socket)=>{
    console.log("User connected", socket.id)
    socket.on("sendLocation", (data)=>{
        io.emit("recieveLocation", {id: socket.id, ...data})
    })

    socket.on("disconnect", ()=>{
        console.log("User disconnected", socket.id)
        io.emit("userDisconnected", socket.id)
    })

})

app.get("/", (req, res)=>{
    res.render("index")
})

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})