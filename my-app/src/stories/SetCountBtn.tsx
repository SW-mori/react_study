import React from 'react';
import './setCountBtn.css';

interface ButtonProps {
  text: string
  value: () => void;
}

export const Button = ({
  text, 
  value
}: ButtonProps) => {
  return (
    <button type="button" onClick={value}>{text}</button>
  );
};
