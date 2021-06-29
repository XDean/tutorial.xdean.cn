const App = () => {
  const title = <h1>React!</h1>
  const content = (who) => <div>Hello {who}</div>
  return (
    <div>
      {title}
      {content('XDean')}
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);