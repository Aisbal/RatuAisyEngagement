document.getElementById("open-btn").addEventListener("click", function () {
  const opening = document.getElementById("opening-screen");
  const invitation = document.getElementById("invitation-container");

  // Sembunyikan layar pembuka dengan transisi
  opening.style.opacity = 0;
  setTimeout(() => {
    opening.style.display = "none";
    invitation.classList.remove("hidden");
  }, 1000); // sama dengan durasi transisi CSS
});

// Ambil query param dari URL
const urlParams = new URLSearchParams(window.location.search);
const guestName = urlParams.get("to");

// Tampilkan nama kalau ada
if (guestName) {
  const guestNameElement = document.getElementById("guestName");
  guestNameElement.innerHTML = `Kepada Yth. Bapak/Ibu/Saudara/i ${decodeURIComponent(
    guestName.replace(/\+/g, " ")
  )}`;
}

const countdownElement = document.getElementById("countdown");
const targetDate = new Date("2025-09-07T10:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdownElement.innerHTML = "Acara telah dimulai!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const bgMusic = document.getElementById("bgMusic");
const bukaBtn = document.getElementById("open-btn");

bukaBtn.addEventListener("click", () => {
  bgMusic.play().catch((e) => {
    console.log("Autoplay gagal: ", e);
  });
});
