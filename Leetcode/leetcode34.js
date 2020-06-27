var numbers = [1,3,3,4,3]

var FindNumberLocation = function(array,number){
    let length = array.length;
    let first = -1;
    let last = 1;
    var tmp = [];

    for(let i = 0; i<length; i++){
        //Eğer istediğimiz rakam dizimizde bulunmadıysa döngünün o anki adımı sonladıp diğer adıma geçiliyor.
        if(number !== array[i]){
            continue;
        }
        //İlk sayımızı bulduğumuzda i değerini artık güncelleyebiliriz.
        if(first == -1){
            first = i;
            tmp.push(first);
        }
        //last en sondaki değerimizi bulana kadar güncelleniyor.
        last = i;
    }
    
    tmp.push(last);
    //Eğer bir değer elde ettiysek değerimizi döndürüyoruz
    //Etmediysek [-1,1] değerimiz dönüyor.
    if(first != -1){
        //tmp = "[" + first + "," + last + "]";
        return tmp;
    }
    else{
        //tmp = "[-1,0]";
        tmp = [-1,1];
        return tmp;
    }
}

console.log(FindNumberLocation(numbers,3))
