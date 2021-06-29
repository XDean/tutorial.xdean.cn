const Temperature = ({unit}) => {
  const [value, setValue] = React.useState(0.0)
  return (
    <div>
      <input type={'number'} value={value} onChange={e => setValue(e.target.value)}/>
      °{unit}
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Temperature unit={'C'} />
      <Temperature unit={'F'} />
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);