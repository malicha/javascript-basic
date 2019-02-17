//tipe data
var nama = "malicha"
console.log(nama)

let angka  = '14'
console.log(angka);

let person = ["malicha", 16];
console.log(person)

let orang = {
    nama : 'malicha',
    umur : 18
}
console.log(orang)



//aritmethic operators
let x = 12;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);


//assignment operators
let xi = 12;
xi += 3;
console.log(xi)


//exuality operators
let s = 1;
 console.log(s === 1);
 console.log(s !== 1);


 //lose exuality
 console.log(s >= 6)
 

 //ternary operator

//pelanggan yg punya 50-100 point 'silver' customer, lebih dari 100 'gold' , kurang dari 50 'perunggu'

let point = 10;
let type = point <50 ? 'perunggu' : point >= 100 ? 'gold' : 'silver';

console.log(type);


//logical operators

//logical and (&&)
let u = true
console.log(2 && 2);

//logical or (||)
console.log(u || true);

let warnaPelanggan = "merah"
let defaultColor = "pink"
let curentColor = warnaPelanggan || defaultColor;
console.log(curentColor)


//predence operators

let h = (6 * 4) + 4;
console.log(h)

//swaping variable

let q = "biru";
let g = "pink";

let v = g;
q = g;
g = v;
console.log(g);



