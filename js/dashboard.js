// dashboard.js
(function(){
  const uStr = sessionStorage.getItem('sitta_user');
  if(!uStr){
    // jika belum login, kembalikan ke login
    window.location.href = 'index.html';
    return;
  }
  const user = JSON.parse(uStr);
  document.getElementById('userInfo').textContent = user.nama + ' — ' + user.lokasi;

  function greetingByHour(){
    const h = new Date().getHours();
    if(h >= 4 && h < 11) return 'Selamat Pagi';
    if(h >= 11 && h < 15) return 'Selamat Siang';
    if(h >= 15 && h < 18) return 'Selamat Sore';
    return 'Selamat Malam';
  }

  document.getElementById('greeting').textContent = greetingByHour() + ', ' + user.nama + '!';

  document.getElementById('btnLogout')?.addEventListener('click', () => {
    sessionStorage.removeItem('sitta_user');
    window.location.href = 'index.html';
  });
})();
