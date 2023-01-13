Higher order components: pass reusable logic down as props to components throughout your application.

We can apply logic to another component, by:

1. Receiving another component as its props
2. Applying additional logic to the passed component
3. Returning the same or a new component with additional logic
```
export function withStyles(Component) {
  return (props) => {
    const style = {
      color: "red",
      fontSize: "1em",
      // Merge props
      ...props.style,
    };

    return <Component {...props} style={style} />;
  };
}

/* then, we can import the withStyles HOC, and wrap any component that needs styling. */

import { withStyles } from "./hoc/withStyles";

const Text = () => <p style={{ fontFamily: "Inter" }}>Hello world!</p>;
const StyledText = withStyles(Text);
```

Cons:
 - Naming collisions (an HOC overrides a prop of a component)
 - Readability (multiple HOCs and levels difficult to find out what is coming from where)

 If you want to avoid renaming, you can merge the props like so:
 ```
 function withStyles(Component) {
  return props => {
    const style = {
      padding: '0.2rem',
      margin: '1rem',
      // Merge props
      ...props.style
    }

    return <Component {...props} style={style} />
  }
}

// The `Button` component has a `style` prop, that shouldn't get overwritten in the HOC.
const Button = () = <button style={{ color: 'red' }}>Click me!</button>
const StyledButton = withStyles(Button)
 ```