import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Example: Story = {
  render: (args) => (
    <>
      <Tag>Color: Normal</Tag>
      <Tag color="highlight">Color: Highlight</Tag>
      <Tag color="positive">Color: Positive</Tag>
      <Tag color="negative">Color: Negative</Tag>
      <Tag color="accent">Color: Accent</Tag>
    </>
  ),
  args: {},
};
