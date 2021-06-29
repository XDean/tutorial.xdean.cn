const Temperature = ({value, onValueChange, unit}) => {
  return (
    <div>
      <input type={'number'} value={value} onChange={e => onValueChange(e.target.value)}/>
      °{unit}
    </div>
  )
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

const App = () => {
  const [celsius, setCelsius] = React.useState(0.0)
  return (
    <div>
      <Temperature
        unit={'C'}
        value={celsius}
        onValueChange={v => setCelsius(v)}
      />
      <Temperature
        unit={'F'}
        value={toFahrenheit(celsius)}
        onValueChange={v => setCelsius(toCelsius(v))}
      />
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);