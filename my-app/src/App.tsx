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

  const addCount = () => {
    setCount(prevState => prevState + 1)
  }
  
  const minusCount = () => {
    setCount(count - 1)
  }

  const counterReset = () => {
    setCount(0)
  }

  const data = {
    add: {
      text: '+ 1',
      value: addCount
    },
    minus: {
      text: '- 1',
      value: minusCount
    },
    reset: {
      text: 'reset',
      value: counterReset
    }
  }

  return (
    <div className="App">
      <Title/>
      <button onClick={toggle}>{open ? 'close' : 'open'}</button>
      <div className={open ? 'isOpen' : 'isClose'}>
        <p>現在の数字は{count}です</p>
        <Button data={data.add}/>
        <Button data={data.minus}/>
        <Button data={data.reset}/>
      </div>
    </div>
  )
}
export default Counter;
