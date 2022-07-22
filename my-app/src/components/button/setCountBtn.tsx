const Button = (props: any) => {

  console.log(props)
  return (
    <>
      <button onClick={props.value}>{props.text}</button>
    </>
  )
}

export default Button;