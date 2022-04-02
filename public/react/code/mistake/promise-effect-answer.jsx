// 模拟fetch操作，随机1000ms，返回原数据
function syncToServer(input) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(input);
    }, Math.random() * 1000);
  });
}

const App = () => {
  const [count, setCount] = React.useState(0);
  const [server, setServer] = React.useState(0);

  React.useEffect(() => {
    setServer('syncing');
    let active = true;
    syncToServer(count)
      .then(e => {
        if (active) {
          setServer(e);
        }
      })
      .catch(() => {
        if (active) {
          setServer('error');
        }
      });
    return () => {
      active = false;
    };
  }, [count]);

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
      <hr/>
      <div>
        Server value: {server}
      </div>
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);