import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/button/setCountBtn';

export default {
  title: 'Example/SetCountBtn',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const CountUp = Template.bind({});
export const CountDown = Template.bind({});
export const Reset = Template.bind({});

CountUp.args = {
};
