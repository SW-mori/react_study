import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './SetCountBtn';

export default {
  title: 'Example/SetCountBtn',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const CountUp = Template.bind({});
CountUp.args = {
  text: '+ 1',
};

export const CountDown = Template.bind({});
CountDown.args = {
  text: '- 1',
};

export const Reset = Template.bind({});
Reset.args = {
  text: 'reset',
};
