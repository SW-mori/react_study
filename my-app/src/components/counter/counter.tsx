import '../../css/counter.css';
import { CountButton } from '../../components/button/setCountBtn';
import { useState } from 'react';

const Counter = () => {
  
  // open という名前の state 変数を宣言、初期値 true をセット
  const [open, setOpen] = useState(true)

  // toggleの関数を宣言
  const toggle = () => setOpen(!open)

  // countという名前のstate変数を宣言、初期値0をセット
  const [count, setCount] = useState(0)

  // カウントを+1する関数addCountを宣言
  const addCount = () => {
    setCount(prevState => prevState + 1)
  }

  // カウントを-1する関数minusCountを宣言
  const minusCount = () => {
    setCount(prevState => prevState - 1)
  }

  // カウントを0にリセットする関数counterResetを宣言
  const counterReset = () => {
    setCount(0)
  }


  // テキストと関数をもつオブジェクトdataを定義
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
    <>
      <button onClick={toggle}>{open ? 'close' : 'open'}</button>
      <div className={open ? 'isOpen' : 'isClose'}>
        <p>現在の数字は{count}です</p>
        <CountButton data={data.add}/>
        <CountButton data={data.minus}/>
        <CountButton data={data.reset}/>
      </div>
    </>
  )
}

export { Counter as CounterFunc };
