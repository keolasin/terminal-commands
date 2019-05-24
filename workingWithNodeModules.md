# Questions
1. How do you import a module?
  To import a module in NodeJs, we would use the ```require``` keyword, like so: 
  ```js
    const importedThing = require('./path/importedThing.js');
  ```
2. What JavaScript statement do you use to export a module?
  To export a module in NodeJs, we would export it to the ```module.exports``` object, either by passing multiple methods in an object:
  ```js
    module.exports = {
      myMethod: (names, phones) => {
        console.log(`${names} and ${phones}`);
      },
      methodTwo: () => {
        //some code
      }
    };
  ```
  or, by assigning a single method at a time:
  ```js
    module.exports.myMethod = (names, phones) => {
      console.log(`${names} and ${phones}`);
    } ;
  ```

## Online Research Questions
3. Are there other ways to export a module?
  Yes - for this exercise, we are using NodeJs and its method of module implementation - the require/module.exports keywords. However, this is an adoption and adaptation of the CommonJs implementation - which allowed one to use require/exports, and help avoid some direct assignment problems (```module.exports = "Some value"``` vs ```exports = "Some value"```. Because NodeJs has adopted CommonJs, we can now do this in Node as well. However, this does differ significantly from ES6 imports/exports and AMD (asynchronous module definitions), which allow for asynchronous module implementation, whereas Node (currently) only allows synchronous usage through ```require``` and ```module.exports```.
4. What are ES6 modules and how do they differ from the module we created in this checkpoint?
  ES6 modules are the native javascript implementation of import/export and module use - these allow for asynchronous and synchronous, but are not dynamic. Meanwhile, the ```require``` keyword is fully synchronous - we cannot expect to ```require``` a module that has been exported using ES6 unless we make some modifications, potentially utilizing a different extension (.mjs, 'michael jackson script', to be handled as an ES6 module, and .js to be handled by CommonJs) or explicitly default imports/exports. Similarly, if we use a transpiler like Babel, it will convert named imports to CommonJs, however this is unique from the native implementation of ES6 named imports.
  The best thing would be to use ES6 modules in the front end (through React, which already uses a babel transpiler due to JSX implementation), and maintain NodeJs/CommonJs syntax in the back-end, to avoid some of these interoperability issues between varying 'modules'.
  
## Sources
[Native ES Modules in NodeJS: Status And Future Directions, Part I](https://medium.com/@giltayar/native-es-modules-in-nodejs-status-and-future-directions-part-i-ee5ea3001f71)
[An Update on ES6 Modules in Node.js](https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c)
[CommonJS vs AMD vs RequireJS vs ES6 Modules](https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b)
[Using node.js require vs ES6 import/export](https://stackoverflow.com/questions/31354559/using-node-js-require-vs-es6-import-export)
