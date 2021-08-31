const Square = ({onClick, value}) => (
  <button className={'square'} onClick={onClick}>
    {value}
  </button>
)

const Board = ({squares, onClick}) => (
  <div>
    {[0, 1, 2].map(row => (
      <div key={row} className={'board-row'}>
        {[0, 1, 2].map(col => {
          const idx = 3 * row + col
          return (
            <Square
              key={col}
              value={squares[idx]}
              onClick={() => onClick(idx)}
            />
          );
        })}
      </div>
    ))}
  </div>
)

const App = () => {
  const [history, setHistory] = React.useState([Array(9).fill(null)])
  const [index, setIndex] = React.useState(0)
  const winner = React.useMemo(() => calculateWinner(history[index]), [history, index])

  const handleClickBoard = (i) => {
    const current = history[index];
    const squares = current.slice();
    if (winner != null || squares[i]) {
      return;
    }
    squares[i] = index % 2 === 0 ? 'X' : 'O';

    const newHistory = [...history.slice(0, index + 1), squares];
    setHistory(newHistory)
    setIndex(newHistory.length - 1)
  }

  return (
    <div>
      <h2>Tic Tac Toe</h2>
      <div className={'game'}>
        <div className={'game-board'}>
          <Board
            squares={history[index]}
            onClick={handleClickBoard}
          />
        </div>
        <div className={'game-info'}>
          <div>
            {winner ?
              (winner === 'draw' ? 'Draw' : 'Winner: ' + winner) :
              'Next player: ' + (index % 2 === 0 ? 'X' : 'O')}
          </div>
          <ol>
            {history.map((_, idx) => (
              <li key={idx}>
                <button onClick={() => setIndex(idx)}>
                  {idx === 0 ? 'Go to game start' : `Go to move #${idx}`}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.every(e => e !== null)) {
    return 'draw'
  } else {
    return null;
  }
}
