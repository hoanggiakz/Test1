$(document).ready(function() {
    var i = 0;
    // hoc ky quan doidoi
    $("#modalId").on('bs.shown.modal', function() {
        $(this).find("#txtHoTen").focus()
    })

    function ktraHoTen() {
        var value = document.getElementById("txtHoTen").value
        var regex = /^([A-Z]{1}[a-z]+)(\s[A-z]{1}[a-z]+)+$/

        if (value === null || value === "") {
            spanHoTen.innerHTML = "Họ tên không được rỗng"
            return false
        }
        if (regex.test(value) == false) {
            spanHoTen.innerHTML = "Họ tên không hợp lệ"
            return false
        } else {
            spanHoTen.innerHTML = ""
            return true
        }
    }

    $("#txtHoTen").blur(function() {
        ktraHoTen();
    })

    function ktraSDT() {
        var value = document.getElementById("txtSDT").value
        var regex = /^\d{3}-\d{6}$/

        if (value === null || value === "") {
            spanSDT.innerHTML = "Số điện thoại không được rỗng"
            return false
        }
        if (regex.test(value) == false) {
            spanSDT.innerHTML = "Số điện thoại không hợp lệ"
            return false
        } else {
            spanSDT.innerHTML = ""
            return true
        }
    }

    $("#txtSDT").blur(function() {
        ktraSDT();
    })

    function ktraNgaySinh() {
        var dateInput = document.getElementById("txtDate");
        var spanDate = document.getElementById("spanDate");
        var value = new Date(dateInput.value);

        // Kiểm tra nếu ngày sinh bị bỏ trống
        if (!dateInput.value) {
            spanDate.innerHTML = "Vui lòng nhập ngày sinh";
            return false;
        }

        // Kiểm tra nếu ngày sinh không hợp lệ
        if (isNaN(value.getTime())) {
            spanDate.innerHTML = "Ngày sinh không hợp lệ";
            return false;
        }

        var today = new Date();
        var age = today.getFullYear() - value.getFullYear();
        var monthDifference = today.getMonth() - value.getMonth();
        var dayDifference = today.getDate() - value.getDate();

        // Điều chỉnh tuổi nếu tháng hoặc ngày chưa đến
        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }

        // Kiểm tra tuổi lớn hơn 15 và nhỏ hơn 18
        if (age <= 15 || age >= 18) {
            spanDate.innerHTML = "Tuổi phải trên 15 và dưới 18";
            return false;
        }

        spanDate.innerHTML = "";
        return true;
    }

    $("#txtDate").blur(function() {
        ktraNgaySinh();
    });

    function ktraDiaChi() {
        var value = document.getElementById("txtDiaChi").value
        var regex = /^[A-Za-z\d\s,.\-#]+$/


        if (value === null || value === "") {
            spanDiaChi.innerHTML = "Địa chỉ không được rỗng"
            return false
        }
        if (regex.test(value) == false) {
            spanDiaChi.innerHTML = "Địa chỉ không hợp lệ"
            return false
        } else {
            spanDiaChi.innerHTML = ""
            return true
        }
    }
    $("#txtDiaChi").blur(function() {
        ktraDiaChi();
    })



    function ktraChonKhoa() {
        var value = $(this).find("option:selected");
        var fee = value.data("fee");
        $("#txtHocPhi").val(fee);
    }

    $("#ChonKhoa").change(ktraChonKhoa);

    function ktraAnhDaiDien() {
        var value = document.getElementById("txtPic").value
        var regex = /^[\w]\.(jpg|png|gif)$/

        if (value === null || value === "") {
            spanPic.innerHTML = "Ban chưa nhập ảnh đại diện"
            return false
        }
        if (!regex.test(value) == false) {
            spanPic.innerHTML = "File của bạn không đúng định dạng"
            return false
        } else {
            spanPic.innerHTML = ""
            return true
        }
    }
    $("#txtPic").blur(function() {
        ktraAnhDaiDien();
    })

    // $("#btnLuu").click(function(){
    //     if (!ktraHoTen() ||!ktraSDT() ||!ktraNgaySinh() || !ktraDiaChi() || !ktraChonKhoa()|| !ktraAnhDaiDien()){
    //         alert("Vui lòng nhập đủ thông tin")
    //         return false
    //     }
    $("#btnLuu").click(function() {
        if (!ktraHoTen() || !ktraSDT() || !ktraNgaySinh() || !ktraDiaChi() || !ktraAnhDaiDien()) {
            alert("Vui lòng nhập đủ thông tin");
            return false;
        }

        var hoTen = $("#txtHoTen").val()
        var sdt = $("#txtSDT").val()
        var ngaySinh = $("#txtDate").val()
        var diaChi = $("#txtDiaChi").val()
        var chonKhoa = $("#ChonKhoa").find("option:selected").text();
        var avata = $("#txtPic").val()

        var them = "<tr><td>" + (i++) + "</td><td>" + hoTen + "</td><td>" + sdt + "</td><td>" + ngaySinh + "</td><td>" + diaChi + "</td><td>" + chonKhoa + "</td><td>" + avata + "</td></tr>"
        $("table tbody").append(them)
        $("#modalId").modal("hide")
        return true

        // var hoTen = $("#txtHoTen").val();
        // var sdt = $("#txtSDT").val();
        // var ngaySinh = $("#txtDate").val();
        // var diaChi = $("#txtDiaChi").val();
        // var chonKhoa = $("#ChonKhoa").find("option:selected").text();
        // var avata = $("#txtPic").val();

        // var them = "<tr><td>" + (i++) + "</td><td>" + hoTen + "</td><td>" + sdt + "</td><td>" + ngaySinh + "</td><td>" + diaChi + "</td><td>" + chonKhoa + "</td><td>" + avata + "</td></tr>";
        // $("table tbody").append(them);
        // $("#modalId").modal("hide");
        // return true;
    })

})