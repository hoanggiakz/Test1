$(document).ready(function() {
    //bua anan
    var i = 1;
    $("#modalId").on('shown.bs.modal', function() {
        $(this).find("#txtHoTen").focus()
    })

    function ktraHoTen() {
        var value = document.getElementById("txtHoTen").value;
        var regex = /^([A-Z]{1}[a-z]+)(\s[A-Z]{1}[a-z]+)+$/

        if (value === null || value === "") {
            spanHoTen.innerHTML = "Ho ten khong duoc rong"
            return false
        }
        if (regex.test(value) == false) {
            spanHoTen.innerHTML = "Ho ten khong hop le"
            return false
        } else {
            spanHoTen.innerHTML = ""
            return true;
        }
    }

    $("#txtHoTen").blur(function() {
        ktraHoTen();

    })


    function ktraDiaChi() {
        var value = document.getElementById("txtDiaChi").value;
        var regex = /^[A-Z\d]+(\s[A-Z\d]+)+$/

        if (value === null || value === "") {
            spanDiaChi.innerHTML = "Dia chi khong duoc rong"
            return false
        }
        if (regex.test(value) == false) {
            spanDiaChi.innerHTML = "Dia chi khong hop le"
            return false
        } else {
            spanDiaChi.innerHTML = ""
            return true;
        }
    }

    $("#txtDiaChi").blur(function() {
        ktraDiaChi();
    })

    function ktraThoiGian() {
        var value = document.getElementById("txtThoiGian").value;

        var regex = /^[\d]{2}:\d{2} den \d{2}:\d{2}$/

        if (value === null || value === "") {
            spanThoiGian.innerHTML = "Thoi gian khong duoc rong"
            return false
        }
        if (regex.test(value) == false) {
            spanThoiGian.innerHTML = "Thoi gian khong hop le"
            return false
        } else {
            spanThoiGian.innerHTML = ""
            return true;
        }
    }

    $("#txtThoiGian").blur(function() {
        ktraThoiGian();
    })

    function ktraEmail() {
        var value = document.getElementById("txtEmail").value;
        var regex = /^0[A-Za-z]+@iuh.edu.vn$/

        if (value === null || value === "") {
            spanEmail.innerHTML = "Email khong duoc rong"
            return false
        }
        if (regex.test(value) == false) {
            spanEmail.innerHTML = "Email khong hop le"
            return false
        } else {
            spanEmail.innerHTML = ""
            return true;
        }
    }

    $("#txtEmail").blur(function() {
        ktraEmail();
    })


    function ktraSDT() {
        var value = document.getElementById("txtSDT").value;
        var regex = /^0{1}\d{3}-\d{3}-\d{3}$/

        if (value === null || value === "") {
            spanSDT.innerHTML = "So dien thoai khong duoc rong"
            return false
        }
        if (regex.test(value) == false) {
            spanSDT.innerHTML = "So dien thoai khong hop le"
            return false
        } else {
            spanSDT.innerHTML = ""
            return true;
        }
    }

    $("#txtSDT").blur(function() {
        ktraSDT();
    })

    $("#btnDatHang").click(function() {
        if (!ktraHoTen() || !ktraThoiGian() || !ktraSDT() || !ktraEmail() || !ktraDiaChi()) {
            alert("Vui long nhap day du thong tin")
            return false
        }

        var hoTen = $("#txtHoTen").val()
        var diaChi = $("#txtDiaChi").val()
        var thoiGian = $("#txtThoiGian").val()
        var email = $("#txtEmail").val()
        var sdt = $("#txtSDT").val()

        var them = "<tr><td>" + (i++) + "</td><td>" + hoTen + "</td><td>" + diaChi + "</td><td>" + thoiGian + "</td><td>" + email + "</td><td>" + sdt + "</td></tr>"

        $("table tbody").append(them)
        $("#modalId").modal("hide")
        return true
    })


})