function updateStatus() {
  fetch("status.json?_=" + Date.now()) // _= pour éviter le cache
    .then(res => res.json())
    .then(data => {
      const statusEl = document.getElementById("status");
      if (data.online) {
        statusEl.textContent = "🟢 Bot en ligne";
        statusEl.className = "online";
      } else {
        statusEl.textContent = "🔴 Bot hors ligne";
        statusEl.className = "offline";
      }
    })
    .catch(() => {
      const statusEl = document.getElementById("status");
      statusEl.textContent = "⚠️ Erreur de lecture";
      statusEl.className = "offline";
    });
}

// Rafraîchit toutes les 10 secondes
updateStatus();
setInterval(updateStatus, 10000);
