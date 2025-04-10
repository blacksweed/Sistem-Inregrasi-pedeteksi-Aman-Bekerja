document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
  
    startButton.addEventListener("click", function () {
      // Pastikan file dashboard.html benar-benar ada di folder yang sama
      window.location.href = "dashboard.html";
    });
  });
  