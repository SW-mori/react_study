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

  return (
    <div className="App">
      <Title/>
      <button onClick={toggle}>{open ? 'close' : 'open'}</button>
      <div className={open ? 'isOpen' : 'isClose'}>
        <p>現在の数字は{count}です</p>
        <Button click={'increment'}/>
        <Button click={'decrement'}/>
      </div>
    </div>
  )
}
export default Counter;
