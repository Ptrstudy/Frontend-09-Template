# Study Notes:
## 1. Recalled the pattern from the Computer System course, the compiler part.
TODO: Review this part and try to redo assignment 3, which is a Java-like compiler (C++ required)

## 2. RegExp.prototype.exec(), and match(), matchAll()
The regular expression is the same thing as other programming languages.
The return value:

> If the match succeeds, the exec() method returns an array (with extra properties index and input; see below) and updates the lastIndex property of the regular expression object. The returned array has the matched text as the first item, and then one item for each parenthetical capture group of the matched text. 

BUT, the pattern string is a bit interesting. After giving the value to it, it will be an object of RegExp, and some properties have been attached, such as lastIndex, ignoreCase, global, multiple and source (refers to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)

## 3. Javascript Generator

```function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(generator().next().value); // 1
console.log(generator().next().value); // 1```

I haven't understood it very well.
Need to learn it more
Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
Lesson: Re-learn FE

## 4. Javascript code convention
Looks like there are many different code styles for JavaScript. 
- https://www.w3schools.com/js/js_conventions.asp
- https://google.github.io/styleguide/jsguide.html
- https://github.com/airbnb/javascript (MDN suggests)