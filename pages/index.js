import Head from 'next/head';

const endpoints = [
  {
    method: 'GET',
    path: '/api',
    desc: 'Info & daftar semua endpoint',
    contoh: '/api',
  },
  {
    method: 'GET',
    path: '/api/hello',
    desc: 'Sapa seseorang berdasarkan nama',
    params: '?name=Yudzz',
    contoh: '/api/hello?name=Yudzz',
  },
  {
    method: 'GET',
    path: '/api/hitung',
    desc: 'Kalkulator: tambah, kurang, kali, bagi',
    params: '?a=10&b=5&op=tambah',
    contoh: '/api/hitung?a=10&b=5&op=tambah',
  },
  {
    method: 'GET',
    path: '/api/waktu',
    desc: 'Waktu sekarang (WIB, WITA, WIT)',
    contoh: '/api/waktu',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>My API Docs</title>
        <meta name="description" content="Dokumentasi API sederhana" />
      </Head>

      <main style={styles.main}>
        <div style={styles.hero}>
          <span style={styles.badge}>v1.0.0</span>
          <h1 style={styles.title}>⚡ My API</h1>
          <p style={styles.subtitle}>API sederhana siap pakai. Dibangun dengan Next.js & Vercel.</p>
        </div>

        <div style={styles.grid}>
          {endpoints.map((ep) => (
            <div key={ep.path} style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.method}>{ep.method}</span>
                <code style={styles.path}>{ep.path}</code>
              </div>
              <p style={styles.desc}>{ep.desc}</p>
              {ep.params && (
                <div style={styles.paramBox}>
                  <span style={styles.paramLabel}>Params:</span>
                  <code style={styles.paramCode}>{ep.params}</code>
                </div>
              )}
              <a href={ep.contoh} target="_blank" rel="noreferrer" style={styles.tryBtn}>
                Coba →
              </a>
            </div>
          ))}
        </div>

        <footer style={styles.footer}>
          Dibuat dengan Next.js · Deploy gratis di{' '}
          <a href="https://vercel.com" style={styles.link}>Vercel</a>
        </footer>
      </main>
    </>
  );
}

const styles = {
  main: {
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 24px',
    color: '#1a1a1a',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  badge: {
    background: '#e8f5e9',
    color: '#2e7d32',
    fontSize: '12px',
    fontWeight: '600',
    padding: '4px 10px',
    borderRadius: '20px',
    letterSpacing: '0.5px',
  },
  title: {
    fontSize: '48px',
    fontWeight: '700',
    margin: '16px 0 8px',
    letterSpacing: '-1px',
  },
  subtitle: {
    color: '#666',
    fontSize: '16px',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gap: '16px',
  },
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '20px 24px',
    background: '#fff',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
  },
  method: {
    background: '#dbeafe',
    color: '#1d4ed8',
    fontSize: '11px',
    fontWeight: '700',
    padding: '3px 8px',
    borderRadius: '6px',
    letterSpacing: '0.5px',
  },
  path: {
    fontSize: '15px',
    fontWeight: '600',
    fontFamily: 'monospace',
    color: '#111',
  },
  desc: {
    color: '#555',
    fontSize: '14px',
    margin: '0 0 12px',
  },
  paramBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: '#f8f9fa',
    borderRadius: '6px',
    padding: '8px 12px',
    marginBottom: '12px',
  },
  paramLabel: {
    fontSize: '12px',
    color: '#888',
    fontWeight: '500',
  },
  paramCode: {
    fontSize: '13px',
    fontFamily: 'monospace',
    color: '#d63384',
  },
  tryBtn: {
    display: 'inline-block',
    fontSize: '13px',
    fontWeight: '600',
    color: '#2563eb',
    textDecoration: 'none',
  },
  footer: {
    textAlign: 'center',
    marginTop: '60px',
    color: '#999',
    fontSize: '13px',
  },
  link: {
    color: '#2563eb',
  },
};
