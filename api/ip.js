/* export default async function handler(req, res) {
  const query = req.query.query || "";

  let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_KEY}`;

  if (query) {
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(query)) {
      url += `&ipAddress=${query}`;
    } else {
      url += `&domain=${query}`;
    }
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}
 */

export default async function handler(req, res) {
  const query = req.query.query || "";


  const clientIP =
    req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;

  let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_KEY}`;

  if (query) {
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(query)) {
      url += `&ipAddress=${query}`;
    } else {
      url += `&domain=${query}`;
    }
  } else {
    url += `&ipAddress=${clientIP}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json(data);
}
  