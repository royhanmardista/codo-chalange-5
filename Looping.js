//First Question : 1. Melakukan Looping Menggunakan While ------------------------------------------------------------------------------------------------------

//this code will repeatedly print "I love coding" 18 times
console.log("LOOPING PERTAMA");
var i = 2;
while (i<21) {    
    console.log(i +" - I love coding");
    i+=1;
}

//this code will repeatedly print "I will become fullstack developer" 18 times with backward numbering
console.log("LOOPING KEDUA");
var j = 20;
while (j>1) {    
    console.log(j +" - I will become fullstack developer");
    j-=1;
}

//Second Question : 2. Melakukan Looping Menggunakan For -----------------------------------------------------------------------------------------------------------

//this code will do similar things with the former code, but using for syntax
console.log("LOOPING PERTAMA");
for (k = 1; k < 21; k++) {
    console.log(k +" - I love coding");
}

//this code will do similar things with the former code, but using for syntax with backward numbering
console.log("LOOPING KEDUA");
for (l = 20; l > 0; l--) {
    console.log(l +" - I will become fullstack developer");
}

//Third Question : 3. Angka Ganjil dan Genap ------------------------------------------------------------------------------------------------------------------------
// This code will count from 1 to 100 and determine whether the number is odd or even
console.log("LOOPING PERTAMA");
for (m = 1; m <= 100; m++) {
    console.log("counter sekarang = " + m);
    if (m % 2 === 0) {
        console.log("GENAP");
    } else {
        console.log("GANJIL");
    }
}

// This code will count from 1 to 100 with the interval of 2 and determine whether the number is multiples of 3
console.log("LOOPING KEDUA");
for (n = 1; n <= 100; n+=2) {
    console.log("counter sekarang = " + n);    
    if (n % 3 === 0) {
        console.log(n + " kelipatan 3");
    } else {
        console.log("");
    }
}

// This code will count from 1 to 100 with the interval of 5 and determine whether the number is multiples of 6
console.log("LOOPING KETIGA");
for (O = 1; O <= 100; O+=5) {
    console.log("counter sekarang = " + O);    
    if (O % 6 === 0) {
        console.log(O + " kelipatan 6");
    } else {
        console.log("");
    }
}

// This code will count from 1 to 100 with the interval of 9 and determine whether the number is multiples of 10
console.log("LOOPING KEEMPAT");
for (P = 1; P <= 100; P+=9) {
    console.log("counter sekarang = " + P);    
    if (P % 10 === 0) {
        console.log(P + " kelipatan 10");
    } else {
        console.log("");
    }
}