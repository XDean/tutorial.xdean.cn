const Welcome = (props) => (
  <h1>Hello, {props.name}</h1>
)

const App = () => (
  <div>
    <Welcome name="Sara"/>
    <Welcome name="Cahal"/>
    <Welcome name="Edite"/>
  </div>
)

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);