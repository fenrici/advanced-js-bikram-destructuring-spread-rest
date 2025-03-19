//RESUELVE LOS EJERCICIOS AQUÍ

1. 
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const ana = empleados[1];
console.log(ana);

2. 
const [luis] = empleados;
const { email: emailLuis } = luis;
console.log(emailLuis);

3. 
let a = 5;
let b = 3;
[a, b] = [b, a];
console.log(a, b);

4.
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaHoy);
console.log(maximaManana);

5. 
const sumEveryOther = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sumEveryOther(1,2,3,4,5)); // 15
console.log(sumEveryOther(1,2,3)); // 6
console.log(sumEveryOther(1,1,1,1,1,1,1)); // 7

6. 
const addOnlyNums = (...suma) => suma.filter(suma => typeof suma === 'number').reduce((a, b) => a + b, 0);
console.log(addOnlyNums(1, "perro", 2, 4)); // 7

7.
const countTheArgs = (...animal) => animal.length;
console.log(countTheArgs(1, 4, 5, 6)); // 4
console.log(countTheArgs("perro", "gato", "pez")); // 3

8.
const combineTwoArrays = (pan, queso) =>  [...pan, ...queso];
console.log(combineTwoArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

9.
const onlyUniques = (...numeritos) => [...new Set(numeritos)];
console.log(onlyUniques(1, 1, 2, 3, 4, 5, 5)); // [1, 2, 3, 4, 5]

10.
const combineAllArrays = (...arrays) => arrays.reduce((a, b) => [...a, ...b], []);
console.log(combineAllArrays([1, 2], [3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6]

11.
const sumAndSquare = (...nums) => nums.reduce((acc, num) => acc + num ** 2, 0);
console.log(sumAndSquare(1, 2, 3, 4)); // 1² + 2² + 3² + 4² = 1 + 4 + 9 + 16 = 30


