Study Notes


# Browser

## the arcticture of requesting a URL in Toy Browser
URL --HTTP--> HTML --parse--> DOM --CSS Computing--> DOM with CSS --layout--> DOM with position --render--> Bitmap

# Finite State Machine (FSM)

## Basic

Each state is a "machine", which 
- can compute, store, output...
- gets the same inputs
- is stateless, and represents by a pure function(without side-effects)
Each state knows its next state
- Knows a certain state (Moore)
- or goes to the next state by getting different inputs (Mealy)
(More reading: https://www.tutorialspoint.com/automata_theory/moore_and_mealy_machines.htm)


# FSM

## FSM in JS (Mealy)
```
function state(input)
{
    return next;
}

while(input) {
    state = state(input);
}
```

## Process stings by no FSM

Exercise 1: check a string if it contains "a"
```
# the version without FSM
function match(string) {
    for(let c of string) {
        if(c == "a") {
            return true;
        }
    }
    return false;
}

match("I am groot");
```

Some methods with JS functions (From a comment). Good to know all of these.

```
var str = 'bac';
var target = 'a';

str.indexOf(target) > -1

str.includes(target);

str.split('').find(item => item === 'a')

str.split('').findIndex(item => item === 'a') > -1
```

Exercise 2: Check a string if it contains "ab"
```
function match(string) {
    let foundA = false;
    for(let c of string) {
        if(c == "a) {
            foundA = true;
        } else if(foundA && c == "b") {
            return true;
        } else {
            foundA = false;
        }
    }
    return false;
}

console.log(match("I acbm groot"));
```

Exercise 3: Check a string if it contains "abcdef"
function match(string) {
    let foundA = false;
    let foundB = false;
    let foundC = false;
    let foundD = false;
    let foundE = false;

    for(let c of string) {
        if(c == "a) {
            foundA = true;
        } else if(foundA && c == "b") {
            foundB = true;
        } else if(foundB && c == "c") {
            foundC = true;
        } else if(foundC && c == "d") {
            foundD = true;
        } else if(foundD && c == "e") {
            foundE = true;
        } else if(foundE && c == "F") {
            return true;
        } else {
            foundA = false;
            foundB = false;
            foundC = false;
            foundD = false;
            foundE = false;
        }
    }
    return false;
}

## Process stings with FSM


### Check a string like "abcdef" with FSM
```
function match(string) {
    let state = start;
    for(let c of string) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if(c === "a") {
        return foundA;
    } else {
        return start;
    }
}

function end(c) {
    return end;
}

function foundA(c) {
    if(c === "b") {
        return foundB;
    } else {
        return start(c);
    }
}

function foundB(c) {
    if(c === "c") {
        return foundC;
    } else {
        return start(c);
    }
}

function foundC(c) {
    if(c === "d") {
        return foundD;
    } else {
        return start(c);
    }
}

function foundD(c) {
    if(c === "e") {
        return foundE;
    } else {
        return start(c);
    }
}

function foundE(c) {
    if(c === "f") {
        return end;
    } else {
        return start(c);
    }
}

console.log("");
```

Changing start to start(c) calls reconsume to avoid the chance for missing a letter, "a"

### how to check a string like "abcabx" with FSM

```
function match(string) {
    let state = start;
    for(let c of string) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if(c === "a") {
        return foundA;
    } else {
        return start;
    }
}

function end(c) {
    return end;
}

function foundA(c) {
    if(c === "b") {
        return foundB;
    } else {
        return start(c);
    }
}

function foundB(c) {
    if(c === "c") {
        return foundC;
    } else {
        return start(c);
    }
}

function foundC(c) {
    if(c === "a") {
        return foundA2;
    } else {
        return start(c);
    }
}

function foundA2(c) {
    if(c === "b") {
        return foundB2;
    } else {
        return start(c);
    }
}

function foundB2(c) {
    if(c === "x") {
        return end;
    } else {
        return startB(c);
    }
}

console.log(match("I am abcabx, but nothing"));
```

### how to check a string like "abababx" with FSM (Unfinished)

```
function match(string) {
    let state = start;
    let counter = 0;
    for(let c of string) {
        state = state(c, counter);
    }
    return state === end;
}

function start(c, counter) {
    if(c === "a") {
        return foundA(c, counter);
    } else {
        return start;
    }
}

function end(c, counter) {
    return end;
}

function foundA(c, counter) {
    if(c === "b" && counter  < 3) {
        return foundB(c, counter);
    } else {
        return start(c, 0);
    }
}

function foundB(c, counter) {
    if(c === "x" && counter === 2) {
        return end;
    } else {
        return start(c, 0);
    }
}


```


# How the browser works


## HTTP request | HTTP protocol

ISO-OSI network model & TCP/IP Model

Application ( Require("HTTP"))
- Application
- Presentation
- Session

TCP/IP: Data layer ( Require("net"))
- Transport
- Network
- Data Link
- Physical

## Basic TCP/IP
Rquire('net')
- Stream
- Port

libnet/libpcap
- Package
- IP address


## HTTP

The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers.

HTTP works as a request-response protocol between a client and server.

Example: A client (browser) sends an HTTP request to the server; then the server returns a response to the client. The response contains status information about the request and may also contain the requested content.


HTTP Methods
- GET
- POST
- PUT
- HEAD
- DELETE
- PATCH
- OPTIONS


Example of a request

POST / HTTP/1.1                                     <-- request line
Host: 127.0.0.1                                     <-- headers (mulitple lines, key-value)
Content-Type: application/x-www-form-urlencoded
                                                    <-- a blank like to separte headers & body
field1=aaa&code=x%3D1                               <-- body, \r\n for a new line ALWAYS




## HTTP Request

Content-Type is a required field in the headers, which is the body format depended on.
body is a key-value structure
Content-Length is a field that recommended not to pass by arguments.

JavaScript function: Map(): https://www.javascripttutorial.net/es6/javascript-map/

Template literals (Template strings): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

## HTTP send function

- gather all necessary information in Contractor of the Request class;
- send the request to the server by a new send function
- the send function returns a Promise because it is an async function.

## HTTP Response

Example of a response

HTTP/1.1 200 OK                     <-- status line
Content-TYpe: text/html
Date: Mon, 23 Dec 2019 06:46:19 GMT
Connection: keep-alive
Transfer-Encoding: chunked          <-- headers
                                    <-- blank line
26
<html><body> Hello World </body></html>
0                                   <-- body

                                    <-- blank chunk

HTTP response status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


## ResponseParser
An example of using FSM

## BodyParser

- Different type of Content-Type has a different data structure in the body, so it needs a specific body-parser to parse the body
- TrunkedBodyParser is another example of parsing the text with FSM

