// data.js

var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta"
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar"
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat"
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP"
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat"
  }
];

var dataBahanAjar = [
  {
    kodeLokasi: "0TMP01",
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 548,
    cover: "img/pengantar_komunikasi.jpg"
  },
  {
    kodeLokasi: "0JKT01",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 392,
    cover: "img/manajemen_keuangan.jpg"
  },
  {
    kodeLokasi: "0SBY02",
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 278,
    cover: "img/kepemimpinan.jpg"
  },
  {
    kodeLokasi: "DERS34",
    kodeBarang: "BIOL4223",
    namaBarang: "Mikrobiologi",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 143,
    cover: "img/mikrobiologi.jpg"
  },
  {
    kodeLokasi: "RETF12",
    kodeBarang: "PAUD4306",
    namaBarang: "Perkembangan Konsep Dasar Perkembangan Anak",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 245,
    cover: "img/paud_perkembangan.jpg"
  },
];
var dataTracking = {
  "2023001234": {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan: [
      "Barang dikemas di gudang Jakarta (25 Agustus 2025)",
      "Dikirim ke ekspedisi JNE (26 Agustus 2025)",
      "Dalam perjalanan ke tujuan (27 Agustus 2025)"
    ]
  },
  "2023001235": {
    nomorDO: "2023001235",
    nama: "Agus Pranoto",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-09-25",
    paket: "0SBY02",
    total: "Rp 130.000",
    perjalanan: [
      "Barang dikemas di gudang Jakarta (25 September 2025)",
      "Dikirim ke ekspedisi JNE (26 September 2025)",
      "Dalam perjalanan ke tujuan (27 September 2025)"
    ]
  },
};
