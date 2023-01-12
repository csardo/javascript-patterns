Use a Factory function to create many of the same objects. It can be any function that returns an object.

DRY: The factory pattern is useful when we have to create multiple objects that share the same properties, without having to repeat the same code over and over. A factory function can easily return a custom object depending on the current environment, or user-specific configuration.

It's not super applicable to JS (more applicable to languages that don't have built-in objects), it's just a function that returns an object without using the `new` keyword. ES^ arrow functions allow us to create a small factory function that implicitly return an object each time.
 - so instead of creating new objects each time, it may be better in JS to create new <i>instances</i> of that object with `class` and `new`.
```
 class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  async getPosts() {
    const posts = await fetch(`https://my.cms.com/posts/user/${this.id}`);
    return posts;
  }
}

const user1 = new User({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
});

const user2 = new User({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com",
});
```
The `getPosts` method is the same for all objects that were created. By creating new instanes, the method is available on the prototype instead of the object, which saves memory.

