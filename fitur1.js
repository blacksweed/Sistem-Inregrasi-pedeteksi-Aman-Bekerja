// fitur1.js

// Fungsi untuk mengecek status atribut dan menampilkan notifikasi sederhana
document.addEventListener("DOMContentLoaded", function () {
    const helmStatus = document.getElementById("helm-status");
    const sepatuStatus = document.getElementById("sepatu-status");
  
    const helmDetected = false;  // Ganti sesuai sensor/AI, disimulasikan saja
    const sepatuDetected = true;
  
    if (helmDetected) {
      helmStatus.textContent = "Helm Terdeteksi";
      helmStatus.classList.add("hijau");
    } else {
      helmStatus.textContent = "Tidak Pakai Helm";
      helmStatus.classList.add("merah");
    }
  
    if (sepatuDetected) {
      sepatuStatus.textContent = "Sepatu Safety Terdeteksi";
      sepatuStatus.classList.add("hijau");
    } else {
      sepatuStatus.textContent = "Sepatu Tidak Terdeteksi";
      sepatuStatus.classList.add("merah");
    }
  });
  