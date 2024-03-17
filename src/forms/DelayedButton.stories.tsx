import type { Meta, StoryObj } from '@storybook/react';
import DelayedButton from './DelayedButton';

const meta: Meta<typeof DelayedButton> = {
  component: DelayedButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DelayedButton>;

export const Example: Story = {
  render: (args) => <DelayedButton {...args} />,
  args: {
    delaySeconds: 3,
    label: 'Delete',
    cancelLabel: 'Cancel deletion',
  },
};
