const Label = ({data}) => {
  console.log('render label', data)
  return (
    <p style={{fontSize: data.size || 12}}>
      {data.msg}
    </p>
  )
}

const App = () => {
  const [count, setCount] = React.useState(0)
  const title = {msg: 'React Counter', size: 20}
  const content = {msg: `You clicked ${count} times`}

  return (
    <div>
      <Label data={title}/>
      <button onClick={() => setCount(c => c + 1)}>
        Click Me
      </button>
      <button onClick={() => setCount(0)}>
        Clear
      </button>
      <Label data={content}/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);