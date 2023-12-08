onEvent("re", "click", function( ) {
  var originalString = getText("t");

// Specify the word you want to replace and the replacement
var wordToReplace = getText("ret");
var replacementWord = getText("pt");

// Using replace with a string (replaces only the first occurrence)
var stringWithReplacement = originalString.replace(wordToReplace, replacementWord);
console.log(stringWithReplacement);

// Output: Hello Universe, world!

// Using replace with a regular expression and the 'g' (global) flag (replaces all occurrences)
var regex = new RegExp(wordToReplace, 'g');
stringWithReplacement = originalString.replace(regex, replacementWord);
console.log(stringWithReplacement);
  setText("t",stringWithReplacement);
});
