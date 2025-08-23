const Menu = document.getElementById("hamburger")
const List = document.getElementById("isinya")
const menuLinks = document.querySelectorAll(".isilist a")

Menu.addEventListener("click", () => {
    List.classList.toggle("hidden")
});

document.addEventListener('scroll', (event) => {
    // Memeriksa apakah yang diklik BUKAN menuIcon dan BUKAN menuList
    // dan juga bukan bagian dari menuList (children)
    if (!Menu.contains(event.target) && !List.contains(event.target)) {
        // Jika menuList sedang terlihat (tidak memiliki class 'hidden'), sembunyikan
        if (!List.classList.contains('hidden')) {
              List.classList.add('hidden');
        }
    }
});

document.addEventListener('click', (event) => {
    // Memeriksa apakah yang diklik BUKAN menuIcon dan BUKAN menuList
    // dan juga bukan bagian dari menuList (children)
    if (!Menu.contains(event.target) && !List.contains(event.target)) {
        // Jika menuList sedang terlihat (tidak memiliki class 'hidden'), sembunyikan
        if (!List.classList.contains('hidden')) {
              List.classList.add('hidden');
        }
    }
});

menuLinks.forEach(link => {
    link.addEventListener("click", (event) => {
    if (!List.classList.contains('hidden')) { // Pastikan hanya menyembunyikan jika sedang terlihat
            List.classList.add("hidden");
        }
    });
});

// INI BAGIAN TOMBOL DI HOME
document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('btnhome1')
    const button2 = document.getElementById('btnhome2')
    const elemen1 = document.getElementById ('elemen1')
    const elemen2 = document.getElementById ('elemen2')

    function showContent (elemenToShow, buttonToActivate) {
        const open = elemenToShow.classList.contains('active')
        elemen1.classList.remove ('active')
        elemen2.classList.remove ('active')
        button1.classList.remove ('active')
        button2.classList.remove ('active')

        if(!open) {
            elemenToShow.classList.add('active')
            buttonToActivate.classList.add('active')

            const rect = elemenToShow.getBoundingClientRect();

            // Hitung posisi vertikal absolut di dokumen
            const targetY = rect.top + window.scrollY;

            // Anda bisa tambahkan atau kurangkan nilai ini untuk 'offset' (jarak)
            // Misalnya, untuk memberikan sedikit ruang di atas konten:
            const offset = 220; // Contoh: scroll 50px di atas konten
            const finalScrollY = targetY - offset;

            window.scrollTo({
                top: finalScrollY,
                behavior: 'smooth' // Untuk animasi scroll yang halus
              })
        }

    }
    
    button1.addEventListener('click', function() {
        showContent(elemen1, button1);
    });

    button2.addEventListener('click', function() {
        showContent(elemen2, button2);
    });

});



// INI PORTOFOLIO
document.addEventListener('DOMContentLoaded', function() {
    // Get references to buttons and content sections
    const tombol1 = document.getElementById('btnporto1');
    const tombol2 = document.getElementById('btnporto2');
    const tombol3 = document.getElementById('btnporto3');
    const isi1 = document.getElementById('isi1');
    const isi2 = document.getElementById('isi2');
    const isi3 = document.getElementById('isi3');

    function showContent(isiToShow, tombolToActivate) {
        const terbuka = isiToShow.classList.contains('aktif')
        isi1.classList.remove('aktif');
        isi2.classList.remove('aktif');
        isi3.classList.remove('aktif');
        tombol1.classList.remove('aktif');
        tombol2.classList.remove('aktif');
        tombol3.classList.remove('aktif');

        if (!terbuka) {
        isiToShow.classList.add('aktif');
        tombolToActivate.classList.add('aktif');

        const rect = isiToShow.getBoundingClientRect();

            // Hitung posisi vertikal absolut di dokumen
            const targetY = rect.top + window.scrollY;

            // Anda bisa tambahkan atau kurangkan nilai ini untuk 'offset' (jarak)
            // Misalnya, untuk memberikan sedikit ruang di atas konten:
            const offset = 220; // Contoh: scroll 50px di atas konten
            const finalScrollY = targetY - offset;

            window.scrollTo({
                top: finalScrollY,
                behavior: 'smooth' // Untuk animasi scroll yang halus
              })
        
        }
    }

    tombol1.addEventListener('click', function() {
        showContent(isi1, tombol1);
    });

    tombol2.addEventListener('click', function() {
        showContent(isi2, tombol2);
    });

    tombol3.addEventListener('click', function() {
        showContent(isi3, tombol3);
    });

});

const sertifikasi = document.querySelector('.isisertifikasi');

sertifikasi.addEventListener('wheel', (cursor) => {
    // Mencegah guliran vertikal bawaan pada halaman
    cursor.preventDefault();

    // Menggeser galeri secara horizontal
    sertifikasi.scrollLeft += cursor.deltaY;
});

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};