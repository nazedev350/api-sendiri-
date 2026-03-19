export default function handler(req, res) {
  const { a, b, op } = req.query;

  if (!a || !b || !op) {
    return res.status(400).json({
      status: 'error',
      message: 'Parameter "a", "b", dan "op" wajib diisi',
      operasi_tersedia: ['tambah', 'kurang', 'kali', 'bagi'],
      contoh: '/api/hitung?a=10&b=5&op=tambah',
    });
  }

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ status: 'error', message: 'a dan b harus angka' });
  }

  const operasi = {
    tambah: numA + numB,
    kurang: numA - numB,
    kali: numA * numB,
    bagi: numB !== 0 ? numA / numB : null,
  };

  if (!(op in operasi)) {
    return res.status(400).json({
      status: 'error',
      message: `Operasi "${op}" tidak dikenal`,
      operasi_tersedia: Object.keys(operasi),
    });
  }

  if (op === 'bagi' && numB === 0) {
    return res.status(400).json({ status: 'error', message: 'Tidak bisa bagi dengan nol' });
  }

  res.status(200).json({
    status: 'ok',
    a: numA,
    b: numB,
    operasi: op,
    hasil: operasi[op],
  });
  }

