// First Question : 1. Menyusun Barisan Bintang---------------------------------------------
// this code will print rows1 of star
var rows1 = 5; //input 
for (i = 0; i < rows1; i++) {
    console.log("*\n");
}

// Second Question : 2. Menyusun Barisan Bintang Dengan Nested Looping---------------------
// This code will print rows2 of stars in rows2 lines
var rows2 = 5;
var star = "";
for (j = 0; j < rows2; j++) {
    for (k = 0; k < rows2; k++) {
        star += "*";
    }
    console.log(star);
    star = "";
}

//Third Question : 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping------------------
// This code will print stairs
var rows3 = 5;
var star = "";
for (l = 1; l <= rows3; l++) {
    for (m = 0; m < l; m++) {
        star +=  "*";
    }
    console.log(star);
    star = "";
}
