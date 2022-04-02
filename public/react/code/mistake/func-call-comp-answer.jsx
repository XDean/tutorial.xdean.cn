const Hiddenable = ({Comp}) => {
  const [show, setShow] = React.useState(true);
  if (show) {
    return (
      <div>
        <button onClick={() => setShow(false)}>Hide</button>
        <hr/>
        <Comp/>
      </div>
    );
  } else {
    return <button onClick={() => setShow(true)}>Show</button>;
  }
};

const Counter = () => {
  const [count, setCount] = React.useState(0);
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
  );
};

const App = () => {
  return <Hiddenable Comp={Counter}/>;
};

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);