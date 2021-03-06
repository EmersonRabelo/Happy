 const mymap = L.map('mapid').setView([-27.2124952,-49.6412388], 15);

     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
         .addTo(mymap);


     const icon = L.icon({
         iconUrl: "./images/map-marker.svg",
         iconSize: [58, 68],
         iconAnchor: [29, 68],
         popupAnchor: [170,2]
     })

    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent('Lar das meninas <a href="orphanages.html?id=1" ' +
        'class="choose-orphanage"> <img src="./images/arrow-white.svg" > ' +
        '</a>')


     L.marker([-27.2124952,-49.6412388], { icon })
     .addTo(mymap)
     .bindPopup(popup)
