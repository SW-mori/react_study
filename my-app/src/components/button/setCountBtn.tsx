export const Button = (props: any) => {
  console.log(props.data)
  return (
    <>
      <button onClick={props.data.value}>{props.data.text}</button>
    </>
  )
}