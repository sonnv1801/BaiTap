
// const showClass = document.querySelector('.show-class');

// Tạo danh sách sinh viên của một lớp có 10 sinh viên

// Đầu tiên tạo 1 class Student

class Student {
    // có các giá trị như: name , mark , gender , subjects
    constructor(name, mark, gender, subjects, ){
        // gán
        this.name = name;
        this.mark = mark;
        this.gender = gender;
        this.subjects = subjects
    }
}
// danh sách
var danhSach = [];

var user1 = new Student("Nguyễn Văn A", 0, "Nam", [{"Ly": 0},{"Toan": 1}]);
danhSach.push(user1);
var user2 = new Student("Nguyễn Văn B", 2, "Nữ", [{"Ly": 1},{"Toan": 2}]);
danhSach.push(user2);
var user3 = new Student("Nguyễn Văn C", 3, "Nam", [{"Ly": 2},{"Toan": 3}]);
danhSach.push(user3);
var user4 = new Student("Nguyễn Văn D", 4, "Nam", [{"Ly": 3},{"Toan": 4}]);
danhSach.push(user4);
var user5 = new Student("Nguyễn Văn E", 7, "Nữ", [{"Ly": 8},{"Toan": 5}]);
danhSach.push(user5);
var user6 = new Student("Nguyễn Văn F", 6, "Nam", [{"Ly": 5},{"Toan": 6}]);
danhSach.push(user6);
var user7 = new Student("Nguyễn Văn G", 7, "Nam", [{"Ly": 6},{"Toan": 7}]);
danhSach.push(user7);
var user8 = new Student("Nguyễn Văn H", 8, "Nữ", [{"Ly": 7},{"Toan": 8}]);
danhSach.push(user8);
var user9 = new Student("Nguyễn Văn Y", 9, "Nam", [{"Ly": 9},{"Toan": 9}]);
danhSach.push(user9);
var user10 = new Student("Nguyễn Văn J", 10, "Nam", [{"Ly": 9},{"Toan": 10}]);
 danhSach.push(user10);

 // danh sách dự phòng copy từ danh sách trên
 var backupDanhSach = [...danhSach];


// In ra danh sách sinh viên ban đầu

 function filterOne(){
     console.log("In ra danh sách sinh viên ban đầu")
    danhSach = [...backupDanhSach];
    console.log(danhSach)
 }

// Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ lớn đến bé

 function sapxepDanhSachTuBeDenLon(arr){
     // có 1 function()
     function compareMarkASC(a,b){
         // Nếu mà a < b thì lấy giá trị bé hơn là return  1;
         if(a.mark < b.mark){
             return 1;
         }
          // Nếu mà a > b thì lấy giá trị bé hơn là return -1;
         if(a.mark > b.mark){
             return -1;
         }
          // Nếu mà a = b thì lấy giá trị bé hơn là return 0;
         return 0;
     }
     var danhSachDiemASC = arr.sort(compareMarkASC); // dùng hàm sort() để sắp xếp 

     console.log("Danh sách sinh viên đã sắp xếp theo thứ tự điểm tích luỹ từ Lớn đến Bé")
     console.log(danhSachDiemASC)
 }
 // Bấm vào onclick() để in ra function sapxepDanhSachTuBeDenLon(danhSach)
function filterTwo(){
    // tạo 1 onclick bên html
    sapxepDanhSachTuBeDenLon(danhSach); 
}
// Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ bé đến lớn
function sapxepDanhSachTuLonDenBe(arr){
    function compareMarkESC(a,b){
        // Nếu mà a < b thì lấy giá trị bé hơn là return -1
        if(a.mark < b.mark){
            return -1;

        }
        // Nếu mà a > b thì lấy giá trị bé hơn là return 1
        if(a.mark > b.mark){
            return 1;
        }
        // Nếu mà a = b thì lấy giá trị bé hơn là return 0
        return 0;
    }
    var danhSachDiemESC = arr.sort(compareMarkESC); // dùng hàm sort() để sắp xếp 

    console.log("Danh sách sinh viên đã sắp xếp theo thứ tự điểm tích luỹ từ Bé đến Lớn")
    console.log(danhSachDiemESC)
}
// Bấm vào onclick() để in ra function sapxepDanhSachTuLonDenBe(danhSach)
function filterThere(){
    sapxepDanhSachTuLonDenBe(danhSach);
   
}
// Lọc ra danh sách sinh viên là nữ và có điểm tích luỹ lớn hơn 5.0

