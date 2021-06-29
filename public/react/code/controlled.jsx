const App = () => {
  const [content, setContent] = React.useState('')

  const onChange = e => setContent(e.target.value)
  const onConfirm = () => alert(`Confirm input: ${content}`)
  const onClear = () => setContent('')

  return (
    <div>
      <input type={'text'} value={content} onChange={onChange}/>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onClear}>Clear</button>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);