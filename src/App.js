import { useImmer } from "use-immer";
import "./styles.css";

const CounterApp = ({ initialCount }) => {
  const [appState, updateAppState] = useImmer({
    count: initialCount
  });

  const incrementCounter = () => {
    updateAppState((draft) => {
      draft.count++;
    });
  };

  const decrementCounter = () => {
    updateAppState((draft) => {
      draft.count--;
    });
  };
  const shouldDisableIncrement = () => appState.count === 10;
  const shouldDisableDecrement = () => appState.count === 0;
  return (
    <div>
      <h2>My Counter</h2>
      <button onClick={incrementCounter} disabled={shouldDisableIncrement()}>
        Increment
      </button>
      <div>{appState.count}</div>
      <div>{appState.count + 1}</div>
      <button onClick={decrementCounter} disabled={shouldDisableDecrement()}>
        Decrement
      </button>
    </div>
  );
};
export default function App() {
  return (
    <div className="App">
      <CounterApp initialCount={2} />
      <CounterApp initialCount={7} />
    </div>
  );
}
