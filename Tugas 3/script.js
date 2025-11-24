const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".content");

let currentSection = "home"; // default pertama
document.querySelector("#home").classList.add("active");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);

    if (targetId === currentSection) return; // kalau klik sama, abaikan

    const currentEl = document.getElementById(currentSection);
    const nextEl = document.getElementById(targetId);

    // reset posisi nextEl dulu
    nextEl.style.transition = "none";

    if (sectionsArrayIndex(targetId) > sectionsArrayIndex(currentSection)) {
      // masuk dari kanan
      nextEl.style.transform = "translateX(100%)";
    } else {
      // masuk dari kiri
      nextEl.style.transform = "translateX(-100%)";
    }

    nextEl.style.display = "block";

    // trigger animasi
    setTimeout(() => {
      nextEl.style.transition = "all 0.5s ease";
      currentEl.style.opacity = "0";
      currentEl.style.transform = (sectionsArrayIndex(targetId) > sectionsArrayIndex(currentSection)) 
        ? "translateX(-100%)" : "translateX(100%)";
      
      nextEl.classList.add("active");
      nextEl.style.opacity = "1";
      nextEl.style.transform = "translateX(0)";
    }, 20);

    // setelah animasi selesai, sembunyikan current
    setTimeout(() => {
      currentEl.classList.remove("active");
      currentEl.style.display = "none";
      currentEl.style.transform = "translateX(100%)";
      currentEl.style.opacity = "0";
    }, 500);

    currentSection = targetId;
  });
});

function sectionsArrayIndex(id) {
  return Array.from(sections).findIndex(sec => sec.id === id);
}
