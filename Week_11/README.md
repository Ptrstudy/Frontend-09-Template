Study Notes


# CSS syntax study

## The grammer in CSS 2.1 
https://www.w3.org/TR/CSS21/grammar.html#q25.0

```
The productions are:

stylesheet
  : [ CHARSET_SYM STRING ';' ]?
    [S|CDO|CDC]* [ import [ CDO S* | CDC S* ]* ]*
    [ [ ruleset | media | page ] [ CDO S* | CDC S* ]* ]*
  ;
import
  : IMPORT_SYM S*
    [STRING|URI] S* media_list? ';' S*
  ;
media
  : MEDIA_SYM S* media_list '{' S* ruleset* '}' S*
  ;
media_list
  : medium [ COMMA S* medium]*
  ;
medium
  : IDENT S*
  ;
page
  : PAGE_SYM S* pseudo_page?
    '{' S* declaration? [ ';' S* declaration? ]* '}' S*
  ;
pseudo_page
  : ':' IDENT S*
  ;
operator
  : '/' S* | ',' S*
  ;
combinator
  : '+' S*
  | '>' S*
  ;
unary_operator
  : '-' | '+'
  ;
property
  : IDENT S*
  ;
ruleset
  : selector [ ',' S* selector ]*
    '{' S* declaration? [ ';' S* declaration? ]* '}' S*
  ;
selector
  : simple_selector [ combinator selector | S+ [ combinator? selector ]? ]?
  ;
simple_selector
  : element_name [ HASH | class | attrib | pseudo ]*
  | [ HASH | class | attrib | pseudo ]+
  ;
class
  : '.' IDENT
  ;
element_name
  : IDENT | '*'
  ;
attrib
  : '[' S* IDENT S* [ [ '=' | INCLUDES | DASHMATCH ] S*
    [ IDENT | STRING ] S* ]? ']'
  ;
pseudo
  : ':' [ IDENT | FUNCTION S* [IDENT S*]? ')' ]
  ;
declaration
  : property ':' S* expr prio?
  ;
prio
  : IMPORTANT_SYM S*
  ;
expr
  : term [ operator? term ]*
  ;
term
  : unary_operator?
    [ NUMBER S* | PERCENTAGE S* | LENGTH S* | EMS S* | EXS S* | ANGLE S* |
      TIME S* | FREQ S* ]
  | STRING S* | IDENT S* | URI S* | hexcolor | function
  ;
function
  : FUNCTION S* expr ')' S*
  ;
/*
 * There is a constraint on the color that it must
 * have either 3 or 6 hex-digits (i.e., [0-9a-fA-F])
 * after the "#"; e.g., "#000" is OK, but "#abcd" is not.
 */
hexcolor
  : HASH S*
  ;
```


## CSS overall structure

- @charset
- @import
- rules
 - @media
 - @page
 - rule

# @rule study

## At-rules
- @charset: https://www.w3.org/TR/css-syntax-3/
- @import: https://wwww.w3.org/TR/css-cascade-4/
- @media: https://www.w3.org/TR/css3-conditional/
- @page: https://www.w3.org/TR/css-page-3/
- @counter-style: https://wwww.w3.org/TR/css-counter-styles-3
- @keyframes: https://www.w3.org/TR/css-animations-1/
- @fontface: https://wwww.w3.org/TR/css-fonts-3/
- @supports: https://wwww.w3.org/TR/css3-conditional/ (not recommanded because it's in CSS3, which is not "supported" in the prevous versions)
- @namespace: https://wwww.w3.org/TR/css-namespaces-3/

@Media, @keyframes & @fontface are the important/popular at-rules nowadays

# CSS rules

```
div {
    background-color:blue;
}

## About selector
- https://www.w3.org/TR/selectors-3/
- https://www.w3.org/TR/selectors-4/

## About declaration (Key-value)
- Key Properties
- Key Variables: https://wwww.w3.org/TR/css-variables/
- Value: https://www.w3.org/TR/css-values-4

## Selector (Level 3)

```
The productions are:

selectors_group
  : selector [ COMMA S* selector ]*
  ;

selector
  : simple_selector_sequence [ combinator simple_selector_sequence ]*
  ;

combinator
  /* combinators can be surrounded by whitespace */
  : PLUS S* | GREATER S* | TILDE S* | S+
  ;

simple_selector_sequence
  : [ type_selector | universal ]
    [ HASH | class | attrib | pseudo | negation ]*
  | [ HASH | class | attrib | pseudo | negation ]+
  ;

type_selector
  : [ namespace_prefix ]? element_name
  ;

namespace_prefix
  : [ IDENT | '*' ]? '|'
  ;

element_name
  : IDENT
  ;

universal
  : [ namespace_prefix ]? '*'
  ;

class
  : '.' IDENT
  ;

attrib
  : '[' S* [ namespace_prefix ]? IDENT S*
        [ [ PREFIXMATCH |
            SUFFIXMATCH |
            SUBSTRINGMATCH |
            '=' |
            INCLUDES |
            DASHMATCH ] S* [ IDENT | STRING ] S*
        ]? ']'
  ;

