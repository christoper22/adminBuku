// ============================================================
// SITTA - Sistem Pemesanan Bahan Ajar Universitas Terbuka
// js/script.js — Data Dummy & Logika DOM
// ============================================================

// ── DATA PENGGUNA (untuk validasi login) ────────────────────
var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta",
    avatar: "RW"
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar",
    avatar: "AP"
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat",
    avatar: "SM"
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP",
    avatar: "DS"
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat",
    avatar: "AS"
  }
];

// ── DATA BAHAN AJAR (untuk halaman stok) ────────────────────
var dataBahanAjar = [
  {
    kodeLokasi: "0TMP01",
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 548,
    kategori: "Ilmu Sosial"
  },
  {
    kodeLokasi: "0JKT01",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 392,
    kategori: "Ekonomi & Bisnis"
  },
  {
    kodeLokasi: "0SBY02",
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 278,
    kategori: "Manajemen"
  },
  {
    kodeLokasi: "0MLG01",
    kodeBarang: "BIOL4211",
    namaBarang: "Mikrobiologi Dasar",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 165,
    kategori: "Sains & Teknologi"
  },
  {
    kodeLokasi: "0UPBJJBDG",
    kodeBarang: "PAUD4401",
    namaBarang: "Perkembangan Anak Usia Dini",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 204,
    kategori: "Pendidikan"
  },
  {
    kodeLokasi: "0JKT02",
    kodeBarang: "HKUM4203",
    namaBarang: "Hukum Perdata",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 310,
    kategori: "Hukum"
  },
  {
    kodeLokasi: "0SBY01",
    kodeBarang: "MKDU4108",
    namaBarang: "Bahasa Indonesia",
    jenisBarang: "BMP",
    edisi: "5",
    stok: 620,
    kategori: "Umum"
  },
  {
    kodeLokasi: "0MDN01",
    kodeBarang: "ISIP4130",
    namaBarang: "Pengantar Ilmu Hukum",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 87,
    kategori: "Hukum"
  }
];

// ── DATA TRACKING PENGIRIMAN ────────────────────────────────
var dataTracking = {
  "2023001234": {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    statusKode: "transit",
    ekspedisi: "JNE",
    tanggalKirim: "25 Agustus 2025",
    paket: "0JKT01",
    total: "Rp 180.000",
    tujuan: "Jakarta Selatan",
    perjalanan: [
      {
        waktu: "25 Agt 2025 - 10:12",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
        selesai: true
      },
      {
        waktu: "25 Agt 2025 - 14:07",
        keterangan: "Tiba di Hub: TANGERANG SELATAN",
        selesai: true
      },
      {
        waktu: "25 Agt 2025 - 18:30",
        keterangan: "Diteruskan ke Kantor Jakarta Selatan",
        selesai: false
      }
    ]
  },
  "2023005678": {
    nomorDO: "2023005678",
    nama: "Agus Pranoto",
    status: "Terkirim",
    statusKode: "delivered",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "25 Agustus 2025",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    tujuan: "Kota Bandung",
    perjalanan: [
      {
        waktu: "25 Agt 2025 - 10:12",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
        selesai: true
      },
      {
        waktu: "25 Agt 2025 - 14:07",
        keterangan: "Tiba di Hub: TANGERANG SELATAN",
        selesai: true
      },
      {
        waktu: "25 Agt 2025 - 16:30",
        keterangan: "Diteruskan ke Kantor Kota Bandung",
        selesai: true
      },
      {
        waktu: "26 Agt 2025 - 12:15",
        keterangan: "Tiba di Hub: Kota BANDUNG",
        selesai: true
      },
      {
        waktu: "26 Agt 2025 - 15:06",
        keterangan: "Proses antar ke Cimahi",
        selesai: true
      },
      {
        waktu: "26 Agt 2025 - 20:00",
        keterangan: "Selesai Antar. Penerima: Agus Pranoto",
        selesai: true
      }
    ]
  },
  "2024009999": {
    nomorDO: "2024009999",
    nama: "Doni Setiawan",
    status: "Diproses",
    statusKode: "processing",
    ekspedisi: "TIKI",
    tanggalKirim: "10 Oktober 2025",
    paket: "0JKT02",
    total: "Rp 150.000",
    tujuan: "Depok",
    perjalanan: [
      {
        waktu: "10 Okt 2025 - 09:00",
        keterangan: "Pesanan diterima dan sedang diproses di gudang Universitas Terbuka",
        selesai: true
      },
      {
        waktu: "10 Okt 2025 - 14:00",
        keterangan: "Menunggu pengambilan oleh kurir TIKI",
        selesai: false
      }
    ]
  }
};

