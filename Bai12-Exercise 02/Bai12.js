
var MyArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for(i = 0 ; i < MyArray.length ; i++)
    if(i % 5 == 0){
        document.writeln("<p> Những số chia hết cho 5 là: <p/>" +i);
     }
     document.getElementById("mangBanDau").innerHTML = "Mảng ban đầu: " + MyArray;
    
 