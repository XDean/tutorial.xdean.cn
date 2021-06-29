const App = () => {
  const [count, setCount] = React.useState(0)
  const [big, setBig] = React.useState(false)

  React.useEffect(() => {
    console.log(`count: ${count}`)
  })

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Click Me
      </button>
      <button onClick={() => setCount(0)}>
        Clear
      </button>
      <button onClick={() => setBig(b => !b)}>
        Toggle Font Size
      </button>
      <p style={{fontSize: big && 40}}>
        You clicked {count} times
      </p>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);