//Bu fonksiyondan elde edeceğimiz sayılar ile p sayıları elde edeceğiz.
function p(x) {
    //Pn=n(3n−1)/2 formülümüzü uyguluyoruz.
    return x * (3 * x - 1) / 2;
}
  
  //Gönderilen sayının pentagonal number olup olmadığının kontrolünü yapıyoruz
  //Eğer sonuç 5 çıkarsa true başka sayı çıkarsa false döndürüyor.
  function q(x) {
    return Math.sqrt(24 * x + 1) % 6 == 5;
  }
  
  ans = 0;
  for (var k = 1; ans == 0; k++) {
    //K sayısını p fonksiyonumuza gönderip ilk p değerimizi elde ediyoruz.
    var pk = p(k);

    for (var j = 1; j < k; j++) {
      var pj = p(j);
      //Oluşturduğumuz sayıların birbiri ile toplanıp ve birbiri ile çıkartıldığında
      //eğer sonuç beşgen bir sayıya eşit ise true döndürüyor ve cevaba ekleniyor.
      if (q(pk - pj) && q(pk + pj)) {
        //Eğer her 2 değerimiz bir beşgen sayıya eşit ise sorunun cevabı olan soruda istenen 
        //D = |pk - pj| sonucunu ans değişkenimize atılıyor
        ans = pk - pj;
        break;
      }
    }
  }
  console.log(ans)