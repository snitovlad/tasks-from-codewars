function isPangram(string){
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
         if (alphabet[i] !== stringToLowerCase[j] && j === stringToLowerCase.length-1) return false   
     }
   }
   if (alphabetNew === alphabet) {
      return true
   } 
   return false
 }