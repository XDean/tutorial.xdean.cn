function useRenderTimes() {
  const times = React.useRef(0);
  times.current++;
  return times.current;
}

const themes = {
  light: {
    color: '#000000',
    background: '#ffffff'
  },
  dark: {
    color: 'blue',
    background: 'yellow'
  }
};

const ThemeContext = React.createContext({
  style: themes.light,
  toggle: () => null,
});

function App() {
  const [theme, setTheme] = React.useState('light');
  const [count, setCount] = React.useState(0);
  const ctx = React.useMemo(() => ({
    style: themes[theme],
    toggle: () => setTheme(t => t === 'light' ? 'dark' : 'light'),
  }), [theme]);
  return (
    <ThemeContext.Provider value={ctx}>
      <Toolbar/>
      <Main/>
      <hr/>
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
      </div>
    </ThemeContext.Provider>
  );
}

const Toolbar = React.memo((props) => {
  const theme = React.useContext(ThemeContext);
  const times = useRenderTimes();
  return (
    <div style={theme.style} className={'app-bar'}>
      App Title (Render {times} times)
    </div>
  );
});

const Main = React.memo(() => {
  const theme = React.useContext(ThemeContext);
  const times = useRenderTimes();
  return (
    <div style={theme.style} className={'main'}>
      <div>
        App main content (Render {times} times)
      </div>
      <button style={theme.style} onClick={theme.toggle}>
        Toggle Theme
      </button>
    </div>
  );
});


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);