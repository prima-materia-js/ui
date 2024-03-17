import type { Meta, StoryObj } from '@storybook/react';
import LeftRight from './LeftRight';
import ExampleContent from '../storybook/ExampleContent';

const meta: Meta<typeof LeftRight> = {
  component: LeftRight,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LeftRight>;

export const Example: Story = {
  render: (args) => (
    <LeftRight>
      <ExampleContent>1</ExampleContent>
      <ExampleContent>2</ExampleContent>
    </LeftRight>
  ),
};
