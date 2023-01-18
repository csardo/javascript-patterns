Provider pattern uses `Context` API to share data b/w components.

Ex: theme with dark and light mode.

With Provider Pattern, the provider <i>provides</i> this context to components, which in turn consume the data.

Only the components that care about the data get re-rendered when the state updates

Provider = higher order component provided to us by the `Context` object. We can create a Context object, using the `createContext` method that React provides for us.

Any component wrapped in `ThemeProvider` below now has access to `theme` and `setTheme` properties.
```
export const ThemeContext = React.createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

...

const LandingPage = () => {
  <ThemeProvider>
    <TopNav />
    <Main />
  </ThemeProvider>;
};

const TopNav = () => {
  return (
    <ThemeContext.Consumer>
      {{ theme }} =>{" "}
      <div style={{ backgroundColor: theme === "light" ? "#fff" : "#000 " }}>
        ...
      </div>{" "}
      }
    </ThemeContext.Consumer>
  );
};
```

Or, instead of wrapping components 