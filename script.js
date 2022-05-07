// const btn = document.querySelector('.btn');
// const reset = document.querySelector('.reset');
// const tes = document.querySelector('.tes');
// let index = 0;
// btn.addEventListener('click', function () {
//   box.innerHTML = ++index;
//   localStorage.setItem('index', index);
// });
// box.innerHTML = localStorage.getItem('index');
// if (window.open('', '_self')) {
//   index = localStorage.getItem('index');
// }
// reset.onclick = () => {
//   index = 0;
//   box.innerHTML = index;
//   localStorage.setItem('index', index);
// };

const input = document.getElementById('input');
const btnInput = document.querySelector('.btn-input');
const box = document.querySelector('.box');
btnInput.addEventListener('click', function () {
  const txt = input.value;
  box.innerHTML = txt;
  localStorage.setItem('txt', txt);
});
box.innerHTML = localStorage.getItem('txt');

// function needleInHaystack(haystack, needle) {
//   // tulis kode Anda di sini
//   // let jerami = haystack.split('');
//   // let jarum = needle.split('');
//   // if (needle == '') {
//   //   return 0;
//   // }
//   // let find = jerami
//   //   .map((el, i) => {
//   //     if (jarum.includes(el) && jerami.indexOf(el) != i) return i;
//   //   })
//   //   .filter((e) => e != undefined)
//   //   .join();
//   // if (find == '') return -1;
//   // return Number(find);
//   for (i = 0; i < haystack.length; i++) {
//     if (haystack.substr(i, needle.length === needle.length)) return i;
//   }
// }

// console.log(needleInHaystack('hello', 'lo'));
// function toCamelCase(string) {
//   // tulis kode Anda di sini
//   let regex = /^[-_]*$/gi;
//   return string
//     .split('')
//     .map((x, i, arr) => {
//       return regex.test(arr[i - 1]) || arr[i] == arr[i].toUpperCase() ? x.toUpperCase() : x.toLowerCase();
//     })
//     .join('')
//     .replace(/[-_]/gi, '');
//   //================
//   //REFACTOR THESE CODE AND FIND OTHER SIMPLE SOLUTION
//   //==========================
// }
// console.log(toCamelCase('The_User_Object'));

// function reverseNumber(angka, min, max) {
//   // tulis kode Anda di sini

//   let num = angka.toString().split('').reverse();
//   let s;
//   if (angka < 0) {
//     num.splice(num.length - 1, 1, '');
//     s = Number(-num.join(''));
//   } else {
//     s = Number(num.join(''));
//   }
//   return s < min || s > max ? 0 : s;
// }
// console.log(reverseNumber(1200, -1000, 1000));

// function countVowels(word) {
//   // tulis kode Anda di sini
//   let arr = [];
//   for (let i = 0; i < word.length; i++) {
//     for (let j = 1; j <= word.length; j++) {
//       arr.push(word.slice(i, j));
//     }
//   }
//   let regex = /[aiueo]/;
//   let tes = arr.filter((x) => x != '');
//   return tes.filter((x) => {
//     return regex.test(x);
//   }).length;
//   // .join('')
//   // .split('').length;
// }

// console.log(countVowels('abc'));

// function openOrSenior(data) {
//   // ...
//   // let arr = [];
//   // for (let i = 0; i < data.length; i++) {
//   //   if (data[i][0] >= 55 && data[i][1] >= 7) {
//   //     arr.push('Senior');
//   //   } else {
//   //     arr.push('Open');
//   //   }
//   // }
//   // return arr;
//   return data.map((x) => (x[0] >= 55 && x[1] > 7 ? 'Senior' : 'Open'));
// }
// console.log(
//   openOrSenior([
//     [68, 7],
//     [12, 25],
//     [53, 19],
//     [31, 24],
//     [86, 7],
//     [77, 6],
//   ])
// );
