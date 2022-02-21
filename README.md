# DaireAlaniHesaplamaNode.js
Bu projeyi node.js javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışmak için oluşturdum. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olacaktır.

**NOT: Process nesnesi node.js e ait olan global nesnelerden bir tanesidir ve bize o anki işlemle ilgili  bilgi verir.
       Process in argv özelliği bize array olarak döner ve bu array programı çalıştırırken kullandığımız parametrelerdir.
       process.argv.slice(2) diyerek ilk iki parametreyi çıkartıyoruz.**

Yarıçapı konsoldan parametre olarak almak için process nesnesinden yararlandım. Daha sonra da dairenin alanını hesaplamak için değişkenleri ve formülleri tanımladım ve ekrana yazdırdım.

```
//Şimdi de dairenin alanı için yarıçap ve piSayısı değişkenlerini tanımlıyorum
let arguments = process.argv.slice(2);
let yaricap = arguments[0]*1
const piSayisi = 3.14;

//Formülü tanımlama
let alan = piSayisi * (yaricap*yaricap)

//Ekrana Yazdırma
console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`)
```

**Sonuc:**

![node jsçıktı](https://user-images.githubusercontent.com/86554799/155016789-170f88e8-11cd-432c-b3fb-6f4eb5b94e1b.jpg)

        
        
        
      
      
      
      


