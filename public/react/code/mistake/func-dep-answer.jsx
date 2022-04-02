const App = () => {
  const [enable, setEnable] = React.useState(true);
  const [step, setStep] = React.useState(1);
  const [count, setCount] = React.useState(0);

  const countAdd = React.useCallback(() => {
    setCount(c => c + step);
  }, [step]);

  const onCountClick = React.useCallback(() => {
    if (enable) {
      countAdd();
    }
  }, [enable, countAdd]);
  return (
    <div>
      step: <input type={'number'}
                   value={step}
                   onChange={e => setStep(Number(e.target.value))}/>
      <hr/>
      count: {count}
      <hr/>
      <input type="checkbox"
             checked={enable}
             onChange={() => setEnable(e => !e)}/> enable
      <hr/>
      <button onClick={onCountClick}>add</button>
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);