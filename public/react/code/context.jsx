const themes = {
  light: {
    color: "#000000",
    background: "#ffffff"
  },
  dark: {
    color: "#ffffff",
    background: "#000000"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar/>
      <Main/>
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  const theme = React.useContext(ThemeContext);
  return (
    <div style={theme} className={'app-bar'}>
      App Title
    </div>
  );
}

function Main() {
  const theme = React.useContext(ThemeContext);
  return (
    <div style={theme} className={'main'}>
      App main content
    </div>
  );
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);