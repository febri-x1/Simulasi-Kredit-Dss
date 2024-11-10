function hitungSimulasi() {
    // Ambil nilai dari form input
    const userId = document.getElementById("userId").value;
    const hargaMotor = parseFloat(document.getElementById("hargaMotor").value);
    const uangMuka = parseFloat(document.getElementById("uangMuka").value);
    const tenor = parseInt(document.getElementById("tenor").value);
    const bunga = parseFloat(document.getElementById("bunga").value);
    const gajiBulanan = parseFloat(document.getElementById("gajiBulanan").value);

    // Hitung sisa pembiayaan setelah uang muka
    const sisaPembiayaan = hargaMotor - uangMuka;

    // Hitung cicilan bulanan dengan bunga
    const bungaBulanan = bunga / 12 / 100;
    const cicilanBulanan = (sisaPembiayaan * bungaBulanan) / (1 - Math.pow(1 + bungaBulanan, -tenor));

    // Tampilkan hasil simulasi
    const hasilSimulasi = document.getElementById("hasilSimulasi");
    hasilSimulasi.style.display = "block";
    hasilSimulasi.innerHTML = `

        <p><strong>User ID:</strong> ${userId.toLocaleString()}</p>
        <p><strong>Harga Motor:</strong> Rp ${hargaMotor.toLocaleString()}</p>
        <p><strong>Uang Muka:</strong> Rp ${uangMuka.toLocaleString()}</p>
        <p><strong>Sisa Pembiayaan:</strong> Rp ${sisaPembiayaan.toLocaleString()}</p>
        <p><strong>Tenor:</strong> ${tenor} bulan</p>
        <p><strong>Suku Bunga:</strong> ${bunga}%</p>
        <p><strong>Cicilan Bulanan:</strong> Rp ${cicilanBulanan.toFixed(2).toLocaleString()}</p>
    `;

    // Peringatan jika cicilan bulanan lebih dari 30% gaji
    const batasCicilan = 0.3 * gajiBulanan;
    const peringatan = document.getElementById("peringatan");

    if (cicilanBulanan > batasCicilan) {
        peringatan.style.display = "block";
    } else {
        peringatan.style.display = "none";
    }

    return true;
}