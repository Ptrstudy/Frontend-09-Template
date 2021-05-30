Study notes

# Re-learn HTML
## HTML definition
### XML &  SGML
### DTD & XML namespace
- To define the XML subset
- It's HTML 4 strict mode
- Entities
  - nbsp: no-break space(Not recommended, white-space is CSS is better)
  - lamda
  - quot
  - amp -> &
  - lt
  - gt
- see more https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd
- namespaces
  - https://www.w3.org/1999/xhtml

# HTML Tag Semantics
- HR: to switch topics
- If there is not a sutible tag for a content, use <p> or <div> with a class name to desribe it, such as <p class="note"> ... </p>
- <Strong> & <emit>
- <figure>

# HTML syntax
## legcy elements
- Element:<tagname>...</tagname>
- Text: text
- Comment: <!--comment -->
- DocumentType: <!Doctype html>
- ProcessingInstruction: <?a 1?>
- CDATA: <![CDATA[]]>
## String reference
- &#161;
- &amp;
- &lt;
- &gt;

# Browser APIs
## DOM
- Travasel APIs (Not recommended)
- Nodes
  - Element
  - Document
  - CharacterData
  - DocumentFragment
  - DocumentType
- Events
- Range APIs

### Navigating operations
- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling
- parentElement (Exact same as parentNode)
- children
- firstElementChild
- lastElementChild
- nextElementSibling
- previousElementSibling

### Modifying operations
- appendChild
- insertBefore
- removeChild
- replaceChild
### Advanced operations
- compareDocumentPosition is a function to compare the relationship between two nodes
- contains is a function for checking if it contains another node
- isEqualNode to check if two nodes are the exact same
- isSameNode to check if two nodes are the same(can use "===" for the same functionality;
- cloneNode to clone a node. If its argument is true, this function will copy all its child elements as the deep copy

# Dom Event APIs
## addEventListener(type, listener [, options]);
Refers to https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

```
target.addEventListener(type, listener);
target.addEventListener(type, listener, options);
target.addEventListener(type, listener, useCapture);
target.addEventListener(type, listener, useCapture, wantsUntrusted); // wantsUntrusted is Firefox only
```

# Range APIs

## an interview question

Reverse the order for all sub-elements of a given element
```
1   5
2   4
3   3
4   2
5   1
```
The solution 1 (level 2)
```
<div id="a">
  <span>1</span>
  <p>2</p>
  <p>3</p>
  <div>4</div>
</div>

<script>
let element = document.getElementById("a");

function reverseChildren(element) {
  var l = element.childNodes.length;
  while(l-- > 0) {
    element.appendChild(element.childNodes[l]);
  }
}
reverseChildren(element);

</script>
```

The solution 3 (with Range API, reduce the re-render times)
```
<div id="a">
  <span>1</span>
  <p>2</p>
  <p>3</p>
  <div>4</div>
</div>

<script>
let element = document.getElementById("a");

function reverseChildren(element) {
  let range = new Range();
  range.selectNodeCOntents(elements);
  let fragment = range.extractContents();
  var l = fragment.childNodes.length;
  while(l-- > 0) {
    fragment.appendChild(fragment.childNodes[l]);
  }
  element.appendChild(fragment);
}
reverseChildren(element);

</script>
```


## About Range API
- var range = new Range();
- range.setStart(element, 9);
- range.setEnd(element, 4);
- var range = document.getSelection().getRangeAt(0);
- var fragment = range.extractContents()
- range.insertNode(document.createTextNode("aaaa"))


# CSSOM

## Rules
- document.styleSheets[0].cssRules
- document.styleSheets[0].insertRule("p {color:pink;}", 0)
- document.styleSheets[0].removeRule(0)

## get ComputedStyle
- window.getComputedStyle(elt, pseudoElt);

# CSSOM View

## window
- window.innerHeight, window.innerWidth
- window.outerHeight, window.outerWidth
- window.devicePixelRatio
- window.screen
  - window.screen.width
  - window.screen.height
  - window.screen.availWidth
  - window.screen.availHeight

## Window API
- window.open("about:blank", "_blank", "width=100,height=100,left=100,right=100")
- moveTo(x,y)
- moveBy(x,y)
- resizeTo(x,y)
- resizeTo(x,y)

## scroll
- scrollTop
- scrollLeft
- scrollWidth
- scrollHeight
- scroll(x, y)
- scrollBy(x, y)
- scrollIntoView()
- window
  - scrollX
  - scrollY
  - scroll(x, y)
  - scrollBy(x, y)

## layout
- getClientRects()
- getBoundingClientRect()


# Other APIs

## All APIs
- APIs sources
  - khronos
    - WebGL
  - ECMA
    - ECMAScript
  - WHATWG
    - HTML
  - W3C
    - webaudio
    - CG/WG
