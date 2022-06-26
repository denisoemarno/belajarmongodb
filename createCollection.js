//koneksi mongodb
const db = connect('mongodb://localhost/perpus')
db.dropDatabase()
// Membuat Collection customers
db.createCollection('peminjaman');

// Membuat Collection products
db.createCollection('pengembalian');

// Membuat Collection orders
db.createCollection('denda');