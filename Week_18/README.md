Study Notes

# Unit tests

## Mocha
(Another popular one is Jest)

run mocha
```
npm install --global mocha
```

The official website: 
https://mochajs.org/

### The difference between "module.exports" and "export"

Nodejs(Mocha uses) does't support "export", so, Mocha cannot be executed.

If we want to use "export", we will need use "babel".

# Babel/register

To install these modules for using babel/register 
- babel/core
- babel/register
- babel/preset-env

and run 
```
./node_modules/.bin/mocha --require @babel/register
``` 
to test the code.

It also can be added into "package.json", for example:
```
"scripts": {
    "test": "mocha --require @babel/register"
  },
```
# Code Coverage

## install istanbuljs module & plugins
- npm install --save-dev nyc
- npm install --save-dev babel-plugin-istanbul
- npm install --save-dev @istanbuljs/nyc-config-babel

## add "Coverage" into package.json

```
  "scripts": {
    "test": "mocha --require @babel/register",
    "coverage": "nyc mocha"
  },
```

# Write unit test cases for "HTML Parser"

refers to the code
(TODO: Several issues in the code, no time to resolve for now)

# Add all tools to the generator

refers to the code.