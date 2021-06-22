
// tạo 1 mảng MyArry
var MyArray = [5,10,15,20,55,20,1,6,0,3,11,18];
// Tạo 1 function
function chiahetcho5(){
    var a = [] // a = [] bằng 1 mảng
    // dùng for of 
    for(const b of MyArray){

    // nếu b chia hết cho 5 == 0
        if(b % 5 == 0){
            a.push(b) // thì push() chuỗi đó vào a
          }
    }
    return a
}
    document.getElementById("mangBanDau").innerHTML = "Mảng ban đầu: " + MyArray;
    document.getElementById("mangBanDau1").innerHTML = "Chia hết Cho 5: " + chiahetcho5(MyArray);// in ra
    
    
 