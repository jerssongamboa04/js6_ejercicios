
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
  
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];
  
  const mernStack = ["MongoDB", "Express", "React", "Node"];
//   Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//   }

//   let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
//   Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while
  
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
//   }

// let i= 10;
//   while (i >= 0) {
//     console.log(i);
//     i--
//   }
// //   Itera de 0 a n usando el bucle for
  
// for ( let i= 3; i <= 10; i++){
// console.log(i);
// }

//   Escribe un bucle que haga el siguiente patrón usando console.log():
//       #
//       ##
//       ###
//       ####
//       #####
//       ######
//       #######

// let text = '#';
// while(text.length < 8){
//   console.log(text);
//   text += '#';
// }

//   Usa un bucle para imprimir el siguiente patrón:
  
// for (let i=0; i <= 10; i++){

//     console.log(`${i} x ${i} = ${i * i}`);
// }
//   0 x 0 = 0
//   1 x 1 = 1
//   2 x 2 = 4
//   3 x 3 = 9
//   4 x 4 = 16
//   5 x 5 = 25
//   6 x 6 = 36
//   7 x 7 = 49
//   8 x 8 = 64
//   9 x 9 = 81
//   10 x 10 = 100


//   Usando un bucle imprime el siguiente patrón:
  
// for (let i = 0; i <= 10; i++ ){
// if( i == 0){
     
//     console.log(`i    i^2   i^3`)
// }
//     console.log(`${i}    ${i * i}     ${i * i * i}`);
// }

//    i    i^2   i^3
//    0    0     0
//    1    1     1
//    2    4     8
//    3    9     27
//    4    16    64
//    5    25    125
//    6    36    216
//    7    49    343
//    8    64    512
//    9    81    729
//    10   100   1000



//   Usa el bucle for para iterar de 0 a 100 e imprima solo números pares


// for (let i = 0; i <= 100; i++) {
//     if( i % 2 == 0){
//         console.log(i);
//     }
// }

//   Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
  
// for (let i = 0; i <= 100; i++) {
//     if( i % 2){
//         console.log(i);
//     }
// }
//   Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos
  

//   Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.
  
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);
//   La suma de todos los números de 0 a 100 es 5050.



//   Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.

// let sum2 = 0;
// let sum1 = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum2 += i;
//   } else {
//     sum1 += i;
//   }
// }
// console.log(`La suma de los números pares es: ${sum2}`);
// console.log(`La suma de los números impares es: ${sum1}`);  
//   La suma de todos los pares de 0 a 100 es 2550. Y la suma de todos los impares de 0 a 100 es 2500.

//   Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. 
// Imprimir suma de pares y suma de impares como un array

// let sum4 = 0;
// let sum3 = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum4 += i;
//   } else {
//     sum3 += i;
//   }
// }
// let sumArray = [sum4, sum3];
// console.log(sumArray);
//      [2550, 2500]


//   Desarrolla un pequeño script que genera una matriz de 5 números aleatorios
  
// let randomArray = [];

// for (let i = 0; i < 5; i++) {
//   randomArray.push(Math.floor(Math.random() * 100)); // genera un número aleatorio entre 0 y 99 y lo agrega al array
// }
// console.log(randomArray);

//   Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos
  

//   Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:


// let caracteres = 'abcdefghijklm';
// let longitud = caracteres.length;
// let resultado = '';

// for (let i = 0; i < 6; i++) {
//   resultado += caracteres.charAt(Math.floor(Math.random() * longitud));
// }

// console.log(resultado);
  // 5j2khz 


//   ==================Ejercicios: Nivel 2 =================


//   Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:
  
// let caracteres = 'abcdefghijklm';
// let longitud = caracteres.length;
// let resultado = '';
// let random = Math.floor(Math.random() * 50);

// for (let i = 0; i < random; i++) {
//   resultado += caracteres.charAt(Math.floor(Math.random() * longitud));
// }
// console.log(resultado);
// //     fe3jo1gl124g
//     xkqci4utda1lmbelpkm03rb


//   Escribe un script que genere un número hexadecimal aleatorio.
  
// let randomHex = '#' + Math.floor(Math.random()*15).toString(16);
// console.log(randomHex);


//   '#ee33df'
//   Escribe un script que genere un número de color rgb aleatorio.

// let randomR = Math.floor(Math.random() * 256);
// let randomG = Math.floor(Math.random() * 256);
// let randomB = Math.floor(Math.random() * 256);

// let randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

// console.log(randomColor);
//   rgb(240,180,80)


//   Usando el array countries anterior, crea un array como el siguiente.
//   ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// const newArr = [];
// for (let i = 0; i < countries.length; i++) {
//   newArr.push(countries[i].toUpperCase());
// }

// console.log(newArr);

//   Usando el array countries anterior, crea un array para saber la longitud de cada país.
  

// const countryLengths = countries.map(function(country) {
//   return country.length;
// });
// console.log(countryLengths);
//   [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]


//   Utiliza el array countries para crear la siguiente array de arrays
  
//     [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]

//   En el array countries anterior, verifica si hay un país que contenga la palabra 
// 'land'. Si hay países que contienen 'land', imprimelo cono array. Si no hay ningún 
// país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.
  
// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// let countriesWithLand = countries.filter(function(country) {
//   return country.includes("land");
// });

// if (countriesWithLand.length > 0) {
//   console.log(countriesWithLand); 
// } else {
//   console.log("Todos estos países no tienen la palabra 'land'");
// }
//   ['Finland','Ireland']

//   En el array countries anterior, verifica si hay un país que termina con una subcadena
//  (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay 
//  ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.
  
// let countriesWithia = countries.filter(function(country) {
//   return country.includes("ia");
// });

