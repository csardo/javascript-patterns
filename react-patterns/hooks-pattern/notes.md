React Hooks are functions special types of functions that you can use in order to:

1. Add state to a functional component
2. Reuse stateful logic among multiple components throughout the app.
3. Manage a component's lifecycle

Hooks = useState, useEffect, useRender

You can create custom hooks, eg. useHover

Hooks are not like a shared states, they are not sharing state between components, it is just a way to add stateful logic to a component.

React knows a hook when it starts with the word `use`.

Pros:
 - reuse stateful logic
 - share non-visual logic
 - alternative to con-pres pattern (no need to wrap components in another component)

Cons
 - need to follow specific rules (linters help this)