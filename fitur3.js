// fitur3.js
document.addEventListener("DOMContentLoaded", function () {
    const emergencyButton = document.getElementById("emergency-button");
    const notification = document.getElementById("notification");
  
    emergencyButton.addEventListener("click", function () {
      // Simulasi pengiriman peringatan
      notification.classList.remove("hidden");
  
      // Efek tombol disable agar tidak ditekan berulang-ulang
      emergencyButton.disabled = true;
      emergencyButton.textContent = "Tombol Darurat Diaktifkan";
  
      // Opsi: animasi ringan
      notification.style.animation = "shake 0.5s ease";
  
      // Reset animasi (opsional)
      setTimeout(() => {
        notification.style.animation = "";
      }, 500);
    });
  });
  