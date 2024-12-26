import type { Meta, StoryObj } from '@storybook/react';
import DateLabel from './DateLabel';

const meta: Meta<typeof DateLabel> = {
  component: DateLabel,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DateLabel>;

export const Example: Story = {
  args: {
    date: new Date(),
    format: 'E d LLL Y',
  },
  render: (args) => {
    const { date } = args;
    return <DateLabel {...args} date={date} />;
  },
};

export const ExampleWithUnixTimestamp: Story = {
  args: {
    date: new Date(),
    format: 'E d LLL Y',
  },
  render: (args) => {
    const { date } = args;
    return (
      <DateLabel {...args} date={Math.ceil((date as Date).getTime() / 1000)} />
    );
  },
};

export const ExampleWithISOString: Story = {
  args: {
    date: new Date(),
    format: 'E d LLL Y',
  },
  render: (args) => {
    const { date } = args;
    return <DateLabel {...args} date={(date as Date).toISOString()} />;
  },
};
