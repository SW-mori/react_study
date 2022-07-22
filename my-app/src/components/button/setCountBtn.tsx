import { useState } from 'react';

const Button = (click: any) => {

  // countという名前のstate変数を宣言、初期値0をセット
  const [count, setCount] = useState(0)

  let text: string

  let value

  if (click.click === 'increment') {
    text = '+ 1'
    value = () => setCount(prevState => prevState + 1)
  }  else if (click.click === 'decrement') {
    text = '- 1'
    value = () => setCount(count - 1)
  } else {
    text = 'reset'
    value = () => setCount(0)
  }
  
  return (
    <>
      <p>現在の数字は{count}です</p>
      <button onClick={value}>{text}</button>
    </>
  )
}

export default Button;