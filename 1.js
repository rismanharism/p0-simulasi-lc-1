let wahana = "Wahanas Selatan"
let usia = 12
let saldo = 120000
let tarif

 if (usia < 2) {
    console.log(`Dilarang Masuk`);
}
else if (wahana === "Wahana Utara") {
    if (usia >= 2 && usia <= 12) {
        tarif = 85_000
        if (saldo > tarif) {
            console.log(`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`);
        }
        else if(saldo < tarif) {
            console.log(`"Saldo anda kurang RP ${tarif - saldo},00. Tidak cukup untuk membeli tiket.`);
        }
    }
    else if (usia >= 13 && usia <= 49) {
        tarif = 125_000
        if (saldo > tarif) {
            console.log(`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`);
        }
        else if(saldo < tarif) {
            console.log(`"Saldo anda kurang RP ${tarif - saldo},00. Tidak cukup untuk membeli tiket.`);
        }
    }
    else if (usia >= 50) {
        tarif = 125_000
        if (saldo > tarif) {
            console.log(`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`);
        }
        else if(saldo < tarif) {
            console.log(`Saldo anda kurang RP ${tarif - saldo},00. Tidak cukup untuk membeli tiket.`);
        }
    }
}
else if (wahana === "Wahana Selatan") {
    if (usia >= 2 && usia <= 12) {
        tarif = 143_000
        if (saldo > tarif) {
            console.log(`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`);
        }
        else if(saldo < tarif) {
            console.log(`Saldo anda kurang RP ${tarif - saldo},00. Tidak cukup untuk membeli tiket.`);
        }
    }
    else if (usia >= 13 && usia <= 49) {
        tarif = 165_000
        if (saldo > tarif) {
            console.log(`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`);
        }
        else if(saldo < tarif) {
            console.log(`Saldo anda kurang RP ${tarif - saldo},00. Tidak cukup untuk membeli tiket.`);
        }
    }
    else if (usia >= 50) {
        tarif = 165_000
        if (saldo > tarif) {
            console.log(`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`);
        }
        else if(saldo < tarif) {
            console.log(`Saldo anda kurang RP ${tarif - saldo},00. Tidak cukup untuk membeli tiket.`);
        }
    }
}

else if (wahana != "Wahana Utara" || wahana != "Wahana Selatan") {
    console.log(`"Tiket tidak ditemukan!`);
}
