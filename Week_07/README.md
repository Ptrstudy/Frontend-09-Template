Study notes

# Grammer 

## Tree vs Priority

## Expressions:
- member
a.b
a[b]
foo`string`
super.b
super[ 'b']
new.target
new Foo()

- New 
new Foo

Example
new a()()
new new a() <- new a() first, and then new "new a()"

- Reference
Object
Key
Delete
assign

- Call
foo()
super()
foo()['b']
foo().b
foo()`abc`

Example 
new a()['b'] <- new a() first and then call proproty b

- Left Handside & Right Handside
Example:
a.b = c;
a+b = c

- Update
a ++
a --
-- a
++ a

Example:
++ a ++  <- a ++ first and then ++ "a ++"

- Unary
delete a.b
void foo()
typeof a
+ a
- a
 !a
avait a

- Exponental
** 

Example 
3**2 **3 <- 2**3 first and then 3 ** "2**3"

- Multipleicative
*, /, %

- Additive 
+ , 1 
- Shift
<<, >>, >>>

- Relationship
<, >, <=, >=, instanceof, in

- Equality
== 
!=
===
!==

Bitwise
&, ^, |

- Logical
&&
||

- Conditional
?:

# Type Convertion 

a + b
"false" == false
a[o] = 1;
 
# Basic types converting

## Unboxing
- ToPremitive
- toString vs valueOf
Symbol.toPrimitive

```
var o = {
    toString() { return "2"},
    valueOf() {return 1 },
    [Symbol.toPrimitive]() {return 3 }
}

var x = {}
x[o] = 1
console.log("x" + o) 

```

## Boxing

See more : https://javascript.plainenglish.io/javascript-boxing-wrappers-5b5ff9e5f6ab

## Exercise

```
function numberToString(number) {
  return number.toString();
}

function stringToNumber(string) {
  return new Number(string) + 0;
}
```

# Simple statements
- ExpressionStatement
- EmptyStatement
- DebuggerStatement
- ThrowStatement
- ContinueStatement
- BreakStatement
- ReturnStatement

# Complex statements

- BlockStatement
- IfStatment
- SwitchStatement
- IterationStatement
- WithStatement
- LabelledStatement
- TryStatement

# Block Statements
- [[type]]: normal
- [[value]]: --
- [[target]]: --

# Iteration
- while(…)…
- do … while (…);
- for (…;…;…) …
- for (… in …) …
- for (… of …) …

# Loops
- LabelledStatement
- IterationStatement
- ContinueStatement
- BreakStatement
- SwitchStatement
- [[type]]: break continue
- [[value]]: --
- [[target]]: label

# Try ... catch ... finally 
```
Try {
    # ...
} catch () {
    # ...
} finally {
    # ...
}
```
- [[type]]: return
- [[value]]: --
- [[target]]: label

# JS realms

Good reading: https://stackoverflow.com/questions/49832187/how-to-understand-js-realms
