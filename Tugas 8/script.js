function hitung() {
  let pilihan = document.getElementById('pilihan').value;
  let alas = parseFloat(document.getElementById('alas').value);
  let sisi = parseFloat(document.getElementById('sisi').value);
  let hasil = 0;
  let jenis = '';

  if (pilihan === "keliling") {
    hasil = 2 * (alas + sisi);
    jenis = "Keliling";
  } else {
    hasil = alas * sisi;
    jenis = "Luas";
  }

  let ukuran = '';
  if (hasil >= 500) {
    ukuran = "BESAR";
  } else if (hasil >= 100) {
    ukuran = "SEDANG";
  } else {
    ukuran = "KECIL";
  }

  document.getElementById('hasil').innerHTML =
    `${jenis} jajar genjang = <span style="color:green">${hasil}</span><br>Ukuran: <span style="color:blue">${ukuran}</span>`;
}
