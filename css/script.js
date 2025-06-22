// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// klik di luar sidebar untuk menghilangkan nav 
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e)
 {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.taerger)) {
        navbarNav.classList.remove('active');
    }

    }
)

<script>
  document.getElementById().addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
      nama: document.getElementById("nama").value,
      hp: document.getElementById("hp").value
    };

    fetch("https://script.google.com/macros/s/AKfyc.../exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        alert("Pesan berhasil dikirim!");
        document.getElementById("form").reset();
      } else {
        alert("Gagal mengirim pesan.");
      }
    })
    .catch(error => {
      alert("Terjadi kesalahan: " + error);
    });
  });
  