//Sayımızın çift ise n/2
//Sayımız tek ise 3n+1
//Formüllerini uyguladığımız fonksiyonumuz.
function EvenOdd(num) {
    if(num % 2 == 0) {
      return num / 2;
    }
    else {
      return (3 * num) + 1;
    }
  }
  function SequenceProcess(num) {
    var counter = 1;
    //Sayımızı 1'e eşit olana dek döngüye alıyoruz
    while(num != 1) {
      //Sayımız EvenOdd fonksiyonuna giderek teklik veya çiftlik durumuna göre işlem görecek ve bize yeni sayımızı döndürecek.
      num = EvenOdd(num);
      counter++;
    }
    return counter;
  }
  function BiggestChain() {
    var CurrentNumber;
    var max = 0;
    //Bizden istenen maksimum kontrol değerimiz 1.000.000 olduğu için for döngümüz maksimum değere sabit, istersek parametre olarak girebilirdik.
    for(var i=1; i<1000000; i++) {
      //For döngüsünden gelen her i değerimizi SequenceProcess fonksiyonumuza gönderip geriye i değerimizin kaç kere işlem gördüğünü alıp sequence
      //değişkenimizin içine atıyoruz ki daha sonra karşılaştırma yapabilelim.
      var sequence = SequenceProcess(i);
      //Şu an ki i değerimizin işlem adedi ile bir önceki i değerlerimizdeki en büyük işlem adedine sahip olan i sayımızın işlem adedini karşılaştırıp
      //Eğer yeni i değerimizin işlem adedi büyük ise max değerimizin içine atıyoruz.
      if(sequence > max) {
        max = sequence;
        //En büyük işlem adetli sayımızı bulduğumuza göre bu sayımızı CurrentNumber isimli değişkenimize gönderiyoruz.
        CurrentNumber = i;
      }
    }
    return CurrentNumber;
  }
  //Sonuç olarak gönderdiğimiz sayıyı ekrana bastırıyoruz.
  console.log(BiggestChain());
