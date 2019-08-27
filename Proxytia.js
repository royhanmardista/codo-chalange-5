/* bagian var dan nama akan diisi oleh user*/
var nama = "Bambang";
var peran = "dasda";

/* peran akan diisi sesuai dengan pilihan yang ada*/
if (peran == "") {
    console.log("Halo", nama, "Pilih peranmu untuk memulai game!");
    console.log("Pilih diantara tiga peran ini Ksatria, Tabib, Penyihir")
}
else {
    if (peran == "Ksatria") {
        console.log ("Selamat datang di Dunia Proxytia", nama)
        console.log("Halo Ksatria", nama, "kamu dapat menyerang dengan senjatamu!")
    }
    else if (peran == "Tabib") {
        console.log ("Selamat datang di Dunia Proxytia", nama)
        console.log("Halo Tabib", nama, "kamu akan membantu temanmu yang terluka.")
    }
    else if (peran == "Penyihir") {
        console.log ("Selamat datang di Dunia Proxytia", nama)
        console.log("Halo Penyihir", nama, "ciptakan keajaiban yang membantu kemenanganmu!")
    }
    else {
        console.log ("Silakan masukkan peran yang telah disediakan")
    }
}
