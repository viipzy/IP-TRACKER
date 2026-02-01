let map = L.map("map").setView([51.505, -0.09], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let marker = L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("This is the default location")
  .openPopup();

let circle = L.circle([51.508, -0.11], {
  color: "black",
  fillColor: "rgb(8, 8, 8)",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

let popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);


const apiKey = "";

const ipEl = document.getElementById("ip");
const locationEl = document.getElementById("location");
const timezoneEl = document.getElementById("timezone");
const ispEl = document.getElementById("isp");
const form = document.getElementById("searchField");
const input = document.getElementById("search");

async function getIPData(query = "") {
  let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

  if (query) {
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(query)) {
      url += `&ipAddress=${query}`; 
    } else {
      url += `&domain=${query}`; 
    }
  }

  const res = await fetch(`/api/ip?query=${query}`);

  if (!res.ok) {
    console.error("API error:", await res.text());
    return;
  }

  const data = await res.json();

  const { ip, isp, location } = data;
  const { lat, lng, city, country, timezone } = location;

  ipEl.textContent = ip;
  locationEl.textContent = `${city}, ${country}`;
  timezoneEl.textContent = `UTC ${timezone}`;
  ispEl.textContent = isp;

  map.setView([lat, lng], 13);

  map.removeLayer(marker);
  marker = L.marker([lat, lng]).addTo(map);
}

console.log("Fetching IP data...");
getIPData();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getIPData(input.value.trim());
});
