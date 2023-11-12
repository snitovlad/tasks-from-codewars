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