// What is a Regular Expression

// Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.
// these patterns are used with the exec() and test() methods of RegExp,
// and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String.

// create a regular expression
const re = /ab+c/;
// or
const re1 = new RegExp('ab+c');
console.log(re, re1);

// A regular expression (regex) is a sequence of characters that define a search pattern.

// Repeater ( * , + , and {}) - symbols act as repeaters and tell the compluter that the proceding character is used for more than one time
// * - tells computer to match the preceding character for 0 or more times - The regular expression ab*c will give ac, abc, abbc, abbbc….and so on

//+ - tells the computer to repeat the preceding character (or set of characters) at atleast one or more times(up to infinite). -  regular expression ab+c will give abc, abbc,abbbc, … and so on.

// {}- tells the computer to repeat the preceding character (or set of characters) for as many times as the value inside this bracket. -  {2} means that the preceding character is to be repeated 2 times, {min,} means the preceding character is matches min or  more times. {min,max} means that the preceding character is repeated atleast min & at most max times

// . -  dot symbol can take the place of any other symbol, that is why it is called the wildcard character.-  Regular expression .* will tell the computer that any character can be used any number of times.

// ? - This symbol tells the computer that the preceding character may or may not be present in the string to be matched.-We may write the format for document file as – “docx?” The ‘?’ tells the computer that x may or may not be present in the name of file format.

// ^ - The caret symbol tells the computer that the match must start at the beginning of the string or line. - ^\d{3} will match with patterns like "901" in "901-333-"

// $ - It tells the computer that the match must occur at the end of the string or before \n at the end of the line or string.-It tells the computer that the match must occur at the end of the string or before \n at the end of the line or string.

// \s : matches any whitespace characters such as space and tab
// \S: matches any non-whitespace characters
// \d: matches any digit character
// \D: matches any non-digit characters
// \w: matches any word character  (basically alpha numeric)
// \W: matches any non-word character
// \b: matches any word boundry(like spaces,dashes, commas,semi-colons)

//[set_of_characters]: Matches any single character in set_of_characters. By default, the match is case-sensitive.- [abc] will match characters a,b and c in any string.

// ^set_of_characters] Negation: Matches any single character that is not in set_of_characters. By default, the match is case-sensitive. - [^abc] will match any character except a,b,c

//  [first-last] Character range: Matches any single character in the range from first to last. - [a-zA-z] will match any character from a to z or A to Z.

// the Escape Symbol (  \  ) - If you want to match for the actual ‘+’, ‘.’ etc characters, add a backslash( \ ) before that character. This will tell the computer to treat the following character as a search character and consider it for a matching pattern. - \d+[\+-x\*]\d+ will match patterns like "2+2" and "3*9" in "(2+2) * 3*9".

// Grouping Characters : A set of different symbols of a regular expression can be grouped together to act as a single unit and behave as a block, for this, you need to wrap the regular expression in the parenthesis( )  -([A-Z]\w+) contains two different elements of the regular expression combined together. This expression will match any pattern containing uppercase letter followed by any character.

// vertical Bar |    - Matches any one element separated by the vertical bar (|) character. - th(e|is|at) will match words - the, this and that.

//  \number  - to be identified subsequently in the same regular expression. \n means that group enclosed within the n-th bracket will be repeated at current position. - ([a-z])\1 will match “ee” in Geek because the character at second position is same as character at position 1 of the match.

// Comment ( ?# comment ) -Inline comment: The comment ends at the first closing parenthesis.

// # [to end of line]  - The comment starts at an unescaped # and continues to the end of the line. -  (?x)\bA\w+\b#Matches words starting with A
