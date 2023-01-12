Use observables to notify subscribers when an event occurs.

Implementation:
```
    const observers = [];

    export default Object.freeze({
        notify: (data) => observers.forEach((observer) =>   observer(data)),
        subscribe: (func) => observers.push(func),
        unsubscribe: (func) => {
            [...observers].forEach((observer, index) => {
                if (observer === func) {
                    observers.splice(index, 1);
                }
            });
        },
    });
```

When there is a change on the object, all of the observers that are currently subscribed are invoked with the data.

It doesn't matter who the observers are or what the methods do, we just pass the data to all of the observers subscribed.

Ex: analytics subscriber on button click, or error handling.

Good for deciding what will subscribe/unsubscribe at runtime (rather than having a wrapper function that calls other functions).

Pros: separation of concerns-- observables object is not tightly coupled to observer objects.
Cons: Might be non performant if running sequentially with a lot of subscribers.