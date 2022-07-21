import { useState } from 'react';

const Button = () => {

  // countという名前のstate変数を宣言、初期値0をセット
  const [count, setCount] = useState(0)
  
  return (
    <>
      <p>現在の数字は{count}です</p>
      <button onClick={() => setCount(prevState => prevState + 1)}>+ 1</button>
      <button onClick={() => setCount(count - 1)}>- 1</button>
      <button onClick={() => setCount(0)}>リセット</button>
    </>
  )
}

export default Button;