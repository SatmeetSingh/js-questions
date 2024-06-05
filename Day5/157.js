// What are regular expression patterns

// Regular expression (regex) patterns are sequences of characters that define a search pattern.

// Literal Characters: Literal characters match themselves. For example, the pattern hello matches the string "hello" in a text

// Metacharacters have special meanings in regex. Some common metacharacters include:
// . (dot): Matches any single character except newline.
// ^ (caret): Matches the start of a line (or the start of input).
// $ (dollar sign): Matches the end of a line (or the end of input).
// \ (backslash): Escapes metacharacters or introduces special sequences.
// | (pipe): Alternation, matches either the pattern before or after the pipe.
// () (parentheses): Groups patterns together.
// [] (square brackets): Character classes, match any character within the brackets.
// {} (curly braces): Quantifiers, specify the number of occurrences of a pattern.

// Quantifiers:
// Quantifiers specify how many times a pattern should occur. Some common quantifiers include:
// *: Matches zero or more occurrences.
// +: Matches one or more occurrences.
// ?: Matches zero or one occurrence.
// {n}: Matches exactly n occurrences.
// {n,}: Matches at least n occurrences.
// {n,m}: Matches between n and m occurrences.

// Character classes match a single character from a specified set. For example, [abc] matches either "a", "b", or "c".

// Anchors are used to specify positions in the input string. Common anchors include ^ (start of line) and $ (end of line).

// Escape sequences are used to represent characters that have special meaning in regex, such as \n (newline) or \t (tab).

// Flags or modifiers are optional settings that modify the behavior of the regex engine. Common flags include g (global match), i (case-insensitive match), m (multiline match), u (Unicode mode), and y (sticky mode).

// Email;
const val = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Date (YYYY-MM-DD format):
const date = /^\d{4}-\d{2}-\d{2}$ /;
