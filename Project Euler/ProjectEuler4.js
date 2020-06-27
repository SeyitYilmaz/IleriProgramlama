var answer = function(){
    let minValue = 100;
    let maxValue = 1000;
    let max = 0;
    let result;
    //Her boyutu 100den 1000e kadar sayı barındıran 2 boyutlu dizi oluşturuyoruz.
    for(let i = minValue; i< maxValue; i++){
        for(let j = minValue; j<1000; j++){
            //Her boyuttaki sayıları sırası ile çarpma işlemi uyguluyoruz ve result değişkenimizin içine atıyoruz.
            result = i*j;
            //Bu if kontrolünü koymamızın nedeni i değerimiz 100 iken ve j değerimiz 999 iken sonuç 99900 oluyor
            //Sonraki adımda i=101 ve j=100 oluyor ve sonuç 10.100 oluyor.
            //Yani burada az önce i=100ken ve j=101 iken de aynı sonucu alıyoruz ve bu adımları atlayıp
            //Performans ve Zaman kaybını engelliyoruz.
            if(result > max){
                //Bu kontrolde çıkan sayımızı ters çevirip eski sayımız ile karşılaştırıyoruz.
                //Sonuç true dönerse sayımız tersten okunsa bile aynı sonuca ulaşıyoruz.
                if(result.toString().split("").reverse().join("") == result.toString()){
                    //Bu kurala en uygun ve en büyük sayımızı max değişkenine atıyoruz.
                    max = result;
                }
            }
        }   
    }
    return max;
}

console.log("En büyük palindrom sayı = "+answer());
