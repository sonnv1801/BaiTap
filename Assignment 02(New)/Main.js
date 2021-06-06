function Tinh(){
  tienvay = +document.getElementById('NhapVay').value ;
  thoigianvay = +document.getElementById('NhapTG').value ;
  tienlai = +document.getElementById('NhapLai').value ;
  NgayGiaiNgan = new Date(document.getElementById('ngayGiaiNgan').value);
   

   
  
  
    var thang = " ";
    var gocConLai = " ";
    var Goc = " " ;
    var Lai = " ";
    var GocLai = "";
    var ngayTra = "";
    var NgayGiaiNgan = new Date(ngayGiaiNgan.value);
    // var now = new Date(ngayGiaiNgan.value);
    // var ngay = now.toLocaleDateString();
  
   
      // gocconLai = tienvay;
      TienGoc = tienvay / thoigianvay;
   
   
   
   
   
   for( var i = 0  ; i < thoigianvay; i++){
    // now = ngay;
     n = i + 1
   
    
     tienlaihangthang = (tienvay *(tienlai/12/100));
     tientrahangthang = TienGoc + tienlaihangthang;
     GocCon = tienvay - TienGoc;
     


  
     if (n>=1){
     NgayGiaiNgan.setMonth(NgayGiaiNgan.getMonth() + 01 )
     ngayTra = ngayTra + NgayGiaiNgan.toLocaleDateString() + "<br>"
     thang = thang  + n + "<br>";
     gocConLai = gocConLai  + (GocCon.toLocaleString()) + "<br>";
     Goc = Goc  + (TienGoc.toLocaleString()) + "<br>";
     Lai = Lai  + (tienlaihangthang.toLocaleString()) + "<br>";
     GocLai = GocLai  + (tientrahangthang.toLocaleString()) + "<br>";
     tienvay -= TienGoc;
     }
     else{
    thang = thang  + n + "<br>";
    gocConLai = gocConLai  + (GocCon.toLocaleString()) + "<br>";
    Goc = Goc  + (TienGoc.toLocaleString()) + "<br>";
    Lai = Lai  + (tienlaihangthang.toLocaleString()) + "<br>";
    GocLai = GocLai  + (tientrahangthang.toLocaleString()) + "<br>";
    tienvay -= TienGoc;
     }
    
     
     console.log("Tháng " + n);
     console.log("Gốc Còn Lại: " +GocCon.toLocaleString());
     console.log("Gốc: " + TienGoc.toLocaleString());
     console.log("Lãi: " + tienlaihangthang.toLocaleString());
     console.log("Gốc + Lãi: " + tientrahangthang.toLocaleString());
     console.log("Thời Hạn Trả: " +NgayGiaiNgan.toLocaleString());
     console.log("--------------")

    
     document.getElementById("newDate").innerHTML = ngayTra ;
     document.getElementById("t").innerHTML = thang ;
     document.getElementById("gocConLai").innerHTML = gocConLai;
     document.getElementById("Goc").innerHTML = Goc;
     document.getElementById("Lai").innerHTML = Lai ;
     document.getElementById("GocLai").innerHTML = GocLai;
    //  document.getElementById("Tonggoc").innerHTML = gocconLai;
    //  document.getElementById("Date").innerHTML = now;
     
 }
}