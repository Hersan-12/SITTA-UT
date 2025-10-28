// theme.js — 1 tombol klik langsung ubah total terang <-> gelap
(function(){
  const toggleId = 'themeToggle';

  // Ambil tema tersimpan (default: light)
  let saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  document.body.classList.add(saved + "-mode"); // ⬅️ Tambahan penting

  // Fungsi untuk ganti tema
  function switchTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    // 🔥 Tambahan: update class di body agar CSS watermark bisa ikut berubah
    document.body.classList.remove(current + "-mode");
    document.body.classList.add(next + "-mode");

    updateButton(next);
  }

  // Update ikon tombol
  function updateButton(theme){
    const toggle = document.getElementById(toggleId);
    if (!toggle) return;
    toggle.textContent = theme === 'dark' ? '🌙' : '🌞';
  }

  // Jalankan setelah halaman selesai dimuat
  window.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById(toggleId);

    // Kalau belum ada tombol, buat otomatis di pojok kanan bawah
    if (!toggle) {
      const btn = document.createElement('button');
      btn.id = toggleId;
      btn.textContent = saved === 'dark' ? '🌙' : '🌞';
      btn.style.position = 'fixed';
      btn.style.bottom = '12px';
      btn.style.right = '12px';
      btn.style.fontSize = '20px';
      btn.style.border = 'none';
      btn.style.background = 'var(--accent)';
      btn.style.color = '#fff';
      btn.style.borderRadius = '50%';
      btn.style.width = '44px';
      btn.style.height = '44px';
      btn.style.cursor = 'pointer';
      btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.25)';
      btn.style.transition = 'transform 0.2s ease';
      btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.1)');
      btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
      document.body.appendChild(btn);

      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        switchTheme();
      });
    } else {
      updateButton(saved);
      toggle.addEventListener('click', (e)=>{
        e.stopPropagation();
        switchTheme();
      });
    }
  });
})();
