Study notes

# HTML Parse

## step 1: split file

A better solution for parsing HTML body is to parse the body content by segments asynchronously.

## step 2: parsing HTML by FSM

- Parse HTML by FSM
- States are defined in SPEC
The documentation of HTML Tokenisation:
https://html.spec.whatwg.org/multipage/parsing.html#tokenization
- Toy-browser will include some common states(not all)

## Step 3: parsing tags

### HTML tag types

- Opening tags (Associated tags)
- Closing tags (Associated tags)
- Singular tags

## Step 4: create elements

## Step 5: Process attributes

- double quoted
- single-quoted
- unquoted
- Need to handle errors

## Step 6: Build DOM with token

## Step 7: Add text nodes to DOM

- Proccess as self-colsed tags
- Need to merge for multiple text nodes

# CSS computation

## step 1: Collect CSS rules 

- Store CSS rules when the style tags appear
- Using CSS parser to analyse CSS rules

## Step 2: Add calls

- Compute CSS immediately after creating an element
- Before analysing an element, all CSS rules should be collected already
- Need to re-compute CSS if the CSS style in the body section (in the real browser)

## Step 3: Get the parent elements

``` 
// for getting the parent elements
function computeCSS(element) {
    var elements = stock.slice().reverse();
}
```
- All parent elements have to be known before checking if the elements and rules are matched in the computeCSS function
- Able to get all parent elements for the current one from the previous stack
- The parent element matching order is from inside to outside

## Step 4: Selector & matching of elements

- Selector is ordered from the current element to its outside elements
- Using loops to match element queue by splitting the complex selector into simple selectors

## Step 5: Compute the selector & matching


## Step 6: Generate computed attributes
- Generate computedStyle after applying & matching the style to elements

## Step 7: The computing logic of Specificity

- CSS rule priorities can be overridden by Specificity
- Specificity has four "atom", and the left one has the highest priority



