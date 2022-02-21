/* Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulan program.
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır. */

//Process nesnesi node.js e ait olan global nesnelerden bir tanesidir ve bize o anki işlemle ilgili  bilgi verir.
//Process in argv özelliği bize array olarak döner ve bu array programı çalıştırırken kullandığımız parametrelerdir.
//process.argv.slice(2) diyerek ilk iki parametreyi çıkartıyoruz.

//Şimdi de dairenin alanı için yarıçap ve piSayısı değişkenlerini tanımlıyorum
let arguments = process.argv.slice(2);
let yaricap = arguments[0]*1
const piSayisi = 3.14;

let alan = piSayisi * (yaricap*yaricap)

console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`)