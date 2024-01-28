function validate() {
    var hoError = "";
    var tenError = "";
    var namSinhError = "";
    var gioiTinhError = "";
    var diaChiError = "";

    var ho = document.getElementById("ho");
    var ten = document.getElementById("ten");
    var namSinh = document.getElementById("namSinh");
    var namRadio = document.getElementById("nam");
    var nuRadio = document.getElementById("nu");
    var diaChi = document.getElementById("diaChi");

    if (ho.value == "") {
        ho.className = "hoError";
        hoError += "Không được để trống\n";
    }

    if (ten.value == "") {
        ten.className = "tenError";
        tenError += "Không được để trống\n";
    }

    if (namSinh.value == "") {
        namSinh.className = "namSinhError";
        namSinhError += "Không được để trống\n";
    }

    if (!namRadio.checked && !nuRadio.checked) {
        gioiTinhError += "Vui lòng chọn giới tính\n";
    }

    if (diaChi.value == "") {
        diaChi.className = "diaChiError";
        diaChiError += "Không được để trống\n";
    }

    if (hoError || tenError || namSinhError || gioiTinhError || diaChiError) {
        document.getElementById("hoError").innerHTML = hoError;
        document.getElementById("tenError").innerHTML = tenError;
        document.getElementById("namSinhError").innerHTML = namSinhError;
        document.getElementById("gioiTinhError").innerHTML = gioiTinhError;
        document.getElementById("diaChiError").innerHTML = diaChiError;
        return;
    }

    alert("Thanh toán thành công");
    window.location.href = "index.html";
}
