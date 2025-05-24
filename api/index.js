export default function handler(req, res) {
  const { id } = req.query;
  if (!id) return res.status(400).send("Missing ID");

  const target = `http://amit-1.allinonereborn.in/tplaydrm/manifest.mpd?id=${id}`;
  res.writeHead(302, { Location: target });
  res.end();
}
