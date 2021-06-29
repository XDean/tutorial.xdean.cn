const LoginButton = (props) => (
  <button onClick={props.onClick}>
    Login
  </button>
)

const LogoutButton = (props) => (
  <button onClick={props.onClick}>
    Logout
  </button>
)

const App = () => {
  const [login, setLogin] = React.useState(false)
  return (
    <div>
      {login ?
        <LogoutButton onClick={() => setLogin(false)}/> :
        <LoginButton onClick={() => setLogin(true)}/>}
      {login && <h1>Welcome Back!</h1>}
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);