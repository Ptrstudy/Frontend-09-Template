Assignment & Study notes

# Chomsky hierarchy

In formal language theory, computer science and linguistics, the Chomsky hierarchy (occasionally referred to as the Chomsky–Schützenberger hierarchy) is a containment hierarchy of classes of formal grammars.

This hierarchy of grammars was described by Noam Chomsky in 1956. It is also named after Marcel-Paul Schützenberger, who played a crucial role in the development of the theory of formal languages.

- Type-0 grammars (Unrestricted grammar)
- Type-1 grammars (Context-sensitive grammar)
- Type-2 grammars (Context-free grammar)
- Type-3 grammars (Regular grammar)


# BNF 
In computer science, Backus–Naur form or Backus normal form (BNF) is a metasyntax notation for context-free grammars, often used to describe the syntax of languages used in computing, such as computer programming languages, document formats, instruction sets and communication protocols. They are applied wherever exact descriptions of languages are needed: for instance, in official language specifications, in manuals, and in textbooks on programming language theory.

Many extensions and variants of the original Backus–Naur notation are used; some are exactly defined, including extended Backus–Naur form (EBNF) and augmented Backus–Naur form (ABNF).

An example for U.S. postal address:
```
 <postal-address> ::= <name-part> <street-address> <zip-part>
      <name-part> ::= <personal-part> <last-name> <opt-suffix-part> <EOL> | <personal-part> <name-part>

  <personal-part> ::= <initial> "." | <first-name>

 <street-address> ::= <house-num> <street-name> <opt-apt-num> <EOL>
       <zip-part> ::= <town-name> "," <state-code> <ZIP-code> <EOL>

<opt-suffix-part> ::= "Sr." | "Jr." | <roman-numeral> | ""
    <opt-apt-num> ::= <apt-num> | "
```


# Practice 1: (Expression with brackets)
```
<BracketExpression>::=<Number>|
    "("<AddtiveExpression>")"

<MultiplicativeExpression>::=<BracketExpression>|
    <MultiplicativeExpression>"*"<BracketExpression>|
    <MultiplicativeExpression>"/"<BracketExpression>

<AdditiveExpression>::=<MultiplicativeExpression>|
    <AddtiveExpression>"+"<MultiplicativeExpression>|
    <AddtiveExpression>"-"<MultiplicativeExpression>
```

# Practice 2: Classifying Programming Languages

Descriptive programming languages：
JSON, HTML, SQL, CSS, XML, XAML, XSLT

Programming languages：
C, C++, Go, Java, C#, Python, JavaScript, PHP, TypeScript

Declarative programming languages:
JSON, HTML, SQL, CSS, XML, XAML, XSLT

Functional Programming languages：
Erlang, LISP, Go, C, C++, Java，C#, Python，Scheme, Clojure, Haskell, JavaScript,  PHP, TypeScript

# Turing completeness

In computability theory, a system of data-manipulation rules (such as a computer's instruction set, a programming language, or a cellular automaton) is said to be Turing-complete or computationally universal if it can be used to simulate any Turing machine. This means that this system is able to recognize or decide other data-manipulation rule sets. Turing completeness is used as a way to express the power of such a data-manipulation rule set. Virtually all programming languages today are Turing-complete. The concept is named after English mathematician and computer scientist Alan Turing.

# Turing machine
A Turing machine is a mathematical model of computation that defines an abstract machine[1] that manipulates symbols on a strip of tape according to a table of rules. Despite the model's simplicity, given any computer algorithm, a Turing machine capable of simulating that algorithm's logic can be constructed.

# Javascript Data types

## Basic
- string (Primitive)
- number(Primitive)
- boolean(Primitive)
- undefined(Primitive)
- Null
- Object
- Symbol


### JavaScript Types are Dynamic

```
var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
```

### undefined and null are equal in value but different in type:

```
typeof undefined           // undefined
typeof null                // object
null === undefined         // false
null == undefined          // true
```

undefined is a global variable, but Null is a keyword.
Developer can give a new value for undefined, but cannot re-value the keyword null.

# Charset
More reading: 
- https://en.wikipedia.org/wiki/Character_encoding
- https://www.w3.org/International/questions/qa-what-is-encoding
- http://www.asciitable.com/


# Practice 2

```
function UTF8_Encoding(string){
    let bitStr = '';
    var buf;
    for(let c of string){
        let code = c.charCodeAt();
        let bitCode =code.toString(2);
        let encode;
        while(bitCode.length % 8){
            bitCode = '0' + bitCode;
        }
        if(code >= 0 && code <= 127){
            encode = bitCode;
        }else if(code >= 128 && code <= 2047){
            encode = '110' + bitCode.slice(0, 5) + '10' + bitCode.slice(5);
        }else if(code >= 2048 && code <= 65535){
            encode = '1110' + bitCode.slice(0, 4) + '10' + bitCode.slice(4, 10) + '10' + bitCode.slice(10);
        }else if(code >= 65535 &&code <= 1114111){
            encode = '11110' + bitCode.slice(0, 3) + '10' + bitCode.slice(3, 9) + '10'+bitCode.slice(9, 15) + '10'+bitCode.slice(15);
        }
        bitStr += encode;
    }
    let len = bitStr.length
    buf = new ArrayBuffer(len);
    let view = new Int8Array(buf, 0, len);
    for(var i = 0;i<buf.byteLength;i++){
        view[i] = bitStr[i]
    }
    return buf;
}
```
(Didn't fingure it out. Copied from others)


# Practice 3
 See dog_bite_human.html

# Practice 4
The objects containing the non-standard behiviours:
- Function object ([[call]])
- Cannot find others

