var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

var spiralOrder = function(matrix) {
    var result = [];
    
    var rows = matrix.length;
    var cols = matrix[0].length;

    var x = 0;
    var y = 0;

    while(rows > 0 && cols > 0){

        
        //Eğer 3ten fazla çift sayı kadar sutün var ise bu blok çalışıyor ki yukarıdan aşağıya devam etsin.
        if(rows === 1){
            for(var i = 0; i < cols; i++){
                result.push(matrix[x][y++]);
            }
            break;
        //Ortadaki sayılarda soldan sağa doğru devam ediyor ve işlem sonlanıyor.
        } else if(cols === 1){
            for(i = 0; i < rows; i++){
                result.push(matrix[x++][y]);
            }
            break;
        }
        
        //İlk adımda spiralimiz soldan sağa doğru başlıyor
        for(i = 0; i < cols - 1; i++){
            result.push(matrix[x][y++]);
        }
        //Sonraki adımda yukarıdan aşağıya doğru devam ediyor
        for(i = 0; i < rows - 1; i++){
            result.push(matrix[x++][y]);
        }
        //Bir sonraki adımda en alta ulaştığında sağdan sola doğru devam ediyor
        for(i = 0; i < cols - 1; i++){
            result.push(matrix[x][y--]);
        }
        //Aşağı tarafta en sola ulaştığında aşağıdan yukarıya devam ediyor ve 
        //cols ve row buradan sonra 1 değerine ulaşıp yukarıdaki if bloklarına giriyor.
        for(i = 0; i < rows - 1; i++){
            result.push(matrix[x--][y]);
        }
        
        x++;
        y++;
        cols -= 2;
        rows -= 2;
    }
    
    return result;
}
console.log(spiralOrder(matrix))