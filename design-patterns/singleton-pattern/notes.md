Share a sindle global instance throughout the app.
 - do this by restricting the instantiation of certain classes to one single instance.
 - the single instance is unmodifiable, and can be accessed globally
 - <b>imports</b> of this singleton share the same instance

<h3>Ways to create singletons</h3>

1. Use the ES6 `class` keyword.
 - You need to make sure that another instance of the class does not already exist
```
    class Counter {
        constructor() {
            if (instance) {
                throw new Error("You can only create one instance!");
            }
            this.counter = counter;
            instance = this;
        }
    ...
```
 - Then you need to make sure the object is immutable, so you can't add/remove properties that don't already exist. You can do this with `Object.freeze`.
```
// 2. Setting a variable equal to the the frozen newly instantiated object, by using the built-in `Object.freeze` method.
// This ensures that the newly created instance is not modifiable.
const singletonCounter = Object.freeze(new Counter());
```
 - Then export the object
// 3. Exporting the variable as the `default` value within the file to make it globally accessible.
```
export default singletonCounter;
```

2. Directly create objects. We could even export the frozen object directly, without having to declare multiple variables.
```
let counter = 0;

export default Object.freeze({
  getCount: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
});
```

<h3></h3>
 - ES2015 modules are singletons by default
 - dependency hiding
 - global scope pollution
 - testing