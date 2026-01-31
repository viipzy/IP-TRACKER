
const apiKey = "";

const ipEl = document.getElementById("ip");
const locationEl = document.getElementById("location");
const timezoneEl = document.getElementById("timezone");
const ispEl = document.getElementById("isp");
const form = document.getElementById("searchField");
const input = document.getElementById("search");

async function getIPData(query = "") {
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${query}&domain=${query}`,
  );

  const data = await res.json();

  const { ip, isp, location } = data;
  const { lat, lng, city, country, timezone } = location;

  ipEl.textContent = ip;
  locationEl.textContent = `${city}, ${country}`;
  timezoneEl.textContent = `UTC ${timezone}`;
  ispEl.textContent = isp;

  map.setView([lat, lng], 13);

  if (marker) map.removeLayer(marker);

  marker = L.marker([lat, lng]).addTo(map);
}

getIPData();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getIPData(input.value);
});

let map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS popup.<br> Easily customizable.")
  .openPopup();

