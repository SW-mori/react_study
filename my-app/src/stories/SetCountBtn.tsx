import React from 'react';
import './setCountBtn.css';

export const Button = (props: any) => {
  return (
    <>
      <button type="button" onClick={props.args.value}>{props.args.text}</button>
    </>
  );
};
