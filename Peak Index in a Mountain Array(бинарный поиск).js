

Примитивнй подход для небольших массивов:

// Своими словами: просто при помощи цикла for перебираем числа, находим пик и возрващаем индекс пикового числа(i) 
var mountainPeakArray = function(arr) {
    arr = [10,12,14,24,36,44,67,100,58,47,36,33,11,4];
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i]) {
            return arr[i];
        }
    }
             throw new Error ("Impossible state");       
};

mountainPeakArray();


Бинарный поиск: 

var peakIndexMountainArray  = function(arr) {
    //1. Объявить гранциы для поиска (left, right), которые будем сужать;
    //2. бежать циклом пока right - left > 1;
        //2.1. делим пополам;
        //2.2. проверяем, где находится пик;
        //2.2.1. если справа, то двигаем границу left к пику;
        //2.2.1. если слева, то двигаем границу right к пику;
    //3. вернуть left + 1(right - 1);

     arr = [10,12,14,24,36,44,67,100,58,47,36,33,11,4]; //всего 14 цифр
 
let left = -1; //левее этого числа ответа нет, -1 за границей массива
let right = arr.length // правее этого ответа нет и быть не может, это тоже граница массива.


while (right-left > 1) {
    let middle = Math.floor((left + right) / 2); 
    if (arr[middle] < arr[middle + 1]) {
        left = middle;
    } else {
        right = middle;
    }
} 
return left + 1; // или right -1; ГОРА /'\

}