// ── DATA HISTORI TRANSAKSI ───────────────────────────────────
var dataHistori = [
  {
    id: "TRX-2025-001",
    tanggal: "01 Sep 2025",
    pemesan: "Rina Wulandari",
    lokasi: "UPBJJ Jakarta",
    jumlahItem: 3,
    total: "Rp 540.000",
    status: "Selesai"
  },
  {
    id: "TRX-2025-002",
    tanggal: "05 Sep 2025",
    pemesan: "Agus Pranoto",
    lokasi: "UPBJJ Makassar",
    jumlahItem: 5,
    total: "Rp 900.000",
    status: "Selesai"
  },
  {
    id: "TRX-2025-003",
    tanggal: "12 Sep 2025",
    pemesan: "Doni Setiawan",
    lokasi: "FISIP",
    jumlahItem: 2,
    total: "Rp 360.000",
    status: "Diproses"
  },
  {
    id: "TRX-2025-004",
    tanggal: "20 Sep 2025",
    pemesan: "Siti Marlina",
    lokasi: "Pusat",
    jumlahItem: 8,
    total: "Rp 1.440.000",
    status: "Selesai"
  }
];

// ════════════════════════════════════════════════════════════
// ── FUNGSI UTILITAS BERSAMA ──────────────────────────────────
// ════════════════════════════════════════════════════════════

function showLoading(show) {
  var overlay = document.getElementById("loadingOverlay");
  if (overlay) {
    overlay.style.display = show ? "flex" : "none";
  }
}

function tampilkanToast(pesan, tipe) {
  tipe = tipe || "info";
  var container = document.getElementById("toastContainer");
  if (!container) return;
  var toast = document.createElement("div");
  toast.className = "toast toast-" + tipe;
  var ikon = tipe === "success" ? "checkmark" : tipe === "error" ? "times" : "info";
  var ikonEmoji = tipe === "success" ? "✅" : tipe === "error" ? "❌" : "ℹ️";
  toast.innerHTML = "<span class='toast-icon'>" + ikonEmoji + "</span><span>" + pesan + "</span>";
  container.appendChild(toast);
  setTimeout(function () { toast.classList.add("toast-visible"); }, 10);
  setTimeout(function () {
    toast.classList.remove("toast-visible");
    setTimeout(function () { toast.remove(); }, 400);
  }, 3000);
}

function getSesiPengguna() {
  var data = sessionStorage.getItem("sesiPengguna");
  return data ? JSON.parse(data) : null;
}

function periksaSesi() {
  var sesi = getSesiPengguna();
  if (!sesi) {
    window.location.href = "index.html";
    return null;
  }
  return sesi;
}

function logout() {
  sessionStorage.removeItem("sesiPengguna");
  window.location.href = "index.html";
}

function tampilkanModal(idModal) {
  var modal = document.getElementById(idModal);
  if (modal) modal.classList.add("modal-aktif");
}

function tutupModal(idModal) {
  var modal = document.getElementById(idModal);
  if (modal) modal.classList.remove("modal-aktif");
}

