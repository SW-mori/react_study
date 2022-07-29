import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { Button } from './SetCountBtn';
import { Button } from '../components/button/setCountBtn'

let count = 0

const addCount = () => {
  count = count + 1;
}

// const minusCount = () => {
//   count = count - 1;
// }

// const resetCount = () => {
//   count = 0;
// }

export default {
  title: 'Example/SetCountBtn',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Button data={args.add} />
    </>
  )
}

export const CountUp = Template.bind({});
CountUp.args = {
  add: {
    text: '+ 1',
    value: addCount
  }
};

// export const CountDown = Template.bind({});
// CountDown.args = {
//   minus: {
//     text: '- 1',
//     value: minusCount
//   }
// };

// export const Reset = Template.bind({});
// Reset.args = {
//   reset: {
//     text: 'reset',
//     value: resetCount
//   }
// };
