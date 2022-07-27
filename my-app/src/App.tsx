import './css/App.css';
import { Title } from './components/title';
import { Counter } from './components/counter/counter';

export const App = () => {

  return (
    <div className="App">
      <Title/>
      <Counter/>
    </div>
  )
}