pseudo
  /* '::' starts a pseudo-element, ':' a pseudo-class */
  /* Exceptions: :first-line, :first-letter, :before and :after. */
  /* Note that pseudo-elements are restricted to one per selector and */
  /* occur only in the last simple_selector_sequence. */
  : ':' ':'? [ IDENT | functional_pseudo ]
  ;

functional_pseudo
  : FUNCTION S* expression ')'
  ;

expression
  /* In CSS3, the expressions are identifiers, strings, */
  /* or of the form "an+b" */
  : [ [ PLUS | '-' | DIMENSION | NUMBER | STRING | IDENT ] S* ]+
  ;

negation
  : NOT S* negation_arg S* ')'
  ;

negation_arg
  : type_selector | universal | HASH | class | attrib | pseudo
  ;
```

## Variable

```
:root {
    --main-color: #06c;
    --accent-color: #006;
} 

/* This rest of the CSS file */
#foo h1 {
    color: var(--main-color);
}
```

### Types
- select_group
- selector
 - >
 - <sp>
 - +
 - ~
- simple_selector
 - type
 - *
 - .
 - #
 - []
 - :
 - ::
 - :not() 

var() is the function to use the variable, and it's also be able to assign a default value

## Value (Level 4, work well)
- Calc
- number
- length
- and more, refers to the document

# Gathering standards

## to crawl all standards from W3.org

``` 
Array.prototype.slice.call(document.querySelector("#container").children).filter(e => e.getAttribute("data-tag").match(/css/)).map(e => ({name:e.children[1].innerText, url:e.children[1].children[0].href}))
```
After getting the data from the above code on w3.org
```
let iframe = document.createElement("iframe");
document.body.innerHTML = "";
document.body.appendChild(iframe);

function happen(element, event) {
    return new Promise(function(resolve) {
        let handler = () => {
            resolve();
            element.removeEventListener(event, handler);
        }
        element.addEventListener(event, handler);
    })
}

void async function() {
    for(let standard of standards) {
        iframe.src = standard.url;
        console.log(standard.name);
        await happen(iframe, "load");
        console.log(iframe.contentDocument.querySelectorAll(".proddef"));
    }
}


# Selector

## Selector syntax

### Simple-selector

- *
- dev svg|a
- .cls
- #id
- [attr=value]
- :hover
- ::before

## Combined selector / Complex selector

### Combined selector
- <simple-selector> <simple-selector> <simple-selector>
- * and div must be at the beginning

### Complex selector

- <combined-selector> <sp> <combined-selector>
- <combined-selector> ">" <combined-selector>
- <combined-selector> "~" <combined-selector>
- <combined-selector> "+" <combined-selector>
- <combined-selector> "||" <combined-selector>

# The priority of selectors

## the counter of simple-selectors

```
#id dev.a#id{
    //...
}
```
[0, 2, 1, 1]
s = 0*N3 + 2*N2 + 1*N1 +1
when N = 1000000
s = 2000001000001

```
A specificity is determined by plugging numbers into (a, b, c, d):

If the styles are applied via the style attribute, a=1; otherwise, a=0.
b is equal to the number of ID selectors present.
c is equal to the number of class selectors, attribute selectors, and pseudoclasses present.
d is equal to the number of type selectors and pseudoelements present.

# from CSS REFACTORING
```

## Practice: Find the priorities
```
(If N = 65536)
- div#a.b .c[id=x]
[0, 1, 3, 1]
s = 0 + 1 * 65536^2 + 3 * 65536 + 1 = 4,295,163,905
- #a:not(#b)
[0, 2, 0, 0]
s = 0 + 2* 65536^2 + 0 + 0 = 8,589,934,592
- *.a
[0, 0, 1, 0]
s = 0 + 0 + 1 * 65536 + 0 = 65536
- div.a
[0, 0, 1, 1]
s = 0 + 0 + 1 * 65536 + 1 = 65537

```


# Pseudo classes

## Links/behivours
- :any-link
- :link :visited
- :hover
- :active
- :focus
- :target

## Tree
- :empty
- :nth-child()
- :nth-last-child()
- :first-child :last-child :only-child

## Logical
- :not
- :where :has (Level 4)

# Pseudo elements

## All pseudo elements
- ::after
- ::before
- ::first-letter
- ::first-line
- ::selection

## ::before ::after

```
<div>
  <::before/>
    content
  <::after/>
</div>
```
## ::first-letter ::first-line

```
<div>
  <::first-letter>c</::first-letter>ontent
  content
</div>

<div>
  <::first-line>content content content</::first-line>
  content content content
</div>
```

### ::fisrt-line
- font
- color
- background
- word-spacing
- letter-spacing
- text-decoration
- text-transform
- line-height


### ::fisrt-letter
- font
- color
- background
- word-spacing
- letter-spacing
- text-decoration
- text-transform
- line-height
- float
- vertical-align
- margin，padding，border

## Question: Why first-letter can be set a float style and so on, but first-line cannot:

Anwser(Personal option): 
The first letter is a part of a word, and it won't change any context of a text if it's changed, but first-line needs to be the position as it should be.
Also, the ::first-line pseudo-element can only be applied to block-level elements(https://www.w3schools.com/css/css_pseudo_elements.asp), and the ::first-letter is not. Thinking it should be the reason for the technical perspective, but I haven't got why yet.