import './css/App.css';
import { CounterTitle } from './components/title';
import { CounterFunc } from './components/counter/counter';

const App = () => {

  return (
    <div className="App">
      <CounterTitle/>
      <CounterFunc/>
    </div>
  )
}

export { App as CounterApp };
