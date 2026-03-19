export default function handler(req, res) {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({
      status: 'error',
      message: 'Parameter "name" wajib diisi',
      contoh: '/api/hello?name=Yudzz',
    });
  }

  res.status(200).json({
    status: 'ok',
    message: `Halo, ${name}! 👋`,
    name,
    waktu: new Date().toLocaleString('id-ID'),
  });
}

