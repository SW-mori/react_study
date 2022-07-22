import './css/App.css';
import Title from './components/title';
import Button from './components/button/setCountBtn';
import { useState } from 'react';

const Counter = () => {
  // open という名前の state 変数を宣言、初期値 true をセット
  const [open, setOpen] = useState(true)
  // toggleの関数を宣言
  const toggle = () => setOpen(!open)
  // countという名前のstate変数を宣言、初期値0をセット
  const [count, setCount] = useState(0)

  let text: string

  let value
  
  const addCount = () => {
    setCount(prevState => prevState + 1)
  }
  
  // if (click.click === 'increment') {
  //   text = '+ 1'
  //   value = () => setCount(prevState => prevState + 1)
  // }  else if (click.click === 'decrement') {
  //   text = '- 1'
  //   value = () => setCount(count - 1)
  // } else {
  //   text = 'reset'
  //   value = () => setCount(0)
  // }

  return (
    <div className="App">
      <Title/>
      <button onClick={toggle}>{open ? 'close' : 'open'}</button>
      <div className={open ? 'isOpen' : 'isClose'}>
        <p>現在の数字は{count}です</p>
        <button onClick={addCount}>+ 1</button>
        <Button text={'- 1'} value={addCount}/>
      </div>
    </div>
  )
}
export default Counter;