function locSinhVienSinhVienNuCoDiemLonHon5(arr){
    // Dùng hàm filter() để lọc ra các phần tử để thoả trên mảng

    var SinhVienNuCoDiemLonHon5 = arr.filter(

        // lọc giới tính === " NỮ" và điểm tích luỹ lớn 5
        student => student.gender === 'Nữ' && student.mark > 5
    );
    console.log("Danh sách sinh viên đã lọc là Nữ và có điểm tích luỹ Lớn hơn 5.0")
    console.log(SinhVienNuCoDiemLonHon5);
}
// Bấm vào onclick() để in ra function locSinhVienSinhVienNuCoDiemLonHon5(danhSach)
function filterFor(){
    locSinhVienSinhVienNuCoDiemLonHon5(danhSach)
}
// Lọc ra danh sách sinh viên có điểm toán hoặc lý lớn hơn 8.0

 function locSinhVienCoDiemToanLyLonHon8(arr){
     // Dùng hàm filter() để lọc ra các phần tử để thoả trên mảng

    const svCoDiemToanLyLonHon8 = arr.filter(
        // lọc môn học  có điểm lý hoặc điểm toán  lớn hơn 8
        student => student.subjects[0].Ly > 8 || student.subjects[0].Toan > 8
    );
    console.log("Lọc ra danh sách sinh viên có điểm toán hoặc lý lớn hơn 8.0");
    console.log(svCoDiemToanLyLonHon8)
 }
// Bấm vào onclick() để in ra function locSinhVienCoDiemToanLyLonHon8(danhSach)
 function filterFine(){
    locSinhVienCoDiemToanLyLonHon8(danhSach)
 }
// Tìm sinh viên có điểm môn Toán cao nhất và thấp nhất
 function sinhvienCoDiemToanCaoNhatVaThapNhat(arr){
     // dùng hàm reduce so sánh 2 giá trị trong mảng nếu prev > curr thì nó lấy cái lớn hơn
    var maxToan = arr.reduce((prev, curr) => (prev.subjects[1].Toan > curr.subjects[1].Toan) ? prev : curr);
    // dùng hàm reduce so sánh 2 giá trị trong mảng nếu prev < curr thì nó lấy cái bé hơn
    var minToan = arr.reduce((prev, curr) => (prev.subjects[1].Toan < curr.subjects[1].Toan) ? prev : curr);

    console.log("Sinh viên có điểm môn Toán cao nhất")
    console.log(maxToan)
    console.log("Sinh viên có điểm môn Toán thấp nhất")
    console.log(minToan)
 }
 // Bấm vào onclick() để in ra function sinhvienCoDiemToanCaoNhatVaThapNhat(danhSach)
 function filterSix(){
    sinhvienCoDiemToanCaoNhatVaThapNhat(danhSach)
 }
// Xoá khỏi danh sách sinh viên có điểm tích luỹ là 0
 function xoaSinhVien(arr){
     // dùng hàm filter() để lọc ra cách sinh viên có điểm tích luỹ khác 0
    danhSach = arr.filter(student => {return student.mark !==0; }) // nếu mark mà khác 0
    console.log("Xoá khỏi danh sách sinh viên có điểm tích luỹ là 0")
    console.log(danhSach)

    return danhSach;
 }

 // Bấm vào onclick() để in ra function xoaSinhVien(danhSach)
 function filterSeven(){
    xoaSinhVien(danhSach)
 }
// Thêm 03 sinh viên mới vào danh sách.
 function themSV(arr){
     // tạo sẵn 3 sinh viên mới
     let user11 = new Student("Nguyễn Văn K", 3, "Nam", [{"Ly": 6},{"Toan": 7}]);
     let user12 = new Student("Nguyễn Văn H", 4, "Nữ", [{"Ly": 7},{"Toan": 8}]);
     let user13 = new Student("Nguyễn Văn G", 5, "Nam", [{"Ly": 8},{"Toan": 10}]);
// dùng hàm push() để thêm 2 cái mảng đc tạo sẵn

   arr.push(user11, user12, user13);
     console.log(arr)
 }
// Bấm vào onclick() để in ra function themSV(danhsach)
 function filterEight(){
    themSV(danhSach)
 } 

 // Cảm ơn đã xem :))
