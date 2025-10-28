// login.js 
(function(){
  // elemen HTML
  const emailIn = document.getElementById('email');
  const passIn = document.getElementById('password');
  const btn = document.getElementById('btnLogin');
  const fb = document.getElementById('loginFeedback');

  // kalau dataPengguna belum ada, buat default
  if (typeof dataPengguna === 'undefined') {
    window.dataPengguna = [
      {
        nama: "Admin SITTA",
        email: "admin@sitta.ut.ac.id",
        password: "1234",
        role: "admin",
        lokasi: "UPBJJ Jakarta"
      }
    ];
    console.warn("⚠️ dataPengguna tidak ditemukan. Menggunakan akun default.");
  }

  // tombol login
  btn.addEventListener('click', ()=>{
    fb.textContent = '';
    const e = (emailIn.value || '').trim();
    const p = (passIn.value || '').trim();

    if(!e || !p){
      fb.textContent = 'Email dan password wajib diisi.';
      return;
    }

    const user = dataPengguna.find(u => 
      u.email.toLowerCase() === e.toLowerCase() && u.password === p
    );

    if(!user){
      fb.textContent = 'Email atau password salah.';
      return;
    }

    // simpan data login ke sessionStorage
    sessionStorage.setItem('sitta_user', JSON.stringify({
      nama: user.nama,
      email: user.email,
      role: user.role,
      lokasi: user.lokasi
    }));

    // pindah ke dashboard
    window.location.href = 'dashboard.html';
  });

  // tekan Enter = klik login
  [emailIn, passIn].forEach(inp => {
    inp.addEventListener('keydown', e => {
      if(e.key === 'Enter') btn.click();
    });
  });
})();
