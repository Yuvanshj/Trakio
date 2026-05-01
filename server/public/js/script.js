const socket = io()

if(navigator.geolocation){
    navigator.geolocation.watchPosition(position=>{
        const {latitude, longitude} = position.coords
        socket.emit("sendLocation", {latitude, longitude})
    }, (error)=>{
        console.log(error)
        socket.emit("sendLocation", {latitude: 19.075984, longitude: 72.877656})
      },
      {enableHighAccuracy:false,
        timeout: 10000,
        maximumAge:0
      }
    
    )
}

const map = L.map("map").setView([0,0], 10)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

const markers = {};

socket.on("recieveLocation", (data)=>{
    const {id, latitude, longitude} = data;
    map.setView([latitude, longitude], 16);
    
    if(markers[id]){
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
})

socket.on("userDisconnected", (id)=>{
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})