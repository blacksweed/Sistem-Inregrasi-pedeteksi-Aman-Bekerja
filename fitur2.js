// fitur2.js

document.addEventListener("DOMContentLoaded", () => {
    const suhuElem = document.getElementById("suhu-status");
    const cuacaElem = document.getElementById("cuaca-status");
    const kimiaElem = document.getElementById("kimia-status");
  
    // Dapatkan lokasi pengguna
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
  
          // Ambil data cuaca dari Open-Meteo (tanpa API key)
          fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
            .then(response => response.json())
            .then(data => {
              const suhu = data.current_weather.temperature;
              const angin = data.current_weather.windspeed;
              const kondisiCuaca = data.current_weather.weathercode;
  
              // Evaluasi suhu
              if (suhu >= 38) {
                suhuElem.textContent = `🔥 Suhu Terlalu Tinggi: ${suhu}°C – Risiko Heat Stroke`;
                suhuElem.style.color = "red";
              } else if (suhu >= 33) {
                suhuElem.textContent = `⚠️ Suhu Panas: ${suhu}°C – Perlu istirahat sering`;
                suhuElem.style.color = "orange";
              } else {
                suhuElem.textContent = `✅ Suhu Aman: ${suhu}°C`;
                suhuElem.style.color = "green";
              }
  
              // Evaluasi cuaca (dengan kondisi kode cuaca Open-Meteo)
              let cuacaText = "";
              if (angin >= 40) {
                cuacaText += "🌬️ Angin Kencang – Hentikan Aktivitas Berat. ";
                cuacaElem.style.color = "orange";
              }
              if ([95, 96, 99].includes(kondisiCuaca)) {
                cuacaText += "⚡ Bahaya Petir – Segera Evakuasi! ";
                cuacaElem.style.color = "red";
              } else if ([61, 63, 65, 80, 81, 82].includes(kondisiCuaca)) {
                cuacaText += "🌧️ Peringatan Hujan Lebat – Hentikan Aktivitas Lapangan. ";
                cuacaElem.style.color = "orange";
              }
              if (cuacaText === "") {
                cuacaText = "✅ Cuaca Aman untuk Bekerja";
                cuacaElem.style.color = "green";
              }
              cuacaElem.textContent = cuacaText;
            })
            .catch(error => {
              suhuElem.textContent = "Gagal mengambil data cuaca.";
              suhuElem.style.color = "gray";
              cuacaElem.textContent = "";
            });
        },
        error => {
          suhuElem.textContent = "Izin lokasi ditolak atau gagal didapatkan.";
          suhuElem.style.color = "gray";
          cuacaElem.textContent = "";
        }
      );
    } else {
      suhuElem.textContent = "Geolocation tidak didukung.";
      suhuElem.style.color = "gray";
      cuacaElem.textContent = "";
    }
  
    // Simulasi data kimia (karena tidak bisa didapat dari cuaca API)
    const co = 58;
    const h2s = 25;
    const nh3 = 10;
  
    if (co > 50 || h2s > 20 || nh3 > 35) {
      kimiaElem.textContent = `☣️ Paparan Berbahaya! CO: ${co}ppm, H₂S: ${h2s}ppm, NH₃: ${nh3}ppm`;
      kimiaElem.style.color = "red";
    } else {
      kimiaElem.textContent = `✅ Paparan Aman. CO: ${co}ppm, H₂S: ${h2s}ppm, NH₃: ${nh3}ppm`;
      kimiaElem.style.color = "green";
    }
  });
  