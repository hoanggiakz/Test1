var i = 1;

function Luu() {
    var ht, sdt, gt, dc, ns, kh, hp;
    var nn = new Array(); // nhieu ngon ngu: Array

    // ho ten: textbox
    ht = document.getElementById("txtht").value;

    //gioitinh : radio 
    // duyệt radio  lấy value
    var rad = document.querySelectorAll("input[type='radio']");
    rad.forEach(function(ch) {
        if (ch.checked) {
            gt = ch.value; // radio
        }
    })

    // ngon ngữ: checkbox --> lấy value
    // duyệt checkbox

    var chk = document.querySelectorAll("input[type='checkbox']");
    chk.forEach(function(ch) {
        if (ch.checked) {
            nn.push(ch.value);
        }
    })

    // so dien thoai: textbox
    sdt = document.getElementById("txtsdt").value;
    //ngay sinh : date
    ns = document.getElementById("txtns").value;
    // dia chi : textbox
    dc = document.getElementById("txtdc").value;

    // hocphi: textbox  -- > value cua option select lstkh
    hp = document.getElementById("lstkh").value;

    // khoa hoc: select : text cua option
    // lay text cua option select lstkh
    var sel = document.getElementById("lstkh");
    var kh = sel.options[sel.selectedIndex].text;

    //luu bang
    // có bảng --> tạo row insertRow() --> tạo cột: insertCell()
    var tbl = document.getElementById("tblds");

    // tạo row
    var row1 = tbl.insertRow(i);

    var cot1 = row1.insertCell(0);
    var cot2 = row1.insertCell(1);
    var cot3 = row1.insertCell(2);
    var cot4 = row1.insertCell(3); // ngon ngu checkbox

    var cot5 = row1.insertCell(4);
    var cot6 = row1.insertCell(5);
    var cot7 = row1.insertCell(6);
    var cot8 = row1.insertCell(7);
    var cot9 = row1.insertCell(8);

    cot1.innerHTML = i;
    cot2.innerHTML = ht;
    cot3.innerHTML = gt;
    cot4.innerHTML = nn;
    cot5.innerHTML = sdt;
    cot6.innerHTML = ns;
    cot7.innerHTML = dc;
    cot8.innerHTML = kh;
    cot9.innerHTML = hp;

    i++;
}

function Chonkh() {
    // alert("BBB");

    // lay value cau lstkh --> xuat ra txthp
    var hp = document.getElementById("lstkh").value;
    document.getElementById("txthp").value = hp;
}