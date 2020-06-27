let factorials = {};
let s = 1;

//İlk rakamımız 1 ve faktöriyeli de 1 olduğundan başta tanımlıyoruz.
factorials[0] = 1
//Bu for döngüsü ile 1'den 9'a kadar olan rakamların faktöriyellerini alıp dizimizin içine atıyoruz.
for (let i = 1; i <= 9; ++ i) {
    s *= i;
    factorials[i] = s;
}

let sum = 0;

//1 ve 2 rakamları kuralımıza uyuyor 
//fakat problemde bu sayılar kabul edilmediğinden 
//i sayımızı 3'ten başlatıyoruz
for (let i = 3; i <= 9999999; ++ i) {

    //Dizimizdeki her bir elemenanı rakamlarına ayırıp
    //daha sonra o rakamların faktöriyellerini topluyoruz.
    let x = String(i).split('').reduce((a, b) => {
        return a + factorials[b];
    }, 0);

    //Topladığımız sonuç eğer sayımıza eşit ise sum değişkenimize ekliyoruz. 
    if (x === i) {
        sum += i;
    }
}
console.log(sum);