// ════════════════════════════════════════════════════════════
// ── LOGIKA HALAMAN LOGIN (index.html) ───────────────────────
// ════════════════════════════════════════════════════════════
function initLogin() {
  var formLogin = document.getElementById("formLogin");
  if (!formLogin) return;

  var togglePassword = document.getElementById("togglePassword");
  var inputPassword = document.getElementById("password");
  if (togglePassword && inputPassword) {
    togglePassword.addEventListener("click", function () {
      var tipe = inputPassword.type === "password" ? "text" : "password";
      inputPassword.type = tipe;
      this.textContent = tipe === "password" ? "👁️" : "🙈";
    });
  }

  var btnLupaPassword = document.getElementById("btnLupaPassword");
  if (btnLupaPassword) {
    btnLupaPassword.addEventListener("click", function (e) {
      e.preventDefault();
      tampilkanModal("modalLupaPassword");
    });
  }

  var btnDaftar = document.getElementById("btnDaftar");
  if (btnDaftar) {
    btnDaftar.addEventListener("click", function (e) {
      e.preventDefault();
      tampilkanModal("modalDaftar");
    });
  }

  document.querySelectorAll(".btn-tutup-modal").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var modalId = this.getAttribute("data-modal");
      tutupModal(modalId);
    });
  });

  document.querySelectorAll(".modal-overlay").forEach(function (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.remove("modal-aktif");
      }
    });
  });

  formLogin.addEventListener("submit", function (e) {
    e.preventDefault();
    var inputEmail = document.getElementById("email").value.trim();
    var inputPass = document.getElementById("password").value;
    showLoading(true);
    setTimeout(function () {
      showLoading(false);
      var pengguna = null;
      for (var i = 0; i < dataPengguna.length; i++) {
        if (dataPengguna[i].email === inputEmail && dataPengguna[i].password === inputPass) {
          pengguna = dataPengguna[i];
          break;
        }
      }
      if (pengguna) {
        sessionStorage.setItem("sesiPengguna", JSON.stringify(pengguna));
        tampilkanToast("Login berhasil! Selamat datang, " + pengguna.nama.split(" ")[0] + ".", "success");
        setTimeout(function () { window.location.href = "dashboard.html"; }, 1200);
      } else {
        tampilkanModal("modalLoginGagal");
      }
    }, 800);
  });

  var btnTutupGagal = document.getElementById("btnTutupLoginGagal");
  if (btnTutupGagal) {
    btnTutupGagal.addEventListener("click", function () {
      tutupModal("modalLoginGagal");
    });
  }
}

// ════════════════════════════════════════════════════════════
// ── LOGIKA NAVIGASI BERSAMA (untuk dashboard, tracking, stok)
// ════════════════════════════════════════════════════════════
function initNavBersama(sesi) {
  var elNama = document.getElementById("namaUserNav");
  var elRole = document.getElementById("roleUserNav");
  var elAvatar = document.getElementById("avatarUser");
  if (elNama) elNama.textContent = sesi.nama;
  if (elRole) elRole.textContent = sesi.role;
  if (elAvatar) elAvatar.textContent = sesi.avatar;

  var btnLaporan = document.getElementById("btnLaporan");
  var dropdownLaporan = document.getElementById("dropdownLaporan");
  if (btnLaporan && dropdownLaporan) {
    btnLaporan.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdownLaporan.classList.toggle("dropdown-aktif");
    });
    document.addEventListener("click", function () {
      dropdownLaporan.classList.remove("dropdown-aktif");
    });
  }

  var btnLogout = document.getElementById("btnLogout");
  if (btnLogout) {
    btnLogout.addEventListener("click", function () { tampilkanModal("modalKonfirmasiLogout"); });
  }
  var btnKonfirmasiLogout = document.getElementById("btnKonfirmasiLogout");
  if (btnKonfirmasiLogout) {
    btnKonfirmasiLogout.addEventListener("click", logout);
  }
  var btnBatalLogout = document.getElementById("btnBatalLogout");
  if (btnBatalLogout) {
    btnBatalLogout.addEventListener("click", function () { tutupModal("modalKonfirmasiLogout"); });
  }

  document.querySelectorAll(".modal-overlay").forEach(function (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) this.classList.remove("modal-aktif");
    });
  });

  // Mobile menu toggle
  var btnMobileMenu = document.getElementById("btnMobileMenu");
  var navLinks = document.getElementById("navLinks");
  if (btnMobileMenu && navLinks) {
    btnMobileMenu.addEventListener("click", function () {
      navLinks.classList.toggle("nav-mobile-aktif");
    });
  }
}

