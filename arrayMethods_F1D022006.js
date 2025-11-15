const data = ["Ayu","Agna","Dira","Nadya","Dara","Imka","Zelena","Friesky","Azkiya","Wahyuni",];

// ubah semua jadi huruf besar
const map = data.map(data => data.toUpperCase());
console.log("Hasil map(): ", map);

// ambil nama yang panjangnya lebih dari 5 huruf
const filter = data.filter(data => data.length > 5);
console.log("Hasil filter(): ", filter);

// hitung total panjang semua nama
const reduce = data.reduce((total, data) => total + data.length, 0);
console.log("Hasil reduce(): ", reduce);

// cari nama yang dimulai huruf A
const find = data.find(data => data.startsWith("A"));
console.log("Hasil find(): ", find);

// cek apakah ada nama panjangnya > 10 huruf
const some = data.some(data => data.length > 10);
console.log("Hasil some(): ", some);

// cek apakah semua nama panjangnya > 3 huruf
const every = data.every(data => data.length > 3);
console.log("Hasil every(): ", every);