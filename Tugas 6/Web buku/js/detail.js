// Data produk sederhana
const products = {
  aldebaran: {
    title: "Aldebaran",
    price: "Rp.95.700",
    img: "asset/Aldebaran.jpg",
    desc: " Aldebaran adalah novel fiksi petualangan yang menjadi bagian dari seri Bumi. Ceritanya mengikuti perjalanan Aldebaran (Ali), seorang anak dengan kemampuan istimewa, yang berjuang menemukan jati diri sekaligus menghadapi konflik besar di dunia paralel. Novel ini penuh dengan aksi, persahabatan, dan rahasia yang membuka sisi lain dari semesta Bumi",
  },
  theuntold: {
    title: "The Untold Islamic History",
    price: "Rp.117.999",
    img: "Asset/The Untold.jpg",
    desc: "Buku pengetahuan dengan informasi menarik yang jarang diungkap.",
  },
  kisahnabi: {
    title: "Belajar Akhlaq 25 Nabi&Rasul",
    price: "Rp.57.999",
    img: "Asset/Kisah Nabi.jpg",
    desc: "Buku edukatif berisi kisah nabi untuk anak-anak.",
  },
  howto: {
    title: "How To Win Friends & Influence People",
    price: "Rp.120.900",
    img: "Asset/How to.jpg",
    desc: "Panduan praktis untuk mengembangkan diri dan keterampilan.",
  },
  think: {
    title: "Think and Grow Rich",
    price: "Rp.117.999",
    img: "Asset/Think.jpg",
    desc: "Buku yang membantu mengasah pola pikir kreatif dan kritis.",
  },
  thenext: {
    title: "The Next Steve Jobs 15 Anak Genius di Bidang TI",
    price: "Rp.57.999",
    img: "Asset/The next.jpg",
    desc: "Buku motivasi untuk membangkitkan semangat hidup.",
  },
  talimmutaalim: {
    title: "Adab Sebelum Ilmu - Ta'lim Muta'alim",
    price: "Rp.35.999",
    img: "Asset/Ta'lim muta'alim.jpg",
    desc: "Kitab klasik tentang adab menuntut ilmu.",
  },
  atomic: {
    title: "Self Improvement - Atomic Habits",
    price: "Rp.117.999",
    img: "Asset/Atomic.jpg",
    desc: "Buku best seller tentang membangun kebiasaan kecil yang berdampak besar.",
  },
};

// Ambil ID produk dari URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const detailContainer = document.getElementById("product-detail");

if (id && products[id]) {
  const p = products[id];
  detailContainer.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <h2>${p.title}</h2>
        <p><strong>Harga:</strong> ${p.price}</p>
        <p>${p.desc}</p>
        <a href="checkout.html?id=${id}" class="btn">Beli Sekarang</a>
      `;
} else {
  detailContainer.innerHTML = "<h2>Produk sedang diproses.</h2>";
}
