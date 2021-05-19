       var MyArray = [2,4,6,8,1,3,5,7,9];

document.getElementById("giaTriBanDau").innerHTML = "Giá Trị Ban Đầu: " +MyArray;

      var Array = MyArray.sort(function comback(a,b){
        return b - a 
      });
document.getElementById("sapXepGiamDan").innerHTML = "Sắp Xếp Giảm Dần: " + Array;
