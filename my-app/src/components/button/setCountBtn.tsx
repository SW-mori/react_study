export const Button = (props: any) => {

  return (
    <>
      <button onClick={props.data.value}>{props.data.text}</button>
    </>
  )
}