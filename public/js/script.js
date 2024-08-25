const socket = io();

const userName = prompt("Please enter your name:");

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            socket.emit("send-location", { userName, latitude, longitude });
        },
        (error) => {
            console.error(error);
        },
        {
            maximumAge: 0,
            timeout: 3000,
            enableHighAccuracy: true,
        }
    );
}

const map = L.map("map").setView([0, 0], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Tracker",
}).addTo(map);

const markers = {};

socket.on("recieve-location", (data) => {
    const { id, userName, latitude, longitude } = data;
    map.setView([latitude, longitude], 16);

    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
        markers[id].bindTooltip(userName, { permanent: true, direction: "top" }).openTooltip();
    } else {
        markers[id] = L.marker([latitude, longitude])
            .addTo(map)
            .bindTooltip(userName, { permanent: true, direction: "top" })
            .openTooltip();
    }
});

socket.on("user-disconnect", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
