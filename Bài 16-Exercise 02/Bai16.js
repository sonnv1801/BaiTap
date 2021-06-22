
 function btn(){
    var str = document.getElementById("daoChuoi").value;
    var rev_str = str.split('').reverse().join('');
     document.getElementById("inra").innerHTML = 'Chuỗi đảo ra được là: ' + rev_str;
     document.getElementById("inra").style.color =  "red";
}