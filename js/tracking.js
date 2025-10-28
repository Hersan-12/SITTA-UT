// tracking.js 
(function(){
  const select = document.getElementById('selectNoDO');
  const input = document.getElementById('inputNoDO');
  const btn = document.getElementById('btnCari');
  const out = document.getElementById('trackingResult');

  // 1. Isi dropdown otomatis
  Object.keys(dataTracking).forEach(no => {
    const opt = document.createElement('option');
    opt.value = no;
    opt.textContent = no;
    select.appendChild(opt);
  });

  //2. Ubah mode: dropdown atau input manual 
  select.addEventListener('change', ()=>{
    if(select.value === 'manual'){
      input.style.display = 'block';
      input.focus();
    } else {
      input.style.display = 'none';
    }
  });

  // 3. Warna status otomatis 
  function statusColor(status) {
    const s = status.toLowerCase();
    if (s.includes("selesai") || s.includes("diterima")) return "#16a34a"; // hijau
    if (s.includes("tunda") || s.includes("pending")) return "#dc2626";  // merah
    if (s.includes("jalan") || s.includes("perjalanan")) return "#ea580c"; // oranye
    return "#1e40af"; // default biru
  }

  // === 4. Fungsi render hasil ===
  function render(track){
  if(!track) {
    return `
      <div class="card feedback">
        Nomor DO tidak ditemukan. Pastikan Anda mengetik dengan benar.
      </div>
    `;
  }

  const stok = dataBahanAjar.find(b => b.kodeLokasi === track.paket);
  const color = statusColor(track.status);

  let html = `
    <div class="card" style="animation:fadeIn 0.3s;">
      <h4>📦 Nomor DO: ${track.nomorDO}</h4>
      <p><strong>Nama Penerima:</strong> ${track.nama}</p>
      <p><strong>Status:</strong> 
        <span style="
          color:#fff;
          background:${color};
          padding:4px 10px;
          border-radius:8px;
          font-weight:500;
        ">${track.status}</span></p>
      <p><strong>Ekspedisi:</strong> ${track.ekspedisi} &nbsp;|&nbsp; 
         <strong>Tanggal Kirim:</strong> ${track.tanggalKirim}</p>
      <p><strong>Kode Paket:</strong> ${track.paket} &nbsp;|&nbsp; 
         <strong>Total:</strong> ${track.total}</p>
  `;

  // tampilkan cover buku jika ada
  if(stok && stok.cover){
    html += `
      <div style="margin-top:12px;">
        <img src="${stok.cover}" alt="${stok.namaBarang}" 
             style="max-width:220px;border-radius:10px;
                    box-shadow:0 2px 6px rgba(0,0,0,0.15);">
        <p style="margin-top:8px;">
          <strong>${stok.namaBarang}</strong><br>
          Edisi ${stok.edisi} — Stok: ${stok.stok}
        </p>
      </div>
    `;
  }

  // timeline riwayat perjalanan
  html += `
    <h5 style="margin-top:20px;">Riwayat Perjalanan:</h5>
    <div class="timeline">
  `;

  track.perjalanan.forEach((p, i) => {
    const isLast = i === track.perjalanan.length - 1;
    html += `
      <div class="timeline-item ${isLast ? 'active' : ''}">
        <div class="timeline-dot"></div>
        <div class="timeline-line" style="${isLast ? 'opacity:0;' : ''}"></div>
        <div class="timeline-content">${p}</div>
      </div>
    `;
  });
  html += `</div></div>`;
  
  html += `</div>`;
  return html;
}
 // 5. Tombol "Cari" 
  btn.addEventListener('click', ()=>{
  let q = '';

  if (select.value === 'manual' && input.value.trim() !== '') {
    q = input.value.trim().toLowerCase();
  } else {
    q = select.value.trim().toLowerCase();
  }

  // kalau kosong → tampilkan semua
  if(!q){
    let html = '<h4>📦 Semua Pengiriman</h4>';
    Object.values(dataTracking).forEach(t => {
      html += render(t);
    });
    out.innerHTML = html;
    return;
  }

  // cari DO yang mengandung teks q (bisa 234, 235, dsb)
  const hasil = Object.values(dataTracking).filter(t =>
    t.nomorDO.toLowerCase().includes(q)
  );

  if(hasil.length === 0){
    out.innerHTML = `
      <div class="card feedback">
        Nomor DO <strong>${q}</strong> tidak ditemukan.
      </div>
    `;
    return;
  }

  // tampilkan semua hasil yang cocok
  let html = `<h4>📦 Hasil pencarian: "${q}"</h4>`;
  hasil.forEach(t => html += render(t));
  out.innerHTML = html;
});

  // Tekan Enter = klik Cari
  input.addEventListener('keydown', e => { if(e.key === 'Enter') btn.click(); });

  // Animasi halus
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeIn {
      from {opacity: 0; transform: translateY(8px);}
      to {opacity: 1; transform: translateY(0);}
    }
    #trackingResult .card { margin-bottom: 20px; }
  `;
  document.head.appendChild(style);
  const style2 = document.createElement("style");
style2.textContent = `
  .timeline {
    position: relative;
    margin-top: 16px;
    padding-left: 20px;
  }

  .timeline-item {
    position: relative;
    display: flex;
    align-items: flex-start;
    margin-bottom: 18px;
  }

  .timeline-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ccc;
    position: relative;
    z-index: 2;
    flex-shrink: 0;
    margin-top: 4px;
  }

  .timeline-item.active .timeline-dot {
    background: #2b6cb0; /* warna utama */
    box-shadow: 0 0 0 3px rgba(43,108,176,0.2);
  }

  .timeline-line {
    position: absolute;
    left: 5px;
    top: 14px;
    width: 2px;
    height: calc(100% - 10px);
    background: #ddd;
    z-index: 1;
  }

  .timeline-content {
    margin-left: 14px;
    line-height: 1.5;
    font-size: 14px;
  }
`;
document.head.appendChild(style2);
})();
