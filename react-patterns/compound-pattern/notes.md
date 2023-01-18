Compound pattern - created multiple components that work together to perform a single task.

Ex: flyout component that exposes several sub components. It is stateful so search input doesn't have to be
```
import React from "react";
import { FlyOut } from "./FlyOut";

export default function SearchInput() {
  return (
    <FlyOut>
      <FlyOut.Input placeholder="Enter an address, city, or ZIP code" />
      <FlyOut.List>
        <FlyOut.ListItem value="San Francisco, CA">
          San Francisco, CA
        </FlyOut.ListItem>
        <FlyOut.ListItem value="Seattle, WA">Seattle, WA</FlyOut.ListItem>
        <FlyOut.ListItem value="Austin, TX">Austin, TX</FlyOut.ListItem>
        <FlyOut.ListItem value="Miami, FL">Miami, FL</FlyOut.ListItem>
        <FlyOut.ListItem value="Boulder, CO">Boulder, CO</FlyOut.ListItem>
      </FlyOut.List>
    </FlyOut>
  );
}
```

You can implement via a (1) Provider, or (2) `React.Children.map`.

<h3>(1) Provider Solution</h3>

The FlyOut compound component consists of:

1. `FlyoutContext` to keep track of the visbility state of FlyOut
2. `Input` to toggle the FlyOut's List component's visibility
3. `List` to render the FlyOut's ListItemss
4. `ListItem` that gets rendered within the List.

```
export function FlyOut(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const toggle = React.useCallback(() => setOpen((state) => !state), []);

  return (
    <FlyOutContext.Provider value={{ open, toggle, value, setValue }}>
      <div>{props.children}</div>
    </FlyOutContext.Provider>
  );
}

function Input(props) {
  const { value, toggle } = React.useContext(FlyOutContext);

  return <input onFocus={toggle} onBlur={toggle} value={value} {...props} />;
}

function List({ children }) {
  const { open } = React.useContext(FlyOutContext);

  return open && <ul>{children}</ul>;
}

function ListItem({ children, value }) {
  const { setValue } = React.useContext(FlyOutContext);

  return <li onMouseDown={() => setValue(value)}>{children}</li>;
}

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItem = ListItem;
```

<h3>(2) React.Children.map</h3>

You can use `React.Children.map` with `React.cloneElement`. Now instead of context API, use props

