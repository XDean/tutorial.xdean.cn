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

const ThemeContext = React.createContext({
  style: themes.light,
  toggle: () => null,
});

function App() {
  const [theme, setTheme] = React.useState('light')
  return (
    <ThemeContext.Provider value={{
      style: themes[theme],
      toggle: () => setTheme(t => t === 'light' ? 'dark' : 'light'),
    }}>
      <Toolbar/>
      <Main/>
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  const theme = React.useContext(ThemeContext);
  return (
    <div style={theme.style} className={'app-bar'}>
      App Title
    </div>
  );
}

function Main() {
  const theme = React.useContext(ThemeContext);
  return (
    <div style={theme.style} className={'main'}>
      <div>
        App main content
      </div>
      <button style={theme.style} onClick={theme.toggle}>
        Toggle Theme
      </button>
    </div>
  );
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);