# ⚡ My API

API sederhana dengan Next.js, siap deploy ke Vercel.

## Endpoint

| Method | Path | Deskripsi |
|--------|------|-----------|
| GET | `/api` | Info & daftar endpoint |
| GET | `/api/hello?name=X` | Sapa seseorang |
| GET | `/api/hitung?a=10&b=5&op=tambah` | Kalkulator |
| GET | `/api/waktu` | Waktu sekarang (WIB/WITA/WIT) |

## Cara Menjalankan Lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Deploy ke Vercel

1. Push ke GitHub
2. Buka https://vercel.com → New Project
3. Import repo ini → klik Deploy
4. Selesai! Domain otomatis: `nama-project.vercel.app`

## Contoh Response

### GET /api/hello?name=Yudzz
```json
{
  "status": "ok",
  "message": "Halo, Yudzz! 👋",
  "name": "Yudzz",
  "waktu": "19/3/2026, 15.00.00"
}
```

### GET /api/hitung?a=10&b=3&op=kali
```json
{
  "status": "ok",
  "a": 10,
  "b": 3,
  "operasi": "kali",
  "hasil": 30
}
```

### GET /api/waktu
```json
{
  "status": "ok",
  "iso": "2026-03-19T08:00:00.000Z",
  "wib": "19/3/2026, 15.00.00",
  "wita": "19/3/2026, 16.00.00",
  "wit": "19/3/2026, 17.00.00",
  "unix": 1742371200
}
```
