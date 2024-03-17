import type { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Example: Story = {
  render: (args) => (
    <>
      <Heading {...args} type="page-title">
        {args.children} (type=page-title)
      </Heading>
      <Heading {...args} type="section-title">
        {args.children} (type=section-title)
      </Heading>
      <Heading {...args} type="sub-heading">
        {args.children} (type=sub-heading)
      </Heading>
    </>
  ),
  args: { children: 'Example heading' },
};
