const Square = () => {
  return (
    <button className={'square'}>
      {/*  TODO, 显示棋子 */}
    </button>
  );
}

const Board = () => {
  return (
    <div>
      {[0, 1, 2].map(row => (
        <div key={row} className={'board-row'}>
          {[0, 1, 2].map(col => {
            return (
              <Square/>
            );
          })}
        </div>
      ))}
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h2>Tic Tac Toe</h2>
      <div className={'game'}>
        <div className={'game-board'}>
          <Board/>
        </div>
        <div className={'game-info'}>
          {/* TODO, 显示当前状态和历史 */}
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