// ════════════════════════════════════════════════════════════
// ── LOGIKA HALAMAN DASHBOARD (dashboard.html) ───────────────
// ════════════════════════════════════════════════════════════
function initDashboard() {
  var sesi = periksaSesi();
  if (!sesi) return;

  initNavBersama(sesi);

  var elNamaGreeting = document.getElementById("namaGreeting");
  if (elNamaGreeting) elNamaGreeting.textContent = sesi.nama.split(" ")[0];

  var jam = new Date().getHours();
  var elGreeting = document.getElementById("greetingTeks");
  var greeting, ikon;
  if (jam >= 0 && jam < 11) { greeting = "Selamat Pagi"; ikon = "🌅"; }
  else if (jam >= 11 && jam < 15) { greeting = "Selamat Siang"; ikon = "☀️"; }
  else if (jam >= 15 && jam < 18) { greeting = "Selamat Sore"; ikon = "🌇"; }
  else { greeting = "Selamat Malam"; ikon = "🌙"; }
  if (elGreeting) elGreeting.textContent = ikon + " " + greeting + ",";

  renderHistori();
  updateJam();
  setInterval(updateJam, 1000);
}

function updateJam() {
  var elJam = document.getElementById("jamSekarang");
  if (!elJam) return;
  var sekarang = new Date();
  elJam.textContent = sekarang.toLocaleTimeString("id-ID", {
    hour: "2-digit", minute: "2-digit", second: "2-digit"
  });
}

function renderHistori() {
  var tbody = document.getElementById("tbodyHistori");
  if (!tbody) return;
  tbody.innerHTML = "";
  dataHistori.forEach(function (trx, i) {
    var kelasStatus = trx.status === "Selesai" ? "badge-selesai" : "badge-proses";
    var baris = document.createElement("tr");
    baris.className = "baris-tabel";
    baris.style.animationDelay = (i * 0.08) + "s";
    baris.innerHTML =
      "<td>" + trx.id + "</td>" +
      "<td>" + trx.tanggal + "</td>" +
      "<td>" + trx.pemesan + "</td>" +
      "<td>" + trx.lokasi + "</td>" +
      "<td class='center'>" + trx.jumlahItem + " item</td>" +
      "<td class='bold'>" + trx.total + "</td>" +
      "<td class='center'><span class='badge " + kelasStatus + "'>" + trx.status + "</span></td>";
    tbody.appendChild(baris);
  });
}

// ════════════════════════════════════════════════════════════
// ── LOGIKA HALAMAN TRACKING (tracking.html) ─────────────────
// ════════════════════════════════════════════════════════════
function initTracking() {
  var sesi = periksaSesi();
  if (!sesi) return;
  initNavBersama(sesi);

  var formTracking = document.getElementById("formTracking");
  if (formTracking) {
    formTracking.addEventListener("submit", function (e) {
      e.preventDefault();
      var nomorDO = document.getElementById("inputNomorDO").value.trim();
      cariTracking(nomorDO);
    });
  }

  // Contoh DO cards klik
  document.querySelectorAll(".contoh-do").forEach(function (el) {
    el.addEventListener("click", function () {
      var noDO = this.getAttribute("data-do");
      var inputField = document.getElementById("inputNomorDO");
      if (inputField) {
        inputField.value = noDO;
        cariTracking(noDO);
      }
    });
  });
}

function cariTracking(nomorDO) {
  var hasilTracking = document.getElementById("hasilTracking");
  var pesanTidakDitemukan = document.getElementById("pesanTidakDitemukan");
  if (!hasilTracking || !pesanTidakDitemukan) return;

  showLoading(true);
  setTimeout(function () {
    showLoading(false);
    var data = dataTracking[nomorDO];
    if (data) {
      pesanTidakDitemukan.style.display = "none";
      hasilTracking.style.display = "block";
      hasilTracking.classList.remove("fade-in");
      void hasilTracking.offsetWidth;
      hasilTracking.classList.add("fade-in");
      renderHasilTracking(data);
    } else {
      hasilTracking.style.display = "none";
      pesanTidakDitemukan.style.display = "flex";
    }
  }, 700);
}

