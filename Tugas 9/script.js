// Fungsi untuk show / hide section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

// ========== SEGITIGA ==========
function hitungSegitiga() {
    const a = parseFloat(document.getElementById('alas').value);
    const t = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(a) || isNaN(t)) {
        document.getElementById('hasilSegitiga').innerText = "Masukkan nilai yang valid!";
        return;
    }

    const luas = 0.5 * a * t;
    document.getElementById('hasilSegitiga').innerText = `Luas Segitiga: ${luas}`;
}

function hitungKelilingSegitiga() {
    const A = parseFloat(document.getElementById('sisiA').value);
    const B = parseFloat(document.getElementById('sisiB').value);
    const C = parseFloat(document.getElementById('sisiC').value);

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        document.getElementById('hasilKelilingSegitiga').innerText = "Masukkan nilai sisi yang valid!";
        return;
    }

    const kel = A + B + C;
    document.getElementById('hasilKelilingSegitiga').innerText = `Keliling Segitiga: ${kel}`;
}

// ========== LINGKARAN ==========
function hitungLingkaran() {
    const r = parseFloat(document.getElementById('jariLuas').value);

    if (isNaN(r)) {
        document.getElementById('hasilLingkaran').innerText = "Masukkan jari-jari!";
        return;
    }

    const luas = Math.PI * r * r;
    document.getElementById('hasilLingkaran').innerText = `Luas Lingkaran: ${luas.toFixed(2)}`;
}

function hitungKelilingLingkaran() {
    const r = parseFloat(document.getElementById('jariKeliling').value);

    if (isNaN(r)) {
        document.getElementById('hasilKelilingLingkaran').innerText = "Masukkan jari-jari!";
        return;
    }

    const kel = 2 * Math.PI * r;
    document.getElementById('hasilKelilingLingkaran').innerText = `Keliling Lingkaran: ${kel.toFixed(2)}`;
}

// ========== PERSEGI ==========
function hitungPersegi() {
    const s = parseFloat(document.getElementById('sisi').value);

    if (isNaN(s)) {
        document.getElementById('hasilPersegi').innerText = "Masukkan sisi!";
        return;
    }

    const luas = s * s;
    document.getElementById('hasilPersegi').innerText = `Luas Persegi: ${luas}`;
}

function hitungKelilingPersegi() {
    const s = parseFloat(document.getElementById('sisi').value);

    if (isNaN(s)) {
        document.getElementById('hasilKelilingPersegi').innerText = "Masukkan sisi!";
        return;
    }

    const kel = 4 * s;
    document.getElementById('hasilKelilingPersegi').innerText = `Keliling Persegi: ${kel}`;
}

// ========== JAJAR GENJANG ==========
function hitungJG() {
    const a = parseFloat(document.getElementById('alasjg').value);
    const t = parseFloat(document.getElementById('tinggijg').value);

    if (isNaN(a) || isNaN(t)) {
        document.getElementById('hasilJG').innerText = "Masukkan nilai yang valid!";
        return;
    }

    const luas = a * t;
    document.getElementById('hasilJG').innerText = `Luas Jajar Genjang: ${luas}`;
}

function hitungKelilingJG() {
    const a = parseFloat(document.getElementById('alasjg').value);
    const b = parseFloat(document.getElementById('sisimiring').value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById('hasilKelilingJG').innerText = "Masukkan nilai!";
        return;
    }

    const kel = 2 * (a + b);
    document.getElementById('hasilKelilingJG').innerText = `Keliling Jajar Genjang: ${kel}`;
}

// ========== KUBUS ==========
function hitungKubus() {
    const s = parseFloat(document.getElementById('sisikubus').value);

    if (isNaN(s)) {
        document.getElementById('hasilKubus').innerText = "Masukkan sisi kubus!";
        return;
    }

    const vol = s ** 3;
    document.getElementById('hasilKubus').innerText = `Volume Kubus: ${vol}`;
}

// ========== BALOK ==========
function hitungBalok() {
    const p = parseFloat(document.getElementById('p').value);
    const l = parseFloat(document.getElementById('l').value);
    const t = parseFloat(document.getElementById('t').value);

    if (isNaN(p) || isNaN(l) || isNaN(t)) {
        document.getElementById('hasilBalok').innerText = "Masukkan nilai!";
        return;
    }

    const vol = p * l * t;
    document.getElementById('hasilBalok').innerText = `Volume Balok: ${vol}`;
}

// ========== TABUNG ==========
function hitungTabung() {
    const r = parseFloat(document.getElementById('rTabung').value);
    const t = parseFloat(document.getElementById('tTabung').value);

    if (isNaN(r) || isNaN(t)) {
        document.getElementById('hasilTabung').innerText = "Masukkan nilai!";
        return;
    }

    const vol = Math.PI * r * r * t;
    document.getElementById('hasilTabung').innerText = `Volume Tabung: ${vol.toFixed(2)}`;
}

// ========== KERUCUT ==========
function hitungKerucut() {
    const r = parseFloat(document.getElementById('rKerucut').value);
    const t = parseFloat(document.getElementById('tKerucut').value);

    if (isNaN(r) || isNaN(t)) {
        document.getElementById('hasilKerucut').innerText = "Masukkan nilai!";
        return;
    }

    const vol = (1/3) * Math.PI * r * r * t;
    document.getElementById('hasilKerucut').innerText = `Volume Kerucut: ${vol.toFixed(2)}`;
}

// ========== BOLA ==========
function hitungBola() {
    const r = parseFloat(document.getElementById('rBola').value);

    if (isNaN(r)) {
        document.getElementById('hasilBola').innerText = "Masukkan jari-jari!";
        return;
    }

    const vol = (4/3) * Math.PI * Math.pow(r, 3);
    document.getElementById('hasilBola').innerText = `Volume Bola: ${vol.toFixed(2)}`;
}

// ========== PRISMA ==========
function hitungPrisma() {
    const luas = parseFloat(document.getElementById("luasAlasPrisma").value) || 0;
    const tinggi = parseFloat(document.getElementById("tinggiPrisma").value) || 0;

    const hasil = luas * tinggi;
    document.getElementById("hasilPrisma").innerText = "Volume Prisma: " + hasil;
}

// ========== LIMAS ==========
function hitungLimas() {
    const luas = parseFloat(document.getElementById("luasAlasLimas").value) || 0;
    const tinggi = parseFloat(document.getElementById("tinggiLimas").value) || 0;

    const hasil = (1/3) * luas * tinggi;
    document.getElementById("hasilLimas").innerText = "Volume Limas: " + hasil;
}
