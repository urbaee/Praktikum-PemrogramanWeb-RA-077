function hitungNilai() {
    const nilaiTugas = parseFloat(document.getElementById("tugas").value);
    const nilaiUTS = parseFloat(document.getElementById("uts").value);
    const nilaiUAS = parseFloat(document.getElementById("uas").value);

    // Validasi input berada antara 0 dan 100
    if (isNaN(nilaiTugas) || isNaN(nilaiUTS) || isNaN(nilaiUAS) ||
        nilaiTugas < 0 || nilaiTugas > 100 ||
        nilaiUTS < 0 || nilaiUTS > 100 ||
        nilaiUAS < 0 || nilaiUAS > 100) {
        alert("Masukkan nilai antara 0 hingga 100 untuk semua komponen.");
        return;
    }

    // Persentase bobot dan batas kelulusan
    const bobotTugas = 0.3;
    const bobotUTS = 0.3;
    const bobotUAS = 0.4;
    const batasLulus = 60;

    // Perhitungan rata-rata nilai
    let nilaiAkhir = (nilaiTugas * bobotTugas) + (nilaiUTS * bobotUTS) + (nilaiUAS * bobotUAS);

    // Penentuan index yang akan diperoleh oleh mahasiswa
    let grade;
    if (nilaiAkhir >= 90) grade = "A";
    else if (nilaiAkhir >= 80) grade = "B";
    else if (nilaiAkhir >= 70) grade = "C";
    else if (nilaiAkhir >= 60) grade = "D";
    else grade = "E";

    // Status lulus atau tidak lulus
    const lulus = nilaiAkhir >= batasLulus;
    const warnaStatus = lulus ? "green" : "red";
    const status = lulus ? "Lulus" : "Tidak Lulus";

    // Tampilan hasil dari perhitungan
    document.getElementById("hasil").innerHTML = `
        <p>Kontribusi Nilai:</p>
        <ul>
            <li>Tugas (30%): ${nilaiTugas * bobotTugas}</li>
            <li>UTS (30%): ${nilaiUTS * bobotUTS}</li>
            <li>UAS (40%): ${nilaiUAS * bobotUAS}</li>
        </ul>
        <p>Nilai Akhir: ${nilaiAkhir.toFixed(2)}</p>
        <p>Grade: ${grade}</p>
        <p>Status: <span style="color: ${warnaStatus};">${status}</span></p><p>`;
}