function renderHasilTracking(data) {
  var elNama = document.getElementById("trackNama");
  var elNomorDO = document.getElementById("trackNomorDO");
  var elStatus = document.getElementById("trackStatus");
  var elEkspedisi = document.getElementById("trackEkspedisi");
  var elTanggal = document.getElementById("trackTanggal");
  var elPaket = document.getElementById("trackPaket");
  var elTotal = document.getElementById("trackTotal");
  var elTujuan = document.getElementById("trackTujuan");
  var elBadgeStatus = document.getElementById("trackBadgeStatus");

  if (elNama) elNama.textContent = data.nama;
  if (elNomorDO) elNomorDO.textContent = data.nomorDO;
  if (elEkspedisi) elEkspedisi.textContent = data.ekspedisi;
  if (elTanggal) elTanggal.textContent = data.tanggalKirim;
  if (elPaket) elPaket.textContent = data.paket;
  if (elTotal) elTotal.textContent = data.total;
  if (elTujuan) elTujuan.textContent = data.tujuan;

  if (elStatus) {
    elStatus.textContent = data.status;
    elStatus.className = "track-status-label status-" + data.statusKode;
  }
  if (elBadgeStatus) {
    elBadgeStatus.textContent = data.status;
    elBadgeStatus.className = "badge-status-besar status-" + data.statusKode;
  }

  var total = data.perjalanan.length;
  var selesai = data.perjalanan.filter(function (p) { return p.selesai; }).length;
  var persen = Math.round((selesai / total) * 100);
  var elProgressBar = document.getElementById("progressBar");
  var elProgressPersen = document.getElementById("progressPersen");
  if (elProgressBar) elProgressBar.style.width = persen + "%";
  if (elProgressPersen) elProgressPersen.textContent = persen + "%";

  var elTimeline = document.getElementById("timelinePerjalanan");
  if (!elTimeline) return;
  elTimeline.innerHTML = "";
  data.perjalanan.forEach(function (item, i) {
    var elItem = document.createElement("div");
    elItem.className = "timeline-item" + (item.selesai ? " timeline-selesai" : " timeline-pending");
    elItem.style.animationDelay = (i * 0.1) + "s";
    elItem.innerHTML =
      "<div class='timeline-dot'><span class='timeline-dot-inner'></span></div>" +
      "<div class='timeline-konten'>" +
        "<p class='timeline-waktu'>" + item.waktu + "</p>" +
        "<p class='timeline-keterangan'>" + item.keterangan + "</p>" +
      "</div>";
    elTimeline.appendChild(elItem);
  });
}

// ════════════════════════════════════════════════════════════
// ── LOGIKA HALAMAN STOK (stok.html) ─────────────────────────
// ════════════════════════════════════════════════════════════
function initStok() {
  var sesi = periksaSesi();
  if (!sesi) return;
  initNavBersama(sesi);

  renderTabelStok(dataBahanAjar);
  updateStatistikStok();

  var inputCari = document.getElementById("inputCariStok");
  if (inputCari) {
    inputCari.addEventListener("input", function () {
      var kata = this.value.toLowerCase();
      var hasilFilter = dataBahanAjar.filter(function (b) {
        return (
          b.namaBarang.toLowerCase().indexOf(kata) !== -1 ||
          b.kodeBarang.toLowerCase().indexOf(kata) !== -1 ||
          b.kategori.toLowerCase().indexOf(kata) !== -1
        );
      });
      renderTabelStok(hasilFilter);
    });
  }

  var btnTambahStok = document.getElementById("btnTambahStok");
  if (btnTambahStok) {
    btnTambahStok.addEventListener("click", function () { tampilkanModal("modalTambahStok"); });
  }

  var btnTutupModalStok = document.querySelector("[data-modal='modalTambahStok']");
  if (btnTutupModalStok) {
    btnTutupModalStok.addEventListener("click", function () { tutupModal("modalTambahStok"); });
  }

  var formTambahStok = document.getElementById("formTambahStok");
  if (formTambahStok) {
    formTambahStok.addEventListener("submit", function (e) {
      e.preventDefault();
      tambahStokBaru();
    });
  }
}

