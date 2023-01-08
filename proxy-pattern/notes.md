The <b>proxy pattern</b> is used to intercept and control interactions to target objects.

Good for validation, logging, formatting, notifications, debugging. May affect perf.

```
const person = {
  name: "John Doe",
  age: 42,
  email: "john@doe.com",
  country: "Canada",
};

const personProxy = new Proxy(person, {
  get: (target, prop) => {
    console.log(`The value of ${prop} is ${target[prop]}`);
    return target[prop];
  },
  set: (target, prop, value) => {
    console.log(`Changed ${prop} from ${target[prop]} to ${value}`);
    target[prop] = value;
    return true;
  },
});
```

You can use the `Reflect` object rather than directly operating on the property. It will also return a truthy value, which you need to in the `set` method.
```
const personProxy = new Proxy(person, {
  get: (target, prop) => {
    return Reflect.get(target, property);;
  },
  set: (target, prop, value) => {
    return Reflect.set(target, property, value);
  },
});
```
