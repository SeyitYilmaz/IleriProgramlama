var digits = ['0','1','2','3','4','5','6','7','8','9']

function Permutate(n, array){
  const arrayLength = array.length
  for (let i = 0; i < n-1; i++) {
    let k,l
    //Burada elimizde bulunan dizinin her bir elemanını bir önceki sayı ile karşılaştırarak en küçük sayıyı elde ediyoruz.
    for (let j = 0; j < array.length-1; j++) {
    if(array[j] < array[j+1]){
      k=j;
      }
    }
    for (let j = k; j < array.length; j++) {
      if(array[k] < array[j]){
        l = j
      }
    }
    //Dizimizin k sırasındaki elemanını geçici bir değişkene atıyoruz ki k sırasına başka bir eleman getirdiğimizde eski değerimiz silinmesin.
    let tmp = array[k]
    array[k] = array[l]
    array[l] = tmp
    //Dizimizdeki bir sayıyı kullandığımızda tekrar o sayıdan başlatmak için begin değişkenimizi 1 attırıyoruz.
    let begin = k+1
    //Dizimideki bir sayıya başta olma hakkı verildiğinde dizimizde kalan sayılarımızın uzunluğu bizim while döngümüzün sınırını belirler.
    let end = arrayLength-1
    while(begin < end){
      tmp = array[begin]
      //Başta olan sayımızın işi bittikten sonra sayımızı en sona atıyoruz ve döngümüz bütün sayıları taradığında sayılarımız ortada birleşecek ve döngümüz tamamlanacak.
      array[begin] = array[end]
      array[end] = tmp;
      begin += 1
      end -= 1
    } 
  }
  //Dizimizdeki karakterleri birleştirip 10 basamaklı sayımızı elde ediyoruz.
  return array.join("")
}
console.log(Permutate(1000000,digits));

