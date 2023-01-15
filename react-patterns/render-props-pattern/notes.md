Render props = props that render data to the screen
 - pass components as props to other components
 - the components that are passed as props can in turn receive props from that component

 ```
 function Input(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {props.renderKelvin({ value: value + 273.15 })}
      {props.renderFahrenheit({ value: (value * 9) / 5 + 32 })}
    </>
  );
}

export default function App() {
  return (
    <Input
      renderKelvin={({ value }) => <div className="temp">{value}K</div>}
      renderFahrenheit={({ value }) => <div className="temp">{value}°F</div>}
    />
  );
}
 ```

Pros
 - reusability
 - separation of concerns
 - explicitly pass props = now we know exactly where props are coming from

Cons
 - Unnecesary with hooks