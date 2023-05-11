function generatePassword(length, isHard) {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var complexChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  
  var password = "";
  
  var charSet = isHard ? chars + complexChars : chars;
  
  for (var i = 0; i < length - 1; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(randomIndex);
  }
  
  var words = [
    "apple", "banana", "cherry", "orange", "grape", "lemon",
    "carrot", "broccoli", "potato", "tomato", "cabbage", "lettuce",
    "cat", "dog", "elephant", "lion", "tiger", "monkey",
    "sun", "moon", "star", "cloud", "rain", "wind",
    "house", "tree", "river", "mountain", "ocean", "desert"
  ];
  var randomWord = words[Math.floor(Math.random() * words.length)];
  password += randomWord;
  
  return password;
}


  module.exports = generatePassword