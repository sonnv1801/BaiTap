function convert(t){
          height = +document.getElementById('height').value;
          weight = +document.getElementById('weight').value;
          your_bmi = weight/(height*height);
       if (your_bmi < 18.5) info = 'Gầy , Nguy cơ phát bệnh: Thấp, Nên Ăn Uống Đều Độ , Tập Thể Dục Thường Xuyên!';
            else if ( 18.5 < your_bmi && your_bmi < 24.9) info = 'Bình thường , Nguy cơ phát bệnh: Trung Bình, Hãy Duy Trình Phong Độ nhé !';
            else if (25.0 < your_bmi && your_bmi < 29.9) info = 'Hơi béo ,  Nguy cơ phát bệnh: Cao, Hãy Ăn Nhiều Rau , Tập Thể Dục Để  Giảm Cân Nhé!';
            else if (30.0 < your_bmi && your_bmi < 34.9) info = 'Béo phì cấp độ 1 , Nguy cơ phát bệnh: Cao, Hãy Ăn Nhiều Rau , Tập Thể Dục Đều Độ Để Giảm Cân Nhé!';
            else if (35.0 < your_bmi && your_bmi < 39.9) info = 'Béo phì cấp độ 2 , Nguy cơ phát bệnh: Rất Cao, Hãy Ăn Nhiều Thật Nhiều Rau Thay Vì Ăn Thịt , Tập Thể Dục Đều Độ Để Giảm Cân Nhé!';
            else if (your_bmi > 40) info = 'Béo phì độ 3 , Nguy cơ phát bệnh: Nguy Hiểm , Hãy Ăn Thật Nhiều Rau Thay Vì Ăn Thịt Và Tới Bác Sĩ Để Có Phương Án Đều Trị Tốt Nhất, Tập Thể Dục Đều Độ Để Giảm Cân Nhé!'
       Xin_info = '<div>';
       Xin_info += '<h3>Bạn ' + info + '</h3>';
       Xin_info += '</div>';
       document.getElementById('h_bmi').value = your_bmi;
       document.getElementById('result').innerHTML = Xin_info;
      }
      