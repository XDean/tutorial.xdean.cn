function useDebounce(fn, millis, deps) {
  React.useEffect(() => {
    const handle = setTimeout(() => {
      fn()
    }, millis)
    return () => clearTimeout(handle)
  }, deps)
}

const App = () => {
  const [count, setCount] = React.useState(0)

  useDebounce(() => console.log(`send to server: ${count}`), 2000, [count])

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