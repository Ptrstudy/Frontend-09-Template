Study notes

## Proxy doc:
The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.
A Proxy is created with two parameters:

target: the original object which you want to proxy
handler: an object that defines which operations will be intercepted and how to redefine intercepted operations.

```
const target = {
  message1: "hello",
  message2: "everyone"
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

## Listeners (HTML DOM EventListener)

### functions:
```
addEventListener()
removeEventListener()
```

### Event list:
https://www.w3schools.com/jsref/dom_obj_event.asp

## CSSOM(CSS Object Model
The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML. It allows users to read and modify CSS style dynamically.


https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model

## DOM(Document Object Model) API
The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.

The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.

Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

see https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

