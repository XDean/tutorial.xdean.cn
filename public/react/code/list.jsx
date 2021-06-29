const Welcome = (props) => (
  <h1>Hello, {props.name}</h1>
)

const people = ['Sara', 'Cahal', 'Edite']

const App = () => (
  <div>
    {people.map(e => (
      <Welcome key={e} name={e}/>
    ))}
  </div>
)

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);