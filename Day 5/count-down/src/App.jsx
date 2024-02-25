import Player from "./components/Player.jsx"
import './App.css';
import TimerChallenge from "./components/TimerChallenge.jsx";

const App = () => {
  return (
    <>
    <div id="modal"></div>
    <div id="content">
      <header>
        <h1>The <em>Almost</em> Final Countdown</h1>
        <p>Stop the timer once you estimate that time is (almost) up</p>
      </header>
      <Player />
    </div>
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={1} />
        <TimerChallenge title="noteasy" targetTime={5} />
        <TimerChallenge title="getting" targetTime={15} />
        <TimerChallenge title="tough" targetTime={25} />
      </div>
    </>
  );
};

export default App;
