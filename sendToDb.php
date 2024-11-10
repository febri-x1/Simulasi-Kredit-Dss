<?php
// koneksi database
include 'koneksi.php';
if (isset($_POST['btn'])) {

    $vuserid = $_POST['txtUserId'];
    $vhargamotor = $_POST['txtHargaMotor'];
    $vuangmuka = $_POST['txtUangMuka'];
    $vtenor = $_POST['txtTenor'];
    $vbunga = $_POST['txtBunga'];
    $vgajih = $_POST['txtGajiBulanan'];

    $query1 = mysqli_query($koneksi, "INSERT INTO `data_user_kredit`(`UserId`, `HargaMotor`, `UangMuka`, `Tenor`, `SukuBunga`, `Gaji`)
    VALUES ('$vuserid', '$vhargamotor', '$vuangmuka', '$vtenor', '$vbunga', '$vgajih')");
    if ($query1)
        echo "Data Barang Berhasil Tersimpan<br>";
    else
        echo "Uppss.....Data Barang Gagal Tersimpan !!<br>";

}
?>
