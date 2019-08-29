// First Question : Tugas 1 -----------------------------------------------------
// Fungsi shoutOut()
function shoutOut() {
    /* this fucntion will return "Halo Function!" */
    return "Halo Function!";
}
console.log(shoutOut());

// Second Question : Tugas 2 ----------------------------------------------------
function calculateMultiply(num1, num2) {
    /**this function will return num1 times num2 */
    return num1*num2;
}
console.log(calculateMultiply(5,2));

// Third Question : Tugas 3 ------------------------------------------------------
function processSentence(name,age,address,hobby) {
    /**this function will return a conbined sentences from inputs */
    return "Nama saya "+ name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);