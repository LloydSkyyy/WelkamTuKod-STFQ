// Ganti halaman
function switchPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

// Fungsi bintang statis
function generateStars(containerId, jumlah) {
  const starsContainer = document.getElementById(containerId);
  for (let i = 0; i < jumlah; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random() * 3 + 1; 
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    starsContainer.appendChild(star);
  }
}

// Fungsi bintang jatuh
function createShootingStar(containerId) {
  const starsContainer = document.getElementById(containerId);
  let shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");
  shootingStar.style.top = Math.random() * 50 + "%";
  shootingStar.style.left = Math.random() * 100 + "%";
  starsContainer.appendChild(shootingStar);

  setTimeout(() => shootingStar.remove(), 1200);
}

// Loop bintang jatuh (rame tapi tenang)
function balancedShootingStars(containerId) {
  setInterval(() => {
    let jumlah = Math.floor(Math.random() * 2) + 1;
    for (let i = 0; i < jumlah; i++) {
      setTimeout(() => createShootingStar(containerId), i * 300);
    }
  }, Math.random() * 600 + 700);
}

// Bikin bintang statis
generateStars("stars-home", 100);
generateStars("stars-profile", 100);

// Bikin bintang jatuh
balancedShootingStars("stars-home");
balancedShootingStars("stars-profile");


// ---------------------- Update jam & tanggal ----------------------
function updateJam() {
  const now = new Date();
  document.getElementById("jam-digital").textContent =
    now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  document.getElementById("tanggal-masehi").textContent =
    now.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  document.getElementById("tanggal-hijriah").textContent =
    now.toLocaleDateString("ar-SA-u-ca-islamic", { day: "numeric", month: "long", year: "numeric" });
}

// ---------------------- Ambil jadwal sholat ----------------------
async function getPrayerTimes() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  try {
    const res = await fetch(
      `https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=Bandung&country=Indonesia&method=2`
    );
    const data = await res.json();
    const timings = data.data[day - 1].timings;

    const jadwal = `
      <ul style="list-style:none; padding:0; margin:0;">
        <li>🌅 Subuh : ${timings.Fajr}</li>
        <li>☀️ Dzuhur : ${timings.Dhuhr}</li>
        <li>🌤 Ashar : ${timings.Asr}</li>
        <li>🌇 Maghrib : ${timings.Maghrib}</li>
        <li>🌙 Isya : ${timings.Isha}</li>
      </ul>
      <p id="countdown"></p>
    `;
    document.getElementById("prayer-times").innerHTML = jadwal;

    startCountdown(timings);
  } catch (error) {
    document.getElementById("prayer-times").textContent = "Gagal ambil jadwal";
  }
}

// ---------------------- Helper: bersihin string WIB ----------------------
function cleanTime(str) {
  return String(str).replace(/\(.*?\)/g, "").trim();
}

// ---------------------- Countdown + auto refresh harian ----------------------
let currentDate = new Date().getDate();

function startCountdown(timings) {
  function updateCountdown() {
    const now = new Date();

    // cek kalau sudah ganti hari → refresh jadwal
    if (now.getDate() !== currentDate) {
      currentDate = now.getDate();
      getPrayerTimes();
      return;
    }

    // parsing waktu sholat
    const sholatList = [
      { name: "Subuh", time: timings.Fajr },
      { name: "Dzuhur", time: timings.Dhuhr },
      { name: "Ashar", time: timings.Asr },
      { name: "Maghrib", time: timings.Maghrib },
      { name: "Isya", time: timings.Isha },
    ];

    let nextSholat = null;
    let nextTime = null;

    for (let s of sholatList) {
      const [h, m] = cleanTime(s.time).split(":").map(Number);
      if (isNaN(h) || isNaN(m)) continue;
      const t = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
      if (t > now) {
        nextSholat = s.name;
        nextTime = t;
        break;
      }
    }

    // kalau semua sudah lewat → ambil Subuh besok
    if (!nextSholat) {
      const [h, m] = cleanTime(timings.Fajr).split(":").map(Number);
      nextSholat = "Subuh";
      nextTime = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, h, m);
    }

    const selisih = nextTime - now;

    if (selisih <= 0) {
      document.getElementById("countdown").textContent = `Waktunya ${nextSholat}!`;
      return;
    }

    const jam = Math.floor(selisih / (1000 * 60 * 60));
    const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((selisih % (1000 * 60)) / 1000);

    document.getElementById("countdown").textContent =
      `⏳ ${nextSholat} ${jam} jam ${menit} menit ${detik} detik lagi`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ---------------------- Init ----------------------
setInterval(updateJam, 1000);
updateJam();
getPrayerTimes();
