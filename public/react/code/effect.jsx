const App = () => {
  const [count, setCount] = React.useState(0)

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
      <p>
        You clicked {count} times
      </p>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);