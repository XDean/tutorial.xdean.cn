const App = () => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const handle = setTimeout(() => {
      console.log(`send to server: ${count}`)
    }, 2000)
    return () => clearTimeout(handle)
  }, [count])

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