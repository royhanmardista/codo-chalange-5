function konversiMenit(menit) {
    /** this fucntion will conversed value of the input to clock base format  */
    var hour = 0;
    while (menit > 59) {
        menit -= 60;
        hour += 1;
    }
    var minutes = menit % 60;
    if (minutes < 10 ) {
        minutes = "0" + minutes;
    }
    return hour +":"+ minutes;    
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00