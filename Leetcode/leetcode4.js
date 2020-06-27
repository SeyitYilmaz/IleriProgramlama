a1 = [1,2];
a2 = [2];

var CalculateMedian = function(array1,array2){

    //Parametre olarak gelen dizilerimizin içi boş işe 0 değerini döndürüyoruz. 
    if(array2.length === 0 || array1.length === 0 ){
        return 0;
    }

    //Dizilerimizdeki en büyük sayıyı buluyoruz.
    BigNum1 = Math.max.apply(Math,array1);
    BigNum2 = Math.max.apply(Math,array2);

    //Büyük değerlerimize (X + Y)/2 formülünü uygulayarak istediğimiz median değerini buluyoruz. 
    return (BigNum1+BigNum2) / 2;
};
console.log(CalculateMedian(a1,a2))

