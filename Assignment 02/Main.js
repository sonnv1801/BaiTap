  function Tinh(){
       tienvay = +document.getElementById('NhapVay').value ;
       thoigianvay = +document.getElementById('NhapTG').value ;
       tienlai = +document.getElementById('NhapLai').value ;
       NgayGiaiNgan = +document.getElementById('ngayGiaiNgan').value;
        

        
        
        // var tang = now.setMonth(now.getMonth()+1)
       
         var thang = " ";
         var gocConLai = " ";
         var Goc = " " ;
         var Lai = " ";
         var GocLai = "";
         var now = new Date(ngayGiaiNgan.value);
         var ngay = now.toLocaleDateString();

        gocconLai = tienvay;
        TienGoc = tienvay / thoigianvay;
        
        for( let i = 1 ; i<= thoigianvay; i++){

          now = ngay;
         
          tienlaihangthang = (tienvay *(tienlai/12/100));
          tientrahangthang = TienGoc + tienlaihangthang;
          GocCon = tienvay - TienGoc;
          thang = thang  + i + "<br>";
          gocConLai = gocConLai  + (GocCon.toLocaleString()) + "<br>";
          Goc = Goc  + (TienGoc.toLocaleString()) + "<br>";
          Lai = Lai  + (tienlaihangthang.toLocaleString()) + "<br>";
          GocLai = GocLai  + (tientrahangthang.toLocaleString()) + "<br>";
          tienvay -= TienGoc;

          console.log("Tháng " +i);
          console.log("Gốc Còn Lại: " +GocCon.toLocaleString());
          console.log("Gốc: " + TienGoc.toLocaleString());
          console.log("Lãi: " + tienlaihangthang.toLocaleString());
          console.log("Gốc + Lãi: " + tientrahangthang.toLocaleString());
        //  console.log(now);

          document.getElementById("newDate").innerHTML = now ;
          document.getElementById("t").innerHTML = thang ;
          document.getElementById("gocConLai").innerHTML = gocConLai;
          document.getElementById("Goc").innerHTML = Goc;
          document.getElementById("Lai").innerHTML = Lai ;
          document.getElementById("GocLai").innerHTML = GocLai;
          // document.getElementById("TongGoc").innerHTML = +Math.round(gocconLai) ;
          
      }
   }