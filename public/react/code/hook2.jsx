function useEffectWithoutMount(fn, deps) {
  const [mount, setMount] = React.useState(false)
  React.useEffect(() => {
    if (mount) {
      fn()
    } else {
      setMount(true)
    }
  }, deps)
}

const App = () => {
  const [count, setCount] = React.useState(0)

  useEffectWithoutMount(() => console.log(`count: ${count}`), [count])

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