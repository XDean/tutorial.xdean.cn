const App = ({login}) => {
  if (login) {
    return <h1>Welcome back!</h1>
  } else {
    return <h1>Please Sign Up!</h1>
  }
}

ReactDOM.render(
  <App login={true}/>,
  document.getElementById('root')
);