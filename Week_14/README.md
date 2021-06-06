Study Notes

# Basic of componentising

## Object & Component

- Objects
  - Properties
  - Methods
  - Inherit

- Componments
  - Properties
  - Methods
  - Inherit
  - Attribute
  - Config & State
  - Event
  - Lifecycle
  - Children

End user inputs affect the state of a component.
Component Users(developers) to affect the component via 
- Attribtes
- Methods
- Properties

Componment developers:
- Events

### Attribute
- Attribute vs Property
  - Attribute for describing things
  - Property for the relationships

``` 
// Attribute
<my-component attribute="v" />
myComponent.getAttribute("a");
myComponent.setAttribute("a", "value");

// Property
myComponent.a = "value";
```
Other examples
```
// Example 1:
<div class="cls1 cls2"></div>
<script>
var div = document.getElementByTagName('div');
div.className // cls1 cls2
</script>

// Example 2:
<div class="cls1 cls2" style="color:blue"></div>
<script>
var div = document.getElementByTagName('div');
div.style // Object
</script>

// Example 3:
<a href="//m.taobao.com"></div>
<script>
var a = document.getElementByTagName('a');
a.href // "http://m.taobao.com", // resolved result
a.getAttribute("href") // "//m.taobao.com", // the original value
</script>

// Example 4:

<input value="cute">
<script>
var input=document.getElementByTagName('input'); // If the property is undefined, the result will be 'attribute';

input.value // cute
input.getAttribute("value"); // cute
input.value = "hello"; // if value has been set, the attribute wouldn't been changed, but property would be changed. (Property has higher prorioty than attribute)
input.value // hello
input.getAttribute("value"); // cute
```

## Liftcycle
Refers to the diagram on Video

## Children
(The most importent part)
- Content type & Template type
```
<my-button> <img src="{{icon}}"/>{{title}}</my-button>
<my-list>
  <li><img src="{{icon}}"/>{{title}}</li>
</my-list>
```

# Coding
refers to the code
