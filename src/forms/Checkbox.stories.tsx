import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const BasicCheckbox: Story = {
  render: (args) => {
    const [value, setValue] = useState(false);

    return (
      <Checkbox
        {...args}
        label={args.label}
        checked={value}
        onChange={setValue}
      />
    );
  },
  args: {
    label: 'Send me updates via email',
  },
};
