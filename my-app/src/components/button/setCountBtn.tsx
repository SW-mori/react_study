const Button = (text: any, value: any) => {

  
  return (
    <>
      <button onClick={value.value}>{text.text}</button>
    </>
  )
}

export default Button;