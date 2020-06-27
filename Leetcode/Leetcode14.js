var texts = ["flower","flow","flight"]

var findCommenPrefix = function(strings){
    let text = '';
    let length = strings.length;
    for(let i = 0; i<length; i++){
        //İlk kelimenin karakterlerini character adlı değişkene atıyorum ki sonraki kelimelerin karakterlerini karşılaştırabileyim.
        let character = strings[0][i]
        //Şimdi sıra diğer kelimelerin karakterleri ile karşılaştırmada
        for(let j=0;j<length; j++){
            //Eğer karakterlerimizde uyuşan yok ise döngümüz oluşan harfleri döndürüyor.
            if(strings[j][i]!== character){
                return text;
            }
        }
        //Eğer diğer kelimeleri karşılaştırmada kullandığımız for döngüsü tamamlanırsa karakterimiz diğer kelimelerde de var olduğunu anlıyoruz ve
        //text değişkenimizin sonuna karakteri ekliyoruz.
        text = text + character;
        
    }
    return text;
}

console.log(findCommenPrefix(texts))
