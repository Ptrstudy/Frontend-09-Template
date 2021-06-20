Study notes

## how to make a module
- Need to do unit test & Lint check
- End to end testomg is used sometimes

## More reading for building a React module/component:
- https://hinammehra.medium.com/build-a-private-react-component-library-cra-rollup-material-ui-github-package-registry-1e14da93e790
- https://medium.com/recraftrelic/building-a-react-component-as-a-npm-module-18308d4ccde9
- https://blog.bitsrc.io/3-ways-to-build-your-own-react-component-library-b4d00013a716?gi=d4c1eee3b7e


## Replace function

Example from Winter's code
```
this[ATTRIBUTE]["on" + type.replace(/^[\s\S]/, s => s.toUpperCase())](new CustomEvent(type, {detail: args}));
```
more reading about Specifying a function as a parameter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_a_parameter