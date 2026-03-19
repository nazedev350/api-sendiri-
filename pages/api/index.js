export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    message: 'Selamat datang di API!',
    version: '1.0.0',
    endpoints: [
      { method: 'GET', path: '/api/hello', desc: 'Sapa seseorang' },
      { method: 'GET', path: '/api/hitung', desc: 'Kalkulator sederhana' },
      { method: 'GET', path: '/api/waktu', desc: 'Waktu saat ini' },
    ],
  });
}
