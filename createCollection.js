//koneksi mongodb
const db = connect('mongodb://localhost/perpus');
// command list
//membuat database
//use perpustakaan

//drop database
db.dropDatabase();
//drop collection
db.peminjaman.drop()
// Membuat Collection customers
db.createCollection('peminjaman');

// Membuat Collection products
db.createCollection('pengembalian');

// Membuat Collection orders
db.createCollection('denda');