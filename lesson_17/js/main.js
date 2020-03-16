console.log('Sample JavaScript #3 HW #17');


var counter = (function() {
    var count = 0;
    return function(n) {
        count = n !== undefined ? n : count;
        return count++;
    }
}());
console.log('---1');
console.log(counter()); //0
console.log(counter()); //1
console.log(counter(100)); //100
console.log(counter()); //101
console.log(counter(500)); //500
console.log(counter()); ///501
console.log(counter(0)); //0
console.log(counter()); //1

var counting = (function() {
    var count = 0;
    return {
        value(n) {
            n !== undefined ? count = n : count;
            return count;
        },
        increment() { count++; },
        decrement() { count--; }
    }
}());
console.log('---2');
console.log(counting.value()); //0
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value()); //3
counting.decrement();
counting.decrement();
console.log(counting.value()); //1
console.log(counting.value(100)); //100
counting.decrement();
console.log(counting.value()); //99
console.log(counting.value(200)); //200
counting.increment();
console.log(counting.value()); //201

let myPrint = (a, b, res) => `${a}^${b}=${res}`;
let myPow = (a, b, callback) => {
    let pow = (x, n) => {
        if (n !== 1) return x *= pow(x, n - 1);

        return x;
    };

    return callback(a, b, pow(a, b));
};

console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8


let yearNow = new Date().getFullYear();

function fullInfo() {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}

let car = {
    engine: 2000,
    model: 'Chevrolet Lacetti',
    name: 'brend',
    year: 2010,
    info: fullInfo,
    get used() { return this.year !== yearNow ? 'used' : 'new'; },
    set used(value) {
        if (value === 'new' && this.year < yearNow) {
            this.year = yearNow;
        }
    }
}
let car2 = {
    engine: 5000,
    model: 'Infinite FX50 AWD',
    name: 'brend',
    year: 2020,
    info: fullInfo,
    get used() { return this.year !== yearNow ? 'used' : 'new'; },
    set used(value) {
        if (value === 'new' && this.year < yearNow) {
            this.year = yearNow;
        }
    }
}
console.log(car.info()); // Chevrolet Lacetti, 2000, year 2010, used
car.used = 'new';
console.log(car.info()); // Chevrolet Lacetti, 2000, year 2019, new -- год изменен
car.used = 'used';
console.log(car.info()); // Chevrolet Lacetti, 2000, year 2019, new -- изменения не выполняются
console.log(car2.info()); // Infinite FX50 AWD, 5000, year 2019, new
car.used = 'used';
console.log(car2.info()); // Infinite FX50 AWD, 5000, year 2019, new -- изменения не выполняются


arrr = [12, 23, 100, 34, 56, 9, 233];

function myMax(arr) {
    return Math.max.apply(Math, arr);
}
console.log(myMax(arrr)); //233
console.log('-- -- -- --');


function myMul(a, b) {
    return a * b;
}
let myDouble = myMul.bind(null, 2);
let myTriple = myMul.bind(null, 3);

console.log(myDouble(3)); // = myMul(2, 3) = 6
console.log(myDouble(4)); // = myMul(2, 4) = 8
console.log(myDouble(5)); // = myMul(2, 5) = 10
console.log(myTriple(3)); // = myMul(3, 3) = 9
console.log(myTriple(4)); // = myMul(3, 4) = 12
console.log(myTriple(5)); // = myMul(3, 5) = 15

console.log('-- -- -- --');
var someArray = [12, 12, 234, 234];

function myUniq(arr) {
    var set = new Set();
    for (var i = 0; i < arr.length; i++) {
        set.add(arr[i]);
        console.log(arr[i]);
    }
    console.log(set.size);
    return set;
}

console.log(myUniq(someArray));


/*
 * #1
 *
 * �������� ������� counter(), ������� ������ ����������� ������� � ������� ���������:
 * ������� ����� ��������� ����� � �������� ��������� counter(n)
 * ���� ����� �������� � ������� � ���� ���������� � ���������� �����
 * ���� ��� � �� ���� ������������
 */

// console.log(counter()); // 0

// console.log(counter()); // 1

// console.log(counter(100)); // 100

// console.log(counter()); // 101

// console.log(counter(500)); // 500

// console.log(counter()); // 501

// console.log(counter(0)); // 0

// console.log(counter()); // 1

/*
 * #2
 *
 * �������� ������� counting, ������� ������ ����������� ��� ������ � ������� ���������:
 * �������������� �������� �������� � 0
 * counting.value() � ���������� �������� ��������
 * counting.value(n) � ������������� �������� ��������, ���������� ����� ��������
 * counting.increment() � ����������� �������� �������� �� 1
 * counting.decrement() � ��������� �������� �������� �� 1
 */

// console.log(counting.value()); // 0

// counting.increment();

// counting.increment();

// counting.increment();

// console.log(counting.value()); // 3

