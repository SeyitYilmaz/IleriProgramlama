var matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ];

    var searchMatrix = function(matrix, target) {

        var rowLength = matrix.length;
        var colLength = matrix[0].length;
        
        
        var index = colLength - 1;
        
        //Kullandığımız dizinin boyutu kadar dizimizi okuyoruz.
        for(var i = 0; i < rowLength; i++) {

            //Dizimizdeki her boyutun elemanlarını tarayıp hedefimiz ile karşılaştırıyoruz.
            //Eğer index değerimiz 0dan küçük veya dizimde kontrol ettiğimiz eleman hedefimizden büyük ise
            //Artık dizimizin değeri ile hedefi karşılaştırmak için bir sonraki adıma geçiyoruz.
            while(index>0 && target < matrix[i][index]) {
                index--;
            }

            //Eğer dizimizin değeri hedef ile uyuşuyor ise true
            if(matrix[i][index] === target) {
                return true;
            }
        }
        
        //Uyuşmuyor ise false döndürüyoruz.
        return false;
    };
console.log(searchMatrix(matrix,3))


