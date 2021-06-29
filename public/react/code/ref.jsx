const App = () => {
  const inputEl = React.useRef(null);
  const onButtonClick = () => inputEl.current.focus();
  return (
    <div>
      <input ref={inputEl} type="text"/>
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);