function getStokBadge(stok) {
  if (stok <= 0) return '<span class="badge badge-stok-habis">Habis</span>';
  if (stok < 100) return '<span class="badge badge-stok-rendah">Rendah</span>';
  if (stok < 300) return '<span class="badge badge-stok-cukup">Cukup</span>';
  return '<span class="badge badge-stok-aman">Aman</span>';
}

function renderTabelStok(data) {
  var tbody = document.getElementById("tbodyStok");
  if (!tbody) return;
  tbody.innerHTML = "";
  if (data.length === 0) {
    tbody.innerHTML = "<tr><td colspan='7' class='center teks-kosong'>Tidak ada data yang cocok.</td></tr>";
    return;
  }
  data.forEach(function (item, i) {
    var baris = document.createElement("tr");
    baris.className = "baris-tabel";
    baris.style.animationDelay = (i * 0.06) + "s";
    baris.innerHTML =
      "<td><span class='chip'>" + item.kodeBarang + "</span></td>" +
      "<td class='bold'>" + item.namaBarang + "</td>" +
      "<td class='center'><span class='tag-kategori'>" + item.kategori + "</span></td>" +
      "<td class='center'>" + item.jenisBarang + "</td>" +
      "<td class='center'>Ed. " + item.edisi + "</td>" +
      "<td class='center bold'>" + item.stok.toLocaleString("id-ID") + "</td>" +
      "<td class='center'>" + getStokBadge(item.stok) + "</td>";
    tbody.appendChild(baris);
  });
  var elJumlah = document.getElementById("jumlahItemDitampilkan");
  if (elJumlah) elJumlah.textContent = data.length + " item";
}

function tambahStokBaru() {
  var kode = document.getElementById("inputKodeBarang").value.trim();
  var nama = document.getElementById("inputNamaBarang").value.trim();
  var kategori = document.getElementById("inputKategori").value;
  var jenis = document.getElementById("inputJenis").value;
  var edisi = document.getElementById("inputEdisi").value.trim();
  var lokasi = document.getElementById("inputLokasi").value.trim();
  var stok = parseInt(document.getElementById("inputStok").value);

  if (!kode || !nama || !kategori || !jenis || !edisi || !lokasi || isNaN(stok)) {
    tampilkanToast("Harap isi semua field dengan benar!", "error");
    return;
  }

  dataBahanAjar.unshift({
    kodeLokasi: lokasi,
    kodeBarang: kode,
    namaBarang: nama,
    jenisBarang: jenis,
    edisi: edisi,
    stok: stok,
    kategori: kategori
  });

  renderTabelStok(dataBahanAjar);
  updateStatistikStok();
  tutupModal("modalTambahStok");
  document.getElementById("formTambahStok").reset();
  tampilkanToast("Stok bahan ajar berhasil ditambahkan!", "success");
}

function updateStatistikStok() {
  var totalItem = dataBahanAjar.length;
  var totalStok = dataBahanAjar.reduce(function (acc, item) { return acc + item.stok; }, 0);
  var stokRendah = dataBahanAjar.filter(function (item) { return item.stok < 100; }).length;
  var elTotal = document.getElementById("statTotalItem");
  var elTotalStok = document.getElementById("statTotalStok");
  var elRendah = document.getElementById("statStokRendah");
  if (elTotal) elTotal.textContent = totalItem;
  if (elTotalStok) elTotalStok.textContent = totalStok.toLocaleString("id-ID");
  if (elRendah) elRendah.textContent = stokRendah;
}

// ════════════════════════════════════════════════════════════
// ── INISIALISASI OTOMATIS BERDASARKAN HALAMAN ────────────────
// ════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", function () {
  var halaman = window.location.pathname.split("/").pop();
  if (halaman === "index.html" || halaman === "" || halaman === "/") {
    initLogin();
  } else if (halaman === "dashboard.html") {
    initDashboard();
  } else if (halaman === "tracking.html") {
    initTracking();
  } else if (halaman === "stok.html") {
    initStok();
  }
});
