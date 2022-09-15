import React from 'react';
import './setCountBtn.css';

export const Button = (props: any) => {
  return (
    <>
      <button type="button" onClick={props.data.value}>{props.data.text}</button>
    </>
  );
};
