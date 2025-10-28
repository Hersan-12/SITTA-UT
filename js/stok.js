// stok.js
(function(){
  const tbody = document.querySelector('#stokTable tbody');
  const fKodeLokasi = document.getElementById('fKodeLokasi');
  const fKodeBarang = document.getElementById('fKodeBarang');
  const fNamaBarang = document.getElementById('fNamaBarang');
  const fEdisi = document.getElementById('fEdisi');
  const fStok = document.getElementById('fStok');
  const btnTambah = document.getElementById('btnTambah');

  function render(){
    tbody.innerHTML = '';
    dataBahanAjar.forEach((b, idx)=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${b.kodeLokasi}</td>
        <td>${b.kodeBarang}</td>
        <td>${b.namaBarang}</td>
        <td>${b.edisi}</td>
        <td>${b.stok}</td>
        <td><button class="btn ghost" data-idx="${idx}">Hapus</button></td>
      `;
      tbody.appendChild(tr);
    });
  }

  // delegasi untuk hapus
  tbody.addEventListener('click', (e)=>{
    if(e.target.matches('button[data-idx]')){
      const i = Number(e.target.dataset.idx);
      if(confirm('Hapus baris ini?')){
        dataBahanAjar.splice(i,1);
        render();
      }
    }
  });

  btnTambah.addEventListener('click', ()=>{
    const kodeLokasi = (fKodeLokasi.value || '').trim();
    const kodeBarang = (fKodeBarang.value || '').trim();
    const namaBarang = (fNamaBarang.value || '').trim();
    const edisi = (fEdisi.value || '').trim();
    const stok = Number(fStok.value || 0);

    if(!kodeLokasi || !kodeBarang || !namaBarang){
      alert('Lengkapi data (kode lokasi, kode barang, nama).');
      return;
    }

    dataBahanAjar.push({
      kodeLokasi,
      kodeBarang,
      namaBarang,
      jenisBarang: 'BMP',
      edisi: edisi || '-',
      stok: stok || 0,
      cover: ''
    });

    render();

    // reset form
    fKodeLokasi.value = '';
    fKodeBarang.value = '';
    fNamaBarang.value = '';
    fEdisi.value = '';
    fStok.value = '';
  });

  // render awal
  render();
})();