// counting.decrement();

// counting.decrement();

// console.log(counting.value()); // 1

// console.log(counting.value(100)); // 100

// counting.decrement();

// console.log(counting.value()); // 99

// console.log(counting.value(200)); // 200

// counting.increment();

// console.log(counting.value()); // 201

/*
 * #3
 *
 * �������� ������� myPow(a, b, myPrint). ������ ���������� �������� ��� �������� ���������� ���������� ����� a � ������� b.
 * ������� myPrint(a, b, res) � ���������� �������, ������� ������ ������������ �� ���������� a, b, res ������ ���� 'a^b=res' � ���������� ��
 * myPrint() ������ ���� �������� � myPow() ��� �������� � ������� ������ ��� callback-�������
 * ������� myPow() � �������� ������������� �������� ��������� ��������� myPrint()
 * ��������:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 */

//  console.log(myPow(3, 4, myPrint)); // 3^4=81

// console.log(myPow(2, 3, myPrint)); // 2^3=8

/*
 * #4
 *
 * �������� ��������� ���������� �������� ��� �������� ����������. ���������� ��������� �������, ����������� ��������� ����:
 * ��� ������� car � ����������� � ����������� ��� ������������, ���������� ���������� �������� � �� ���� ����������
 * car.engine � ����� ���������, �������� ����
 * car.model � ������ ����, ������
 * car.name � ����� ����, ������
 * car.year � ��� �������, �����
 * car.used � ������ ��� �������� ��������� ����, ����������� �������� 'used' � 'new'
 *
 * #5
 *
 * ��� ��������� ����� �������� ���������� ����� info(), ��������� �������� ����� this.
 * ������ ����� ������ ����������� � ���������� ������ � ������ ����������� �� ����������, ��������:
 * Chevrolet Lacetti, 2000cc, year 2010, used
 * Infinite FX50 AWD, 5000cc, year 2019, new
 * �������, �������, ������� cc � ����� � ����� �������� � ����������� ��� ������������ ����
 *
 * #6
 *
 * ��� ��������� ����� �������� �������� �������� used, ��������� ��������� (������ � ������).
 * - ����������� ������� ��� ���� ��������������� � ����� ����, ���� � ������� ���������� ����������, ��������, yearNow
 * - ���� ��� ������� ���������� ���������� �� �������� ����, ������ used ������ �������� ����� 'used'
 * - ���� ��� ������� ���������� ��������� � ������� �����, ������ used ������ �������� ����� 'new'
 * - ���� ������� used ��������� �������� 'new', ��� ���� ���� ������� ���������� ���������� �� �������� ����,
 * - ���������� �������� ��� ������� ����������, ��������� � �������� �������� ������� ���
 * - ���� ������� used ��������� �������� 'used', ������ ������ �� �����
 */

// let yearNow = new Date().getFullYear(); // �������� ������� ��� ��� �����

// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2010, used

// car.used = 'new';

// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- ��� �������

// car.used = 'used';

// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- ��������� �� �����������

// console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new

// car.used = 'used';

// console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new -- ��������� �� �����������

/*
 * #7
 * �������� ������� myMax(arr), ������� � �������� ��������� ���������
 * ������������ �������� ������ � ���������� ������������ ����� �� ����������� �� �������.
 * � ���������� ������� ������ ���� �������� ����� Math.max() � apply().
 */

// let list = [12, 23, 100, 34, 56, 9, 233];

// console.log(myMax(list)); // 233

/*
 * #8
 *
 * �������� ������� myMul(a, b), ������� ����� �������� ����� � � b, ��������� ���������.
 */

/*
 * �������� ������� myDouble(n), ������� ��������� ���� �������� �  ��������� ���.
 * ������������ ��������� ��� ������ �������������� �������� ������ ������� � ���������, ������ bind() � myMul().
 * ������� ���������� ��������� ����������.
 */

// console.log(myDouble(3)); // = myMul(2, 3) = 6

// console.log(myDouble(4)); // = myMul(2, 4) = 8

// console.log(myDouble(5)); // = myMul(2, 5) = 10

// ����������� ������� �������� ������� myTriple(n), ������� ��������� ����������� ��������, ��������� ���������.

// console.log(myTriple(3)); // = myMul(3, 3) = 9

// console.log(myTriple(4)); // = myMul(3, 4) = 12

// console.log(myTriple(5)); // = myMul(3, 5) = 15

/*
 * #9
 *
 * ��������� ������� myUniq(arr), ������� ����� ��������� ������������ ������
 * ������������� ����������� �������� (��������, ����� ������������� ��� ����� ).
 * ������� ������ ������� ��������� ���������� ��������.
 * � ���������� ��������� ������������� set.
 * ����� �������� ��������� � ��������� � �������.
 */

// let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];

// let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];

// console.log(myUniq(notUniqNums));

// console.log(myUniq(notUniqStrings));