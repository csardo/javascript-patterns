import * as React from 'react';
import './style.css';
import TemperatureConverter, { Fahrenheit, Kelvin } from './TemperatureConverter';

export default function App() {
  return <TemperatureConverter 
    far={Fahrenheit}
    kel={Kelvin}
  />;
}