// if (countriesWithia.length > 0) {
//   console.log(countriesWithia); 
// } else {
//   console.log("Estos paises no terminan con ia");
// }
//   ['Albania', 'Bolivia','Ethiopia']

//   Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de
//  caracteres.
// let countriesC = 0;
// let nameCountry = "";
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length > countriesC) {
//     countriesC = countries[i].length
//     nameCountry = countries[i]
//   }
// }
// console.log(`El pais que mas caracteres tiene es ${nameCountry} con ${countriesC} caracteres.`);
//   Ethiopia


//   Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.

// let countriesC = 0;
// let nameCountry = "";
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length > 4) {
//     countriesC = countries[i].length
//     nameCountry = countries[i]
//   }
// }
// console.log(nameCountry);

// ['Japan', 'Kenya']


//   Encuentra la palabra más larga en el array webTechs

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

//  let webC = 0;
//  let palabraMasL = "";

//  for (let i = 0; i < webTechs.length; i++) {
//   if (webTechs[i].length > webC) {
//           webC = webTechs[i].length
//     palabraMasL = webTechs[i]
//   }
// }
// console.log(`La palabra mas larga es ${palabraMasL}`);

//   Utiliza el array de webTechs para crear la el siguiente array de arrays:

// let arrayDeArrays = [];

// for(let i=0; i < webTechs.length; i++) {
//   let tecnologia = webTechs[i];
//   let longitud = tecnologia.length;
//   arrayDeArrays.push([tecnologia, longitud]);
// }
// console.log(arrayDeArrays);
//   [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],
// ["Node", 4],["MongoDB", 7]]



//   Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app.
// //  Crea el acrónimo MERN usando el array mernStack
  

// const firstLetters = [];
// for (let i = 0; i < mernStack.length; i++) {
//   firstLetters.push(mernStack[i].charAt(0));
//   let mern = firstLetters
// }
// console.log(firstLetters);

//   Iterar a través del array, ["HTML", "CSS", "JS", 
// "React", "Redux", "Node", "Express",
//  "MongoDB"] usando el bucle for o el bucle for of 
// // e imprime los elementos.

//  let array= ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

// for (const element of array) {
//   console.log(element);
// }
//   Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el
//  orden usando un bucle sin usar el método reverse().
  
// let frutas = ['banana', 'orange', 'mango', 'lemon'];
// const reversedArray = [];

// for (let i = frutas.length - 1; i >= 0; i--) {
//   reversedArray.push(frutas[i]);
// }
// console.log(reversedArray);


//   Imprime todos los elementos del array como se muestra a continuación:
  
//   const fullStack = [
//     ["HTML", "CSS", "JS", "React"],
//     ["Node", "Express", "MongoDB"],
//   ];
//     HTML
//     CSS
//     JS
//     REACT
//     NODE
//     EXPRESS
//     MONGODB

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];

// for (let i = 0; i < fullStack.length; i++) {
//   for (let j = 0; j < fullStack[i].length; j++) {
//     console.log(fullStack[i][j]);
//   }
// }

//   Ejercicios: Nivel 3
//   Copia el array countries (Evita mutaciones)

// let copiedCountries = countries.slice();
// console.log(copiedCountries);

// //   Los arrays son mutables. Crea una copia del array que no 
// modifique el original. Ordena la copia del array y guárdala en
//  una variable sortedCountries

let copiedCountries = countries.slice();
let sortedCountries = copiedCountries.sort();
console.log(countries);
console.log(sortedCountries);

//   Ordena el array webTechs y el array mernStack

// const webTechs = [  "HTML",  "CSS",  "JavaScript",  "React",  "Redux",  "Node",  "MongoDB",];


webTechs.sort();
console.log(webTechs);

// const mernStack = ["MongoDB", "Express", "React", "Node"];

mernStack.sort();
console.log(mernStack);



//   Extrae todos los países que contengan la palabra 'land' del array countries 
// e imprimela como un array


// const countries = [  "Albania",  "Bolivia",  "Canada",  "Denmark",  "Ethiopia",  "Finland",  "Germany",  "Hungary",  "Ireland",  "Japan",  "Kenya",];

const countriesWithLand = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes('land')) {
    countriesWithLand.push(countries[i]);
  }
}

console.log(countriesWithLand);


//   Encuentra el país que contiene la mayor cantidad de caracteres en el array countries

// const countries = [  "Albania",  "Bolivia",  "Canada",  "Denmark",  "Ethiopia",  "Finland",  "Germany",  "Hungary",  "Ireland",  "Japan",  "Kenya",];

let longestCountry = '';

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}
console.log(longestCountry);


//   Extrae todos los países que contengan solo cuatro caracters del array countries
//  e impremela como un array

// const countries = [  "Albania",  "Bolivia",  "Canada",  "Denmark",  "Ethiopia",  "Finland",  "Germany",  "Hungary",  "Ireland",  "Japan",  "Kenya",];

const countriesWithFourChars = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 4) {
    countriesWithFourChars.push(countries[i]);
  }
}

console.log(countriesWithFourChars);


//   Extrae todos los paíse que contengan dos o más palabras del array countries
//  e imprimela como un array



//   Invertir el array countries y poner en mayúscula cada país y almacenalo en un array

// const countries = [  "Albania",  "Bolivia",  "Canada",  "Denmark",  "Ethiopia",  "Finland",  "Germany",  "Hungary",  "Ireland",  "Japan",  "Kenya",];

const countriesInvertedAndUppercase = [];

for (let i = countries.length - 1; i >= 0; i--) {
  countriesInvertedAndUppercase.push(countries[i].toUpperCase());
}

console.log(countriesInvertedAndUppercase);
