// 编辑器已经默认import
// import { makeAutoObservable } from "mobx"
// import { observer } from "mobx-react"

class Timer {

  constructor() {
    this.secondsPassed = 0
    makeAutoObservable(this)
  }

  increase() {
    this.secondsPassed += 1
  }

  reset() {
    this.secondsPassed = 0
  }
}

const myTimer = new Timer()

const TimerView = observer(({timer}) => (
  <button onClick={() => timer.reset()}>
    Seconds passed: {timer.secondsPassed}
  </button>
))

ReactDOM.render(<TimerView timer={myTimer}/>, document.body)

setInterval(() => myTimer.increase(), 1000)