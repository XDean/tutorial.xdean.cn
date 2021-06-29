const App = (props) => (
  <h1>
    Hello, {props.name}!
  </h1>
)

ReactDOM.render(
  <App name={'XDean'}/>,
  document.getElementById('root')
);