function isPangram(string) {
   //6kyi
   //A pangram is a sentence that contains every single letter of the alphabet at least once. 
   //For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
   //because it uses the letters A-Z at least once (case is irrelevant).

   //Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
   //Ignore numbers and punctuation...
   let alphabetNew = "";
   let alphabet = "abcdefghijklmnopqrstuvwxyz";
   let stringToLowerCase = string.toLowerCase();
   for (let i = 0; i < alphabet.length; i++) {
      for (let j = 0; j < stringToLowerCase.length; j++) {
         if (alphabet[i] === stringToLowerCase[j]) {
            alphabetNew = alphabetNew + alphabet[i];
            j = stringToLowerCase.length
         }
         if (alphabet[i] !== stringToLowerCase[j] && j === stringToLowerCase.length - 1) return false
      }
   }
   if (alphabetNew === alphabet) {
      return true
   }
   return false
}


function squareDigits(num) {
   //7kyi
   //Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
   //For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
   //Note: The function accepts an integer and returns an integer.
   let x = String(num).split("").map(j => j * j)
   return Number(x.join(""))
}

function nbYear(p0, percent, aug, p) {
   //7kyi
   let n = 0;
   while (p0 < p) {
      p0 = p0 + Math.floor(p0 * percent / 100) + aug;
      n++;
   }
   return n;
}


function sumTwoSmallestNumbers(numbers) {
   //7kyi
   //Create a function that returns the sum of the two lowest positive numbers 
   //given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
   g//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
   let arr = [...numbers].sort((a, b) => a - b)
   return arr[0] + arr[1]
}


function openOrSenior(data) {
   //7kyi 
   //To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
   //In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
   //input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
   //output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
   return data.map(member => (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open')
}


function findOutlier(integers) {
   //6kyi
   //[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
   //[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
   const outlier = integers.filter(item => item % 2 === 0);
   return outlier.length == 1 ? outlier[0] : integers.filter(item => item % 2 !== 0)[0]
}

function solution(number) {
   //6kyi
   //If we list all the natural numbers below 10 that are multiples of 3 or 5, 
   //we get 3, 5, 6 and 9. The sum of these multiples is 23.
   //Additionally, if the number is negative, return 0.
   //If the number is a multiple of both 3 and 5, only count it once.
   if (number < 0) return 0; //избыточно
   let sum = 0;
   for (let i = 1; i < number; i++) {
      if (Number.isInteger(i / 3) || Number.isInteger(i / 5)) {
         sum += i;
      }
   }
   return sum;
}

//task 9
function likes(names) {
   //6kyi
   switch (names.length) {
       case 0:
       return `no one likes this`; //если бы не было return был бы нужен break
       case 1:
       return `${names[0]} likes this`;
       case 2:
       return `${names[0]} and ${names[1]} like this`;
       case 3:
       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
       default:
       return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
   }
 }

 //task 10
 function high(x){
   //6kyi
   let alphabet = "abcdefghijklmnopqrstuvwxyz";
   let word = '';
   let scoreWord = 0;  
   let arrWords= x.split(' ');
   for (let i = 0; i < arrWords.length; i++) {
     let score = 0;
     for (let j = 0; j < arrWords[i].length; j++) {
       score += (alphabet.indexOf(arrWords[i].split('')[j]) + 1)
     }
     if (scoreWord < score) {
       word = arrWords[i];
       scoreWord = score;
     }
   }
   return word;